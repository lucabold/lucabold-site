# Rights Audit — lucabold.com

Audited: 2026-10-03
Auditor: Claude (automated, not legal advice)


## 1. Image inventory

All files in `assets/` as of this audit:

| File | Size | Dimensions | Copyright | Creator | GPS | PersonInImage | UsageTerms |
|------|------|-----------|-----------|---------|-----|---------------|------------|
| portfolio/luca-bold-portrait-black-and-white.webp | 68 KB | 948×1416 | — | — | — | Luca Bold | Present |
| portfolio/luca-bold-campaign-model-portrait-hero.webp | 88 KB | 1202×1800 | — | — | — | Luca Bold | Present |
| portfolio/luca-bold-headshot-white-shirt.webp | 222 KB | 1197×1800 | — | — | — | Luca Bold | Present |
| portfolio/luca-bold-chopard-dossier-magazine-tearsheet.webp | 115 KB | 1040×1416 | — | — | — | Luca Bold | Present |
| portfolio/luca-bold-forbes-korea-2018-editorial.webp | 85 KB | 1072×1416 | — | — | — | Luca Bold | Present |
| portfolio/luca-bold-gant-corduroy-jacket-china-2026.webp | 86 KB | 1170×1551 | — | — | — | Luca Bold | Present |
| portfolio/luca-bold-gant-harrington-jacket-china-2026.webp | 59 KB | 1170×1546 | — | — | — | Luca Bold | Present |
| portfolio/luca-bold-gant-oxford-shirt-china-2026.webp | 73 KB | 1170×1551 | — | — | — | Luca Bold | Present |
| portfolio/luca-bold-louis-philippe-ceremonial-black-tie-india.webp | 100 KB | 1076×1414 | — | — | — | Luca Bold | Present |
| portfolio/luca-bold-louis-philippe-ceremonial-retail-india.webp | 288 KB | 1200×1600 | — | — | — | Luca Bold | Present |
| portfolio/luca-bold-louis-philippe-summer-luxury-weddings-airport-india.webp | 165 KB | 1080×1080 | — | — | — | Luca Bold | Present |
| portfolio/budweiser-china-campaign-luca-bold.webp | 105 KB | 1280×719 | — | — | — | Luca Bold | Present |
| campaigns/nivea-men-campaign-luca-bold-poster.jpg | 46 KB | 882×496 | — | — | — | Luca Bold | Present |
| campaigns/nivea-men-campaign-luca-bold.mp4 | 2.3 MB | 882×496 | — | — | — | Luca Bold | Present |
| favicon.ico | 13 KB | — | — | — | — | — | — |
| favicon-lb.png | 6 KB | — | — | — | — | — | — |

### Metadata findings

- **No Copyright or Creator fields** are set on any image. The `UsageTerms` (XMP) field is present on all portfolio and campaign files and says: "All rights reserved by the respective photographer or commissioning brand."
- **No GPS data** found on any image.
- **No camera serial numbers** found.
- **PersonInImage** is set to "Luca Bold" on all portfolio/campaign files. Good.

### Oversized images (long edge > 2000 px)

**None.** The largest dimension is 1800 px (hero portrait, headshot). All images are already web-sized.


## 2. Git history scan

### Deleted image files still in history

These files were committed and later deleted. They still exist in the git pack:

- `UPLOAD-THESE/assets/portfolio/` — 6 webp files (duplicates of current portfolio, from an upload staging folder)
- `lucabold-upload/assets/portfolio/` — 6 webp files (same duplicates, different folder name)
- `assets/portfolio/luca-bold-blue-sky-portrait.webp` — deleted
- `assets/portfolio/luca-bold-editorial-portrait-blue-shirt-palms.webp` — deleted
- `assets/portfolio/luca-bold-helly-hansen-campaign-china.webp` — deleted
- `assets/portfolio/luca-bold-light-blue-shirt-palm-portrait.webp` — deleted
- `assets/portfolio/luca-bold-white-shirt-tropical-foliage.webp` — deleted
- `assets/portfolio/luca-bold-white-shirt-tropical-roots.webp` — deleted
- `assets/portfolio/vogue-runway-luca-bold.webp` — deleted
- `assets/portfolio/luca-bold-black-tie-tailoring-full-length.webp` — deleted

**Action needed:** These images are still recoverable from git history. If any contain content you no longer want public, the history would need cleaning (BFG or git filter-repo). This is a destructive operation — tell me if you want it and I will write the exact commands, but I will not run them.

### Secrets, contracts, invoices, passports

**None found.** No `.env`, `.pem`, `.pdf`, `.doc`, `.xls`, `.csv`, `.zip` or credential files have ever been committed.

### JSON files in history

`manifest.json` (PWA manifest) — contains no sensitive data.


## 3. Existing rights posture

### robots.txt — PROBLEM

