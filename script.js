// script.js — externalized JS for JavaScript Essentials page
function welcome() {
  alert("Welcome to Smart Learning Platform!");
}

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('[data-welcome-button]');
  if (btn) {
    btn.addEventListener('click', welcome);
  }
});
