# Hynarong Eang | Engineering Portfolio

Plain HTML, CSS and JavaScript. Open `index.html` locally to start on the Bio page. Keep the shared files and folders at the same level when you deploy.

## Site files

- `index.html` — Bio landing page, work experience, education, skills, certificates, project list, and resume download.
- `projects.html` — Engineering project timeline and project detail galleries.
- `bio.html` — Small legacy redirect to `index.html` for older links.
- `cad.html` — CAD work grouped by CATIA V5, SolidWorks, and Onshape.
- `other.html` — Woolworths work experience with a green accent theme.
- `styles.css` — Shared layout, typography, page components, and responsive rules for all pages.
- `site.js` — Shared top bar, four-link navigation, active-page state, and footer.
- `entries.js` — Shared project data. Array order controls both the Projects timeline and Bio project list; projects are not automatically sorted. Keep each stable `id` unchanged so project links keep working.
- `photos/` — Project photos, the Practera logo, and the optional Woolworths and ESI logos.
- `cad/` — CAD project photos for the CAD Skills page.
- `certificates/` — Practera certificate image and source PDF.
- `documents/` — Project report PDFs linked from the timeline.
- `resume/Hynarong-Eang-Resume.pdf` — Resume PDF download target.
- `assets/` — Social preview and placeholder illustrations.

## Adding projects and images

Add a project object to `window.ENTRIES` in `entries.js` and set a unique, stable `id`. Put images in `photos/`, describe each one with accurate `alt` text and a caption, and add relative paths such as `photos/assembly.jpg`. Preserve the desired order in the array; the Bio project list uses it as-is. Empty image arrays show a placeholder. Missing image files also fall back to placeholders. Add report links with `documents: [{ label: "View report (PDF)", href: "documents/report.pdf" }]`.

Add CAD project cards in the `CAD_WORK` array near the top of the script in `cad.html`. Keep the software groups in the display order you want. Put CAD images in `cad/`; fill each project's `images` array when its files are ready. The Lunar Rover Wheel card links to the matching project on `projects.html`.

Bio work entries are in the `EXPERIENCE` array in `index.html`. Set `projectId` only when a role matches a project ID in `entries.js`; otherwise leave it off. Set `SHOW_GRADES` to `false` to hide all grades.

## Deploy for free

Upload the complete folder contents, including all five HTML pages, `styles.css`, `site.js`, `entries.js`, and the asset folders.

- **GitHub Pages:** Upload the site contents to a repository. Under **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/(root)`, then save.
- **Netlify Drop:** Drag the complete site folder into Netlify Drop, keeping all folders intact.
- **Vercel:** Deploy as a static site with no build command and the site folder as the output directory.

## QR code and shared link

Point the QR code and shared link to the **site root**, such as `https://your-site.netlify.app/`. The root opens the Bio page because free static hosts serve `index.html` by default. Keep the QR code pointed at the permanent root URL so older printed copies continue to work.

After deployment, create a static QR code that points directly to that permanent HTTPS root URL. If using `generate_qr.py`, replace `SITE_URL` with the deployed root URL before running it; it creates PNG and SVG files. Print dark on a light background with a quiet margin, and test a printed proof at its final size.

## Files still to add

- `resume/Hynarong-Eang-Resume.pdf`
- `documents/regional-food-supply-system.pdf`
- `documents/pressure-vessel-material-selection.pdf`
- `photos/deakin-defence-conference-2.jpg`
- `photos/deakin-defence-conference-3.jpg`
- `photos/warman-cad-to-3d-print.png`
- `cad/onshape-gripper-old-design.jpg`
- `cad/onshape-gripper-v1.jpg`
- `cad/onshape-gripper-v2.jpg`
- `cad/onshape-gripper-v3.jpg`
- `photos/pressure-vessel-as1210-1.jpg` (suggested future project photo)
- `photos/pressure-vessel-as1210-2.jpg` (suggested future project photo)
- `photos/pressure-vessel-as1210-3.jpg` (suggested future project photo)

Optional logos: `photos/woolworths-logo.png` and `photos/esi-logo.png`. The Practera certificate image (`certificates/practera-certificate.jpg`), Practera logo (`photos/practera-logo.png`), and certificate source PDF are already in the site folder.