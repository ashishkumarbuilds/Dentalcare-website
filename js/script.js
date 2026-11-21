// DentaCare shared site interactions
(function () {
  "use strict";

  const root = document.documentElement;
  const themeKey = "dentaCareTheme";

  function applyTheme(theme) {
    const selected = theme === "dark" ? "dark" : "light";
    root.setAttribute("data-theme", selected);
    try { localStorage.setItem(themeKey, selected); } catch (error) {}
    const icon = document.querySelector(".theme-icon");
    const label = document.querySelector(".theme-label");
    const button = document.getElementById("themeToggleBtn");
    if (icon) icon.textContent = selected === "dark" ? "☀️" : "🌙";
    if (label) label.textContent = selected === "dark" ? "Light" : "Dark";
    if (button) button.setAttribute("title", selected === "dark" ? "Switch to Day Mode (Light)" : "Switch to Night Mode (Dark)");
  }

  window.toggleTheme = function () {
    applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  };

  document.addEventListener("DOMContentLoaded", function () {
    let saved = "light";
    try {
      saved = localStorage.getItem(themeKey) || root.getAttribute("data-theme") || "light";
    } catch (error) {}
    applyTheme(saved);

    const navToggle = document.getElementById("navToggle");
    const navbar = document.querySelector(".navbar");
    if (navToggle && navbar) {
      navToggle.addEventListener("click", function () {
        navbar.classList.toggle("menu-open");
        navToggle.setAttribute("aria-expanded", navbar.classList.contains("menu-open") ? "true" : "false");
      });
    }

    document.querySelectorAll("[data-year]").forEach(function (element) {
      element.textContent = new Date().getFullYear();
    });
  });
})();