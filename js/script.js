"use strict";

const nav = document.querySelector("nav");

const addClassToHtml = () => {
    
    const scrollPosition = window.scrollY || window.pageYOffset;
    
    console.log(`Scroll position from the top: ${scrollPosition}px`);
    
    if (scrollPosition > 100) {
        nav.classList.add('scroll-menu');
    } else {
        nav.classList.remove('scroll-menu');
    }
}

window.addEventListener("scroll", addClassToHtml);