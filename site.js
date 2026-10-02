(() => {
  const navigation = [
    { id: "bio", label: "Bio", href: "index.html" },
    { id: "projects", label: "Projects", href: "projects.html" },
    { id: "cad", label: "CAD Skills", href: "cad.html" },
    { id: "other", label: "Other", href: "other.html" }
  ];
  const currentPage = document.body.dataset.page || "projects";
  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");

  if (headerMount) {
    headerMount.innerHTML = `
      <header class="topbar">
        <div class="topbar__inner">
          <span class="profile">Engineering Portfolio</span>
          <nav class="site-nav" aria-label="Main navigation">
            ${navigation.map((item) => `<a href="${item.href}"${item.id === currentPage ? ' aria-current="page"' : ""}>${item.label}</a>`).join("")}
          </nav>
        </div>
      </header>`;
  }

  if (footerMount) {
    footerMount.innerHTML = `
      <footer class="footer">
        <div class="footer__inner">
          <span>Hynarong Eang / Engineering Portfolio</span>
          <a href="#top">Back to Top ↑</a>
        </div>
      </footer>`;
  }
})();
