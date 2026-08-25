import sharp from "sharp";

async function findTightPaperBounds(path) {
  const { data, info } = await sharp(path)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const frame = { left: 920, top: 250, right: 3180, bottom: 3360 };

  const isPaper = (r, g, b) =>
    (r > 170 && g > 120 && b < 130) || (r > 220 && g > 220 && b > 220);

  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;

  for (let y = frame.top; y <= frame.bottom; y += 1) {
    for (let x = frame.left; x <= frame.right; x += 1) {
      const i = (y * width + x) * channels;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      if (!isPaper(r, g, b)) continue;
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
  }

  return {
    left: minX,
    top: minY,
    width: maxX - minX + 1,
    height: maxY - minY + 1,
  };
}

console.log(await findTightPaperBounds("public/images/about/safety/Certi1.png"));
