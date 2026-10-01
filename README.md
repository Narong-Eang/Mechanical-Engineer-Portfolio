# Engineering Projects & Experience / Bio

Static, framework-free site. Open `index.html` or `bio.html` locally. Both pages share their project records from `entries.js`.

## Files

- `index.html` — black-and-white engineering timeline and project galleries.
- `bio.html` — bio, work experience, education, expandable skills and resume download.
- `entries.js` — shared project records. Add a unique `id` when adding an entry; the Bio page's timeline links use it.
- `photos/` — project images referenced by `entries.js`.
- `documents/` — PDF reports referenced by project entries: `regional-food-supply-system.pdf` and `pressure-vessel-material-selection.pdf`.
- `resume/Hynarong-Eang-Resume.pdf` — put the final resume PDF here. The download link already points to this path.

Keep the folder structure intact when deploying. `resume/README.txt` is a reminder file; replace or keep it when you add the PDF.

## Edit project entries

Add or edit one object in the `window.ENTRIES` array in `entries.js`. It has `id`, `title`, `date`, `categories`, `summary`, `description`, `tags`, and `images` fields. Each image needs accurate `alt` text; put compressed images in `photos/` and use a relative path such as `photos/assembly.jpg`. Leave `images: []` for a placeholder tile; a missing image file also falls back to a placeholder. Add `documents: [{ label: "View report (PDF)", href: "documents/report.pdf" }]` for report links. Set `openDocumentDirectly: true` to make a single-document card open its PDF directly. Full dates and year ranges sort newest first.

The Bio page keeps `EXPERIENCE`, `EDUCATION`, and `CERTIFICATES` arrays in its script. Set `SHOW_GRADES` to `false` to hide program GPAs, WAM, and course grades.

## Deploy free

Upload the complete folder contents so both HTML pages, `entries.js`, `photos/`, `documents/`, and `resume/` are at the site root.

- **GitHub Pages:** Upload the site contents to a repository. In **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/(root)`, then save. The home page is the projects timeline; `bio.html` is the Bio page.
- **Netlify Drop:** Drag the full site folder into Netlify Drop, keeping its folders intact.
- **Vercel:** Deploy the folder as a static site with no build command and the site folder as the output directory.

## QR code

After deployment, copy the final HTTPS URL. For a resume QR, encode `https://YOUR-SITE-URL/bio.html`; for the projects timeline, encode the home page URL. Use a static QR that points directly to your URL, print dark on a light background with a quiet margin, and test a paper proof at its final size.

## Before publishing

Add `resume/Hynarong-Eang-Resume.pdf`, the two reports (`documents/regional-food-supply-system.pdf` and `documents/pressure-vessel-material-selection.pdf`), and the two remaining conference photos (`photos/deakin-defence-conference-2.jpg` and `photos/deakin-defence-conference-3.jpg`). The Practera certificate PDF is already in `documents/`. Replace the bracketed placeholders; confirm the expanded course titles and 3D-printing skill; and check both pages, project links, images, and the resume download on a phone.
