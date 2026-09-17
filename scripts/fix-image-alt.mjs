import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");

const SRC_ALT = [
  ["/images/enquiry/Vector.webp", "Enquiry form decorative frame"],
  ["/images/enquiry/Vector.png", "Enquiry form decorative frame"],
  ["/images/enquiry/homeabout 1.webp", "Mekark industrial construction project"],
  ["/images/enquiry/homeabout 1.png", "Mekark industrial construction project"],
  ["/images/enquiry/div.absolute.webp", "Enquiry section background texture"],
  ["/images/faq/question-mark.webp", "FAQ question mark illustration"],
  ["/images/hero/video-2.webp", "Civil construction project showcase"],
  ["/images/hero/peb-poster.webp", "Pre-engineered building construction showcase"],
  ["/images/hero/video-3.webp", "Multi-storey construction project showcase"],
  ["/images/services/civil/hero/bg.webp", "Civil construction project skyline"],
  ["/images/services/mep/hero/remove-1.webp", "Industrial MEP facility background"],
  ["/images/services/peb/hero/building.webp", "Pre-engineered industrial building by Mekark"],
  ["/images/services/solar/hero/remove-the-building-1.webp", "Commercial solar installation on industrial building"],
  ["/images/services/solar/hero/remove-the-building-2.webp", "Rooftop commercial solar panels on Mekark project"],
  ["/images/services/multi-storey/hero/sky-bg.webp", "Skyline backdrop for multi-storey steel building"],
  ["/images/services/tensile/hero/hero-bg.webp", "Tensile fabric structure canopy by Mekark"],
  ["/images/services/tensile/frame191/illustration.webp", "Tensile structure engineering illustration"],
  ["/images/services/civil/why-choose/building-bg.webp", "Commercial building under civil construction"],
  ["/images/services/civil/why-choose/blueprint.webp", "Structural blueprint for civil construction"],
  ["/images/services/civil/why-clients/bg.webp", "Civil construction site at Mekark project"],
  ["/images/services/civil/why-clients/site-blur.webp", "Civil construction site behind Mekark engineer"],
  ["/images/services/civil/cta/MidCTA.webp", "Civil construction project by Mekark"],
  ["/images/services/peb/why-choose/construction-site.webp", "Active PEB construction site managed by Mekark"],
  ["/images/services/peb/about/construction-detail.webp", "PEB construction detail at Mekark project"],
  ["/images/services/peb/about/peb-building.webp", "Completed pre-engineered building by Mekark"],
  ["/images/services/peb/peb-solutions/Mid CTA 1.webp", "Pre-engineered building project by Mekark"],
  ["/images/services/multi-storey/why-choose/site-bg.webp", "Multi-storey steel construction site background"],
  ["/images/services/multi-storey/why-choose/building-blur.webp", "Multi-storey steel building under construction"],
  ["/images/services/multi-storey/why-choose/worker.webp", "Construction worker at multi-storey steel project"],
  ["/images/services/multi-storey/frame212/cta/building.webp", "Multi-storey steel building project by Mekark"],
  ["/images/services/multi-storey/solutions/blueprint.webp", "Structural blueprint for multi-storey steel building"],
  ["/images/services/mep/why-choose/site-bg.webp", "Industrial MEP project site background"],
  ["/images/services/solar/why/copy-1.webp", "Solar EPC project site background"],
  ["/images/services/solar/why/image-25.webp", "Commercial rooftop solar installation overview"],
  ["/images/services/solar/end-to-end/solar-ete-1.webp", "End-to-end commercial solar EPC installation"],
  ["/images/services/tensile/why-choose/copy-1.webp", "Tensile structure project site background"],
  ["/images/about/history/about-hero-mobile.webp", "Mekark company history hero image"],
  ["/images/about/history/journey-bg-mobile.webp", "Mekark journey timeline background"],
  ["/images/about/history/journey-bg.webp", "Mekark journey timeline background"],
  ["/images/about/safety/5s/background-watermark.webp", "Safety standards section background watermark"],
  ["/images/industries/logistics/footer/footer-background.webp", "Logistics warehouse facility by Mekark"],
  ["/images/industries/pharma/footer/ed0f0baf5e66363731524bd1df3ed6c45dc08233.webp", "Pharmaceutical manufacturing facility by Mekark"],
  ["/images/industries/pharma/cta/why-pharma.webp", "Pharmaceutical manufacturing facility by Mekark"],
  ["/images/industries/data-center/cta/why-dc.webp", "Data center facility by Mekark"],
  ["/images/industries/food-and-beverage/cta/why-fb.webp", "Food and beverage manufacturing facility by Mekark"],
  ["/images/industries/automation/automation-quote-cta/factory-background.webp", "Automation manufacturing facility by Mekark"],
  ["/images/industries/logistics/CTA/eot-cta-worker.webp", "Mekark logistics consultant"],
  ["/images/engineering/background-watermark.webp", "Engineering section background watermark"],
];

