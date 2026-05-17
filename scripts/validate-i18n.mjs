import { ar } from "../src/lib/i18n/dictionaries/ar.ts";
import { en } from "../src/lib/i18n/dictionaries/en.ts";

function flatKeys(obj, prefix = "") {
  const keys = [];
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      keys.push(...flatKeys(value, path));
    } else {
      keys.push(path);
    }
  }
  return keys;
}

const arKeys = flatKeys(ar).sort();
const enKeys = flatKeys(en).sort();
const missingInEn = arKeys.filter((k) => !enKeys.includes(k));
const missingInAr = enKeys.filter((k) => !arKeys.includes(k));

const lengthChecks = [
  ["nav.links", ar.nav.links.length, en.nav.links.length],
  ["services.items", ar.sections.services.items.length, en.sections.services.items.length],
  ["experience.timeline", ar.sections.experience.timeline.length, en.sections.experience.timeline.length],
  ["certifications.credentials", ar.sections.certifications.credentials.length, en.sections.certifications.credentials.length],
  ["articles.items", ar.sections.articles.items.length, en.sections.articles.items.length],
  ["achievements.stats", ar.sections.achievements.stats.length, en.sections.achievements.stats.length],
  ["contact.form.options", ar.sections.contact.form.options.length, en.sections.contact.form.options.length],
];

let failed = false;

if (missingInEn.length) {
  console.error("Missing in EN:", missingInEn);
  failed = true;
}
if (missingInAr.length) {
  console.error("Missing in AR:", missingInAr);
  failed = true;
}

for (const [name, a, b] of lengthChecks) {
  if (a !== b) {
    console.error(`Length mismatch ${name}: ar=${a} en=${b}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log(`i18n OK — ${arKeys.length} keys, all array lengths match.`);
