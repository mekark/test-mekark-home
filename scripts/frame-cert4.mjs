import sharp from "sharp";

const PAPER = { left: 920, top: 339, width: 2261, height: 3022 };
const FLAT_REGION = { left: 800, top: 66, width: 2624, height: 3351 };
const templatePath = "public/images/about/safety/Certi1.png";
const sourcePath = "public/images/about/safety/Certi4.png";
const outputPath = "public/images/about/safety/Certi4.png";

const flatCert = await sharp(sourcePath)
  .extract(FLAT_REGION)
  .resize(PAPER.width, PAPER.height, { fit: "fill" })
  .png()
  .toBuffer();

await sharp(templatePath)
  .composite([{ input: flatCert, left: PAPER.left, top: PAPER.top }])
  .png()
  .toFile(outputPath);

await sharp(outputPath).resize(900).toFile("public/images/about/safety/_certi4-preview.jpg");
console.log("Framed Certi4 with inset paper bounds", PAPER);
