"use strict";

const navbar = document.querySelector(".navbar");
const section1 = document.querySelector(".section1");

// observer

const initalScroll = section1.getBoundingClientRect();

window.addEventListener("scroll", function (event) {
  console.log(window.scrollY);

  if (window.scrollY > initalScroll.top) {
    navbar.classList.add("sticky");
  } else navbar.classList.remove("sticky");
});
