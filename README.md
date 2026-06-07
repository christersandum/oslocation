# Oslocation

Static GitHub Pages website for Oslocation.

## Custom domain (`www.oslocation.com`)

This repo includes `CNAME` with:

```txt
www.oslocation.com
```

### DNS setup for GitHub Pages

1. In your DNS provider, create/update:
   - `CNAME` record for `www` -> `christersandum.github.io`
2. (Recommended) Redirect/apex handling for `oslocation.com`:
   - Either ALIAS/ANAME to `christersandum.github.io`, or
   - DNS provider forwarding from apex to `https://www.oslocation.com`
3. In GitHub repo settings:
   - Settings -> Pages -> Custom domain: `www.oslocation.com`
   - Enable HTTPS once DNS is verified.

## Booking + moderated reviews stack (recommended)

### Recommended providers

- **Booking**: Calendly (or similar hosted booking provider)
- **Booking notifications to `kendra@oslocation.com`**:
  - Set notification recipient in provider settings, or
  - Use provider webhook -> Zapier/Make -> email to `kendra@oslocation.com`
- **Review submissions**: Formspree endpoint for `POST` submissions
- **Approved review publishing**: maintain approved reviews in `data/approved-reviews.json`

This keeps the site static on GitHub Pages while using secure provider-backed workflows.

## What is implemented in the site

- Booking section (`#booking`) with:
  - availability guidance,
  - configurable provider link,
  - optional on-page embed iframe.
- Reviews section (`#reviews`) with:
  - review submission form for moderation,
  - approved reviews rendered from `data/approved-reviews.json`.

## Required external configuration (outside this repo)

Edit `/site-config.js`:

```js
window.OSLOCATION_CONFIG = {
  booking: {
    providerName: "Calendly",
    bookingUrl: "https://calendly.com/YOUR_ACCOUNT/oslocation-guiding",
    embedUrl: ""
  },
  reviews: {
    submissionEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
    approvedReviewsPath: "data/approved-reviews.json"
  }
};
```

### Owner checklist

1. Create booking event types/time slots in Calendly.
2. Set booking notifications to `kendra@oslocation.com` in provider workflow.
3. Create Formspree form for reviews:
   - Enable spam protection/moderation flow in provider dashboard.
   - Route submission notifications to `kendra@oslocation.com`.
4. Approve reviews externally, then publish selected entries by updating:
   - `/data/approved-reviews.json`
5. Commit and deploy changes to publish approved reviews.

## Content/config files to maintain

- `/site-config.js` - provider URLs/endpoints
- `/data/approved-reviews.json` - approved review content shown on site
- `/CNAME` - custom domain for GitHub Pages
