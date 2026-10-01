# Engineering Timeline

Open `index.html` by double-clicking it. The page has no build step, framework, external font, or required assets. Entries and photos are edited in the `ENTRIES` array in the script near the bottom of the file.

## Add projects and photos

1. Keep `ENTRIES` ordered newest to oldest.
2. Copy a project object and edit its `title`, `date`, `categories`, `summary`, `description`, `tags`, and `images` fields. Categories are `design`, `analysis`, and `team` and control the filter chips.
3. The supplied project images are already in the `photos/` folder beside `index.html`. Add future compressed images there and use relative paths in `images`:

   ```js
   images: [
     { src: "photos/rover-assembly.webp", alt: "CAD render of the rover end-effector", caption: "End-effector assembly" },
     { src: "photos/rover-test.webp", alt: "Rover end-effector during a bench test", caption: "Bench test" }
   ]
   ```

   Each real image needs accurate `alt` text. The gallery lazy-loads photos and works with long image lists. Leave `images: []` for a clean placeholder tile.
4. Replace bracketed copy with facts you can support. Project-specific tool tags should name tools actually used on that project.
5. Add your portfolio URL to `BACK_URL` near the start of the script. The back link stays hidden when the value is empty.

The dated entries are ordered newest first using dates shown in, or attached to, the supplied reports. Full dates and year ranges such as `2025–2026` are supported. Replace them with semester labels if that is more accurate for your coursework. Entries without a usable year stay after dated entries until you add one.

## Deploy free

Choose one host. The HTML has no build step; include the `photos/` folder if you have added images.

- **Netlify Drop:** sign in at [Netlify Drop](https://app.netlify.com/drop), then drag the site folder into the drop area. It publishes a `netlify.app` URL. Netlify currently lists a $0 Free plan with a monthly usage limit; sites pause if the hard limit is reached. [Drop instructions](https://docs.netlify.com/start/quickstarts/netlify-drop-quickstart/) · [Free plan details](https://www.netlify.com/pricing/)
- **GitHub Pages:** put `index.html` and `photos/` in a public repository. In **Settings → Pages**, choose **Deploy from a branch**, `main`, and `/(root)`. The URL will look like `https://USERNAME.github.io/REPOSITORY/`. [GitHub Pages guide](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- **Vercel:** import the repository or deploy the folder as a static site. The Hobby plan is free for personal, non-commercial use. [Vercel Hobby plan](https://vercel.com/docs/plans/hobby)

## Make a QR code

After deployment, open the final HTTPS URL and copy it exactly. Generate a **static** QR code that encodes that URL directly. A free local option is the open-source Python `qrcode` package:

```sh
python -m pip install "qrcode[pil]"
python -c "import qrcode; qrcode.make('https://YOUR-SITE-URL/').save('engineering-timeline-qr.png')"
```

The QR contains the page URL itself; it does not use a tracking redirect or expire. Print dark on white, keep the quiet margin, and scan a paper proof at its final size before printing more.
