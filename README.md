# महाकाली शक्तिपीठ, उदयपुर — Website

Static one-page site (Hindi) with sections: Home, About (मंदिर के बारे में), दर्शन समय, गैलरी, संपर्क.

## Files
- `index.html` — page content (text, timings, contact, SEO + Google structured data)
- `style.css` — design (maroon / gold temple theme, mobile friendly)
- `script.js` — mobile menu, gallery lightbox, WhatsApp share / copy message
- `images/` — photos from the temple (poster, Mahant ji darshan, visiting card, share image, favicon)

## Preview locally
```bash
python3 -m http.server 8080
```
Open http://localhost:8080

## Hosting (free options)
Upload the whole folder to Netlify (drag & drop at app.netlify.com/drop), GitHub Pages, or Cloudflare Pages.

## To update
- Timings / phone numbers: edit `index.html` (search for the text) — also update the JSON-LD block in `<head>`.
- New gallery photo: put it in `images/` and copy one `<a class="g-item">` line in the gallery section.
- Temple location: 24.5633753, 73.7287097 (https://maps.app.goo.gl/cvDHj1kjS4rsz3qR6) — used in the map, the direction buttons and the JSON-LD.
