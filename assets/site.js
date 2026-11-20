/* ==========================================================================
   ChauVB (chauvb.dev) — Progressive Enhancement Script
   Zero tracking, zero third-party calls.
   Default theme is Dark; light preference is stored locally in localStorage.
   ========================================================================== */
(function () {
  var STORAGE_KEY = 'chauvb-theme';
  var root = document.documentElement;
  var toggleBtn = document.getElementById('theme-toggle');

  function getTheme() {
    return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function updateToggleUI(theme) {
    if (!toggleBtn) return;
    var isLight = theme === 'light';
    toggleBtn.setAttribute('aria-pressed', String(isLight));
    var icon = toggleBtn.querySelector('[data-theme-icon]');
    if (icon) {
      icon.textContent = isLight ? '🌙' : '☀️';
    }
    var labelDark = toggleBtn.getAttribute('data-label-dark') || 'Switch to dark theme';
    var labelLight = toggleBtn.getAttribute('data-label-light') || 'Switch to light theme';
    toggleBtn.setAttribute('aria-label', isLight ? labelDark : labelLight);
    toggleBtn.setAttribute('title', isLight ? labelDark : labelLight);
  }

  if (toggleBtn) {
    updateToggleUI(getTheme());
    toggleBtn.addEventListener('click', function () {
      var next = getTheme() === 'light' ? 'dark' : 'light';
      if (next === 'light') {
        root.setAttribute('data-theme', 'light');
      } else {
        root.removeAttribute('data-theme');
      }
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        /* ignore storage restrictions */
      }
      updateToggleUI(next);
    });
  }

  /* Optional interactive 404 pixel grid */
  var grid = document.getElementById('pixel-grid-404');
  if (grid) {
    grid.addEventListener('click', function (e) {
      var cell = e.target.closest('.px-cell');
      if (!cell) return;
      var next = cell.getAttribute('data-on') === '1' ? '0' : '1';
      cell.setAttribute('data-on', next);
      cell.setAttribute('aria-pressed', next === '1' ? 'true' : 'false');
    });
  }
})();
