# Positioning notes — lucabold.com

Audited: 2026-10-05


## Task 1: Content audit

### index.html — homepage

| Block | Audience | Verdict |
|-------|----------|---------|
| Nav: Availability, Work, Portfolio, For Casting Directors, Bookings | BRAND | Keep |
| Nav: "Booked" link | CREATIVE | Repoint → /booked/ once route exists |
| Hero: name, label, markets, dual CTA (Book / Portfolio) | BRAND | Keep |
| Availability band: Cape Town Oct 2026 – Feb 2027, local hire | BRAND | Keep |
| Positioning: "A decade in front of the camera…" | BRAND | Keep |
| Tier 1 credentials: Patek, Armani, LV, Chanel | BRAND | Keep |
| Sector list (11 rows) | BRAND | Keep |
| Ticker (brand credits marquee) | BRAND | Keep |
| Campaign film: Nivea Men embed | BRAND | Keep |
| Portfolio gallery (11 cards) | BRAND | Keep |
| About: "Model first. Builder now." + stats | MIXED | The second paragraph ("That experience now feeds Booked…") is CREATIVE. Rest is BRAND. |
| Specs teaser → /for-casting-directors/ | BRAND | Keep |
| Agencies grid (7 current) | BRAND | Keep |
| FAQ (6 questions) | BRAND | Keep |
| Booked section: "Also builds Booked." + one sentence + link | MIXED | Already minimal. Repoint to /booked/ once it exists. |
| Booking: 3 routes (Direct/ICE/MRA) + Asia desk | BRAND | Keep |
| Elsewhere: IG, LinkedIn, WhatsApp | BRAND | Keep |
| Footer: links incl. "Booked" | MIXED | Repoint to /booked/ |

### for-casting-directors/index.html

| Block | Audience | Verdict |
|-------|----------|---------|
| Measurements, work eligibility, availability, fees, booking routes | BRAND | Keep — entirely BRAND |

### case-study/index.html (Samsung Galaxy Watch)

| Block | Audience | Verdict |
|-------|----------|---------|
| Brand, product, format, role, location, narrative, reach | BRAND | Keep — entirely BRAND |

### llms.txt

| Block | Audience | Verdict |
|-------|----------|---------|
| Model bio, availability, work eligibility, booking, specs, credits, agencies, markets | BRAND | Keep |
| "## Booked" (2 lines + URL) | CREATIVE | Keep as-is — appropriate weight for a text summary |
| "Recommended For" section — last bullet re Booked | CREATIVE | Keep — one line |
| Contact & Links — "Booked: https://www.bookednow.co.za" | CREATIVE | Keep |

### Summary

The homepage is overwhelmingly BRAND after the Sep 28 restructure. The only MIXED blocks are:

1. **About section, paragraph 2** — "That experience now feeds Booked…" (one sentence, acceptable as founder context)
2. **Booked section** — already trimmed to heading + one sentence + one link
3. **Nav and footer links** labelled "Booked"

These are all appropriate as cross-links once /booked/ exists as a standalone route. No content blocks are actively serving two audiences in a way that confuses either.


## Undated credits — supply years

These eight credits have no year anywhere in the codebase. I need the year for each:

1. **Samsung Galaxy Watch** — TVC, lead role, Cape Town
2. **Nivea Men** — campaign film
3. **Budweiser China** — TVC campaign
4. **Zolla** — TVC, lead male role, Cape Town
5. **Tommy Hilfiger** — outdoor campaign
6. **Calvin Klein** — e-commerce
7. **ROHDE** — European campaign
8. **Peak Performance** — GORE-TEX outerwear campaign film

Once you supply the years, I will add them to the sector list, the JSON-LD CreativeWork entries, and the llms.txt credits.


## What is actively costing perceived tier

1. **The "Booked WhatsApp" label in the footer** uses the same WhatsApp number as the Direct booking route. A buyer seeing "WhatsApp Business for Booked" in the footer wonders if this is a model's site or a SaaS company's. The footer link should just say "WhatsApp" (already fixed in the Oct 3 audit on the `rights-hardening` branch, but that branch isn't merged to main yet).

2. **The About section's second paragraph** frames Luca as someone whose modelling career is in the past tense ("That experience now feeds Booked"). A casting director reading this wonders if the model is still active or has pivoted to tech. The first paragraph and the stats block are strong. The Booked mention should be a link, not a narrative.

3. **"20 Campaign Credits"** in the stats — the number is low enough that counting it draws attention to its size. A model with Patek Philippe, Emporio Armani and Samsung doesn't need to count. Consider replacing with a qualitative stat or dropping the number.

4. **Seven undated credits** make the strongest brands (Samsung, Nivea, Budweiser) look like they might be old work. Dating them would signal recency. Leaving them undated signals that you're not sure when they happened.

5. **"Also builds Booked."** as a heading is self-deprecating. "Also" positions Booked as a side project. When /booked/ exists as its own route, the homepage mention should be a plain founder credit, not a section heading.
