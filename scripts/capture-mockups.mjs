// Captures the dev-only /mockups/[id] pages into optimized WebP screenshots
// used by the Services section. Requires `next dev` running and a local
// Chrome or Edge install.
//
//   npm run capture:mockups            (defaults to http://localhost:3000)
//   BASE_URL=http://localhost:3001 npm run capture:mockups

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import sharp from "sharp";

const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";
const OUT_DIR = join(process.cwd(), "public", "services");
const SCALE = 2;

const SHOTS = [
  { id: "aplikasi-web", width: 1280, height: 800 },
  { id: "aplikasi-mobile", width: 390, height: 844 },
  { id: "kasir-stok", width: 1280, height: 800 },
  { id: "booking-online", width: 1280, height: 800 },
  { id: "operasional-kantor", width: 1280, height: 800 },
  { id: "sambungkan-aplikasi", width: 1280, height: 800 },
];

const BROWSERS = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const browser = BROWSERS.find((p) => existsSync(p));
if (!browser) throw new Error("No Chrome/Edge found. Set CHROME_PATH.");

mkdirSync(OUT_DIR, { recursive: true });
const tmp = mkdtempSync(join(tmpdir(), "mockups-"));

try {
  for (const { id, width, height } of SHOTS) {
    const png = join(tmp, `${id}.png`);
    execFileSync(browser, [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      `--user-data-dir=${join(tmp, "profile")}`,
      `--window-size=${width},${height}`,
      `--force-device-scale-factor=${SCALE}`,
      "--virtual-time-budget=4000",
      `--screenshot=${png}`,
      `${BASE_URL}/mockups/${id}`,
    ]);
    const out = join(OUT_DIR, `${id}.webp`);
    await sharp(png)
      .resize({ width: width === 390 ? 780 : 1600 })
      .webp({ quality: 82 })
      .toFile(out);
    console.log(`✓ ${id}`);
  }
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
