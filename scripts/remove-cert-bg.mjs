import fs from "fs";
import path from "path";
import { PNG } from "pngjs";

const inputPath = process.argv[2];
if (!inputPath) {
  console.error("Usage: node remove-cert-bg.mjs <png-path>");
  process.exit(1);
}

const buffer = fs.readFileSync(inputPath);
const png = PNG.sync.read(buffer);
const { width, height, data } = png;

const THRESHOLD = 42;

function isBackground(r, g, b, a) {
  if (a < 10) return true;
  return r <= THRESHOLD && g <= THRESHOLD && b <= THRESHOLD;
}

function idx(x, y) {
  return (width * y + x) << 2;
}

const visited = new Uint8Array(width * height);
const queue = [];

for (let x = 0; x < width; x += 1) {
  queue.push([x, 0], [x, height - 1]);
}
for (let y = 0; y < height; y += 1) {
  queue.push([0, y], [width - 1, y]);
}

let head = 0;
while (head < queue.length) {
  const [x, y] = queue[head++];
  if (x < 0 || y < 0 || x >= width || y >= height) continue;

  const pos = y * width + x;
  if (visited[pos]) continue;
  visited[pos] = 1;

  const i = idx(x, y);
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const a = data[i + 3];

  if (!isBackground(r, g, b, a)) continue;

  data[i + 3] = 0;

  queue.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
}

const out = PNG.sync.write(png);
fs.writeFileSync(inputPath, out);
console.log(`Processed ${path.basename(inputPath)} (${width}x${height})`);
