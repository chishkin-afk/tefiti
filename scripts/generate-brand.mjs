import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const project = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const directory = path.join(project, "public/assets/logo");
const drawing = `<g stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M320 113c23 0 42 8 56 22 40-6 74 14 89 50 38 12 64 43 62 79 35 15 42 48 10 79 24 27 8 66-29 79L367 512q-47 36-94 0L132 434c-39-13-43-46-20-73-40-25-39-65 1-88-3-39 22-70 62-85 14-37 50-58 92-53 14-14 30-22 53-22Z"/><path d="m267 135 33 188m76-188-26 188m115-138-75 161m137-82L412 391M175 188l81 157M113 273l116 117m-117-29 138 111m287-129L389 472M273 512q47 7 94 0"/></g><circle cx="320" cy="414" r="77" fill="currentColor"/>`;
const svg = (transparent = false) => `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="640" viewBox="0 0 640 640" color="${transparent ? "#8eacb5" : "#f6f7f3"}"><title>Логотип кофейни Тефити — ракушка с жемчужиной</title>${transparent ? "" : '<rect width="640" height="640" fill="#8eacb5"/>'}${drawing}</svg>`;

await fs.mkdir(directory, { recursive: true });
await Promise.all([
  fs.writeFile(path.join(directory, "tefiti-logo.svg"), svg()),
  fs.writeFile(path.join(directory, "tefiti-mark.svg"), svg(true)),
  fs.writeFile(path.join(project, "public/favicon.svg"), svg()),
  sharp(Buffer.from(svg())).resize(4096, 4096).png().toFile(path.join(directory, "tefiti-logo-hq.png")),
  sharp(Buffer.from(svg(true))).resize(2048, 2048).png().toFile(path.join(directory, "tefiti-mark.png")),
  sharp(Buffer.from(svg())).resize(64, 64).png().toFile(path.join(project, "public/favicon.png")),
  sharp(Buffer.from(svg())).resize(180, 180).png().toFile(path.join(project, "public/apple-touch-icon.png")),
]);
