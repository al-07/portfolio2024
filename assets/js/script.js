'use strict';

/**
 * element toggle function
 */
const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
}

/**
 * header sticky & go to top
 */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/**
 * navbar toggle
 */
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
});

/**
 * skills toggle
 */
const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {
    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);
  });
}

/**
 * dark & light theme toggle
 */
const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {
  elemToggleFunc(themeToggleBtn);
  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");
    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");
    localStorage.setItem("theme", "dark_theme");
  }
});

/**
 * check & apply last time selected theme from localStorage
 */
if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

/**
 * Social media icons open in new tab
 */
const facebookBtn = document.getElementById('facebook-btn');
const instagramBtn = document.getElementById('instagram-btn');
const linkedinBtn = document.getElementById('linkedin-btn');

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

facebookBtn.addEventListener('click', function (event) {
  event.preventDefault();
  openInNewTab('https://www.facebook.com/alfarizd027');
});

instagramBtn.addEventListener('click', function (event) {
  event.preventDefault();
  openInNewTab('https://www.instagram.com/al_farizd/');
});

linkedinBtn.addEventListener('click', function (event) {
  event.preventDefault();
  openInNewTab('https://www.linkedin.com/in/mochamad-alfarizd-firmansah-515b86289/');
});
