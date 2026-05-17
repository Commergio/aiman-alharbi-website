import { writeFile } from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";
import toIco from "to-ico";

const SOURCE = path.join("public", "Logo_website1.png");
const PUBLIC_DIR = "public";
const APP_DIR = path.join("src", "app");

async function loadLogo() {
  return sharp(SOURCE)
    .ensureAlpha()
    .trim({ background: { r: 0, g: 0, b: 0 }, threshold: 18 })
    .toColourspace("srgb");
}

async function squareIconPng(logo, size, paddingRatio = 0.1) {
  const pad = Math.round(size * paddingRatio);
  const inner = size - pad * 2;

  const fitted = await logo
    .clone()
    .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: fitted, gravity: "center" }])
    .png()
    .toBuffer();
}

async function main() {
  const logo = await loadLogo();
  const logoBright = logo.clone().modulate({ brightness: 1.1, saturation: 1.08 });

  const png16 = await squareIconPng(logo, 16, 0.08);
  const png32 = await squareIconPng(logo, 32, 0.1);
  const png48 = await squareIconPng(logo, 48, 0.1);
  const png180 = await squareIconPng(logo, 180, 0.12);
  const png192 = await squareIconPng(logo, 192, 0.12);
  const darkTheme32 = await squareIconPng(logoBright, 32, 0.1);

  const ico = await toIco([png16, png32, png48]);

  await writeFile(path.join(PUBLIC_DIR, "favicon.ico"), ico);
  await writeFile(path.join(PUBLIC_DIR, "icon.png"), png32);
  await writeFile(path.join(PUBLIC_DIR, "icon-192.png"), png192);
  await writeFile(path.join(PUBLIC_DIR, "icon-dark.png"), darkTheme32);
  await writeFile(path.join(PUBLIC_DIR, "apple-touch-icon.png"), png180);

  await writeFile(path.join(APP_DIR, "favicon.ico"), ico);
  await writeFile(path.join(APP_DIR, "icon.png"), png32);
  await writeFile(path.join(APP_DIR, "apple-icon.png"), png180);

  console.log("Favicons generated from Logo_website1.png");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
