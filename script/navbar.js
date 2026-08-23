/**
 * UNIVERSAL NAVBAR LOADER & PATH RESOLVER
 * Automatically loads navbar.html and resolves relative links (./ vs ../)
 * perfectly across root files and subfolders on any domain / GitHub Pages.
 */

function loadNavbar() {
  const container = document.getElementById('navbar-container');
  if (!container) return;

  // Check if current page is inside a subfolder (e.g. /minecraft/)
  const currentPath = window.location.pathname.replace(/\\/g, '/');
  const isSubfolder = currentPath.includes('/minecraft/') || window.location.href.includes('/minecraft/');
  const rootPrefix = isSubfolder ? '../' : './';

  fetch(rootPrefix + 'navbar.html')
    .then(response => {
      if (!response.ok) {
        return fetch((isSubfolder ? './' : '../') + 'navbar.html');
      }
      return response;
    })
    .then(response => response.text())
    .then(html => {
      container.innerHTML = html;

      // Adjust all links inside the navbar to the correct relative path
      const links = container.querySelectorAll('.nav-links a');
      links.forEach(link => {
        const page = link.getAttribute('data-page');
        if (page && page !== '#') {
          link.setAttribute('href', rootPrefix + page);
        }

        // Highlight active link
        const currentFile = currentPath.split('/').pop() || 'index.html';
        if (
          (page === 'index.html' && (currentFile === '' || currentFile === 'index.html')) ||
          (page === 'portfolio.html' && currentFile === 'portfolio.html') ||
          (page === 'minecraft.html' && (currentFile === 'minecraft.html' || isSubfolder))
        ) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    })
    .catch(err => console.error('Navbar load error:', err));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadNavbar);
} else {
  loadNavbar();
}