const ICON_ALT = [
  ["SVG.svg", "Checkmark icon"],
  ["SVG-chevron.svg", "Dropdown arrow"],
  ["shield-tick.svg", "Verified badge icon"],
  ["cert-badge.svg", "ISO certification badge"],
  ["quotes-ltr.svg", "Opening quotation mark"],
  ["play-icon.svg", "Play video"],
  ["chevron.svg", "Expand section"],
  ["chevron-down.svg", "Expand section"],
  ["arrow.svg", "Arrow icon"],
  ["arrow-icon.svg", "Arrow icon"],
  ["arrow-right.svg", "Arrow icon"],
  ["arrow-right-dark.svg", "Arrow icon"],
  ["phone-icon.svg", "Phone icon"],
  ["quote-arrow.svg", "Quote request arrow"],
  ["call-phone.svg", "Call phone icon"],
  ["phone.svg", "Phone icon"],
  ["cta-arrow.svg", "Arrow icon"],
  ["component-4.svg", "Arrow icon"],
  ["Component 4.svg", "Arrow icon"],
  ["Component 1.svg", "FAQ expand icon"],
  ["planning-icon.svg", "Planning icon"],
  ["badge-frame.svg", "Decorative badge frame"],
  ["section-inner.svg", "Decorative section frame"],
  ["timeline.svg", "Process timeline illustration"],
  ["grid.webp", "Decorative grid background"],
  ["grid-bg.webp", "Decorative grid background"],
  ["grid-1-1.webp", "Decorative grid background"],
  ["frame-pattern.svg", "Decorative frame pattern"],
  ["circle-shadow.svg", "Decorative shadow graphic"],
  ["pen.svg", "Design icon"],
  ["clock.svg", "Timeline icon"],
  ["factory.svg", "Factory icon"],
  ["swap.svg", "Turnkey integration icon"],
  ["map-pin.svg", "Location icon"],
  ["shield.svg", "Safety standards icon"],
  ["banner-shield.svg", "Shield badge icon"],
  ["/images/one-partner/bg.webp", "One partner section background"],
  ["/images/one-partner/banner-skyline.webp", "Industrial skyline illustration"],
  ["grid-background.webp", "Decorative grid background"],
  ["/images/services/solar/CTA/solar-cta-1.webp", "Commercial solar project by Mekark"],
  ["/images/services/peb/why-choose/structure-backdrop.webp", "PEB steel structure backdrop"],
  ["/images/services/peb/why-choose/engineer.webp", "Mekark engineer at PEB construction site"],
  ["/images/services/mep/end-to-end/layer-14.webp", "Industrial MEP systems installation"],
  ["/images/industries/food-and-beverage/footer/footer-bg.webp", "Food and beverage facility footer background"],
  ["/images/industries/data-center/footer/footer.webp", "Data center facility footer background"],
  ["/images/industries/electronics/quote-cta/background.webp", "Electronics facility quote section background"],
  ["/images/industries/fmcg/fmcg-facility-cta/quote-request-banner-bg.webp", "FMCG facility quote request banner background"],
  ["page-prev.svg", "Previous page"],
  ["page-next.svg", "Next page"],
  ["location.svg", "Location icon"],
  ["star.svg", "Job type icon"],
  ["arrow-apply.svg", "Apply now arrow"],
];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function applySrcAlt(content, src, alt) {
  const srcPattern = escapeRegExp(src);
  const srcRegex = `src=\\{?["'\`]${srcPattern}["'\`]\\}?`;

  let next = content.replace(
    new RegExp(`(${srcRegex}[\\s\\S]{0,280}?)alt=""`, "g"),
    `$1alt="${alt}"`,
  );
  next = next.replace(
    new RegExp(`alt=""([\\s\\S]{0,280}?${srcRegex})`, "g"),
    `alt="${alt}"$1`,
  );
  return next;
}

function applyIconAlt(content, fileSuffix, alt) {
  const srcRegex = `src=\\{?["'\`][^"'\`]*${escapeRegExp(fileSuffix)}["'\`]\\}?`;

  let next = content.replace(
    new RegExp(`(${srcRegex}[\\s\\S]{0,280}?)alt=""`, "g"),
    `$1alt="${alt}"`,
  );
  next = next.replace(
    new RegExp(`alt=""([\\s\\S]{0,280}?${srcRegex})`, "g"),
    `alt="${alt}"$1`,
  );
  return next;
}

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) {
      if (name !== "node_modules" && !name.startsWith(".")) walk(p, acc);
    } else if (/\.(tsx|jsx)$/.test(name)) {
      acc.push(p);
    }
  }
  return acc;
}

const files = [
  ...walk(path.join(ROOT, "components")),
  ...walk(path.join(ROOT, "app")),
];

let touched = 0;
for (const file of files) {
  const original = fs.readFileSync(file, "utf8");
  let content = original;

  for (const [src, alt] of SRC_ALT) {
    content = applySrcAlt(content, src, alt);
  }
  for (const [suffix, alt] of ICON_ALT) {
    content = applyIconAlt(content, suffix, alt);
  }

  if (content !== original) {
    fs.writeFileSync(file, content, "utf8");
    touched += 1;
    console.log("updated:", path.relative(ROOT, file));
  }
}

console.log(`Done. Updated ${touched} files.`);
