# Goodluck Okereke — Resume

Single-page A4 resume, print-first HTML/CSS.

## Files
- `index.html` — content
- `style.css` — layout (print-first, `@page` sized to A4)
- `Goodluck_Okereke_Resume.pdf` — built output

## Rebuild the PDF

No npm or Puppeteer needed — headless Chromium prints it directly:

```bash
chromium --headless=new --disable-gpu --no-sandbox --no-pdf-header-footer \
  --virtual-time-budget=3000 --print-to-pdf=Goodluck_Okereke_Resume.pdf \
  file://$PWD/index.html
```

Verify it stayed on one page:

```bash
pdfinfo Goodluck_Okereke_Resume.pdf | grep -E '^Pages|^Page size'
```