The current `robots.txt` explicitly **allows all AI training crawlers**. Every bot (GPTBot, CCBot, Google-Extended, Bytespider, ClaudeBot, anthropic-ai, etc.) has `Allow: /`. The comment says "Allow all AI training and indexing crawlers explicitly." This is an open invitation to scrape images for training datasets.

### llms.txt

Contains text facts only (no image URLs, no base64). Text content is fine to keep crawlable — it helps AI search tools find Luca for bookings.

### humans.txt

Says "Built for human visitors and AI systems equally." This is fine for discoverability but could be read as a blanket invitation. Low risk.

### LICENSE file

**Does not exist.** Without a LICENSE file, the repo defaults to "all rights reserved" under copyright law. But GitHub's terms of service grant certain rights to anyone who can view a public repo. A clear LICENSE file removes ambiguity.

### Footer

Has `© 2026 Luca Bold. All rights reserved.` — Good, but does not mention photographs specifically.

### README.md

Not reviewed (not present or empty).


## 4. Campaign images — permission status

Every campaign image on the site shows work done for a brand. The copyright in these images typically belongs to the **brand or the photographer**, not the model. You should check that you have written permission (or that the usage falls within standard portfolio-use terms) for:

| Image | Brand | Risk |
|-------|-------|------|
| budweiser-china-campaign-luca-bold.webp | Budweiser | Check usage terms from the production |
| luca-bold-chopard-dossier-magazine-tearsheet.webp | Chopard / Dossier Magazine | Magazine tearsheets are standard portfolio use |
| luca-bold-forbes-korea-2018-editorial.webp | Forbes Korea | Editorial tearsheet — standard portfolio use |
| luca-bold-gant-*.webp (3 files) | GANT | Check usage terms from agency/production |
| luca-bold-louis-philippe-*.webp (3 files) | Louis Philippe | Check — these appear to be retail/advertising shots |
| nivea-men-campaign-luca-bold-poster.jpg | Nivea Men | Check usage terms |
| nivea-men-campaign-luca-bold.mp4 | Nivea Men | Video — higher risk than stills, check terms |

**Standard industry practice:** Models routinely use campaign images in their portfolio with implied permission. But implied permission does not cover AI training by third parties. The `UsageTerms` metadata already directs enquiries to ICE Models, which is correct.


## 5. Recommended exiftool commands

These add a `Copyright` field and an AI-training reservation to every image. **Do not run these — review first, then run manually.**

```bash
# Add copyright + AI reservation to all portfolio images
exiftool -overwrite_original \
  -Copyright="© Respective photographer or commissioning brand. All rights reserved." \
  -XMP-dc:Rights="All rights reserved. Not licensed for AI training, machine learning or dataset inclusion." \
  -XMP-xmpRights:WebStatement="https://www.lucabold.com/RIGHTS.md" \
  assets/portfolio/*.webp

# Same for campaign assets
exiftool -overwrite_original \
  -Copyright="© Respective photographer or commissioning brand. All rights reserved." \
  -XMP-dc:Rights="All rights reserved. Not licensed for AI training, machine learning or dataset inclusion." \
  -XMP-xmpRights:WebStatement="https://www.lucabold.com/RIGHTS.md" \
  assets/campaigns/nivea-men-campaign-luca-bold-poster.jpg \
  assets/campaigns/nivea-men-campaign-luca-bold.mp4
```

No images need resizing — all are already under 2000 px on the long edge.


## 6. GitHub Pages limitations

GitHub Pages is a static file host. It **cannot**:

- Set custom HTTP headers (no `X-Robots-Tag` header, no `Cache-Control` per path)
- Block specific user agents at the server level (robots.txt is advisory, not enforced)
- Rate-limit or throttle crawlers
- Serve different content to different user agents

### Cloudflare as a protection layer

Cloudflare can sit in front of lucabold.com (it already does — the Cloudflare Web Analytics beacon is on the page). To enable AI Crawl Control:

1. lucabold.com must be added as a zone in Cloudflare (not just using the analytics beacon — the DNS must proxy through Cloudflare)
2. In the Cloudflare dashboard: **Security → Bots → AI Crawlers & Scrapers**
3. This lets you block or challenge specific AI bots at the network level, not just via robots.txt

**Free plan availability:** UNVERIFIED. Cloudflare announced AI Crawl Control in 2024 and initially described it as available on all plans including Free. Whether the full feature set (per-bot blocking, not just the toggle) is on the Free plan as of October 2026 should be confirmed in the Cloudflare dashboard.

**Steps to set up Cloudflare proxying (if not already proxied):**

1. Add lucabold.com as a site in your Cloudflare account
2. Change the domain's nameservers at your registrar to the ones Cloudflare gives you
3. In Cloudflare DNS, add an A or CNAME record pointing to GitHub Pages (185.199.108-111.153, or the CNAME target)
4. Set the proxy status to "Proxied" (orange cloud)
5. The CNAME file in the repo stays as `www.lucabold.com`

This is a DNS change and may cause a brief interruption. Do it during a quiet period.
