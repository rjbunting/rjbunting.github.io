// Small UI helpers: reveal on scroll, client-side search, and theme toggle
(function () {
  function debounce(fn, ms = 200) {
    let t;
    return (...a) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...a), ms);
    };
  }

  const THEMES = { light: 'cupcake', dark: 'synthwave' };

  function applyTheme(theme) {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('site-theme', theme);
      const icons = Array.from(document.querySelectorAll('.theme-icon'));
      if (icons.length) {
        icons.forEach((icon) => {
          // swapped: show moon in light mode and sun in dark mode
          if (theme === THEMES.dark) {
            // dark theme -> show sun (filled circle)
            icon.innerHTML = '<circle cx="12" cy="12" r="9" fill="currentColor"></circle>';
          } else {
            // light theme -> show moon
            icon.innerHTML = '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="none" fill="currentColor"></path>';
          }
        });
      }
    } catch (e) {
      // ignore
    }
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || THEMES.light;
    const next = current === THEMES.light ? THEMES.dark : THEMES.light;
    applyTheme(next);
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme from storage or default
    const saved = localStorage.getItem('site-theme');
    applyTheme(saved || THEMES.light);

    const toggle = document.getElementById('theme-toggle');
    if (toggle) toggle.addEventListener('click', toggleTheme);
    // Also attach theme toggle to any buttons inside the sidebar/footer with class .theme-toggle
    const sidebarToggles = Array.from(document.querySelectorAll('.theme-toggle'));
    sidebarToggles.forEach(btn => btn.addEventListener('click', toggleTheme));

    // Reveal on scroll for elements with .reveal
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove('opacity-0');
              entry.target.classList.add('opacity-100', 'translate-y-0');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      reveals.forEach((el) => {
        // ensure initial state
        el.classList.add('opacity-0');
        el.classList.add('translate-y-4');
        io.observe(el);
      });
    }

    // Simple publications search (elements with data-search)
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      const doFilter = () => {
        const q = (searchInput.value || '').trim().toLowerCase();
        const cards = Array.from(document.querySelectorAll('[data-search]'));
        if (!cards.length) return;
        if (!q) {
          cards.forEach((c) => {
            c.classList.remove('hidden');
            c.style.display = '';
          });
          return;
        }
        cards.forEach((c) => {
          const s = (c.getAttribute('data-search') || '').toLowerCase();
          const match = s.indexOf(q) !== -1;
          if (match) {
            c.classList.remove('hidden');
            c.style.display = '';
          } else {
            c.classList.add('hidden');
            c.style.display = 'none';
          }
        });
      };
      searchInput.addEventListener('input', debounce(doFilter, 150));
      // allow clearing search with Esc
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          searchInput.value = '';
          searchInput.dispatchEvent(new Event('input'));
          searchInput.blur();
        }
      });
    }

    // Lightbox removed — no longer handling image modal here.
  });
})();
