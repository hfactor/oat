/**
 * lmui - Tooltip Enhancement
 * Converts title attributes to data-tooltip for custom styling.
 * Progressive enhancement: native title works without JS.
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log(document.querySelectorAll('[title]'));
  document.querySelectorAll('[title]').forEach(el => {
    const text = el.getAttribute('title');
    console.log(text);
    if (text) {
      el.setAttribute('data-tooltip', text);
      // Preserve accessibility when removing title
      if (!el.hasAttribute('aria-label')) {
        el.setAttribute('aria-label', text);
      }
      el.removeAttribute('title');
    }
  });
});
