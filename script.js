let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick= () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

const sr = ScrollReveal({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.logo',{delay: 200, origin: 'left'});
sr.reveal('.navbar',{delay: 400, origin: 'top'});
sr.reveal('.menu-btn',{delay: 520, origin: 'right'});

sr.reveal('.home-text span',{delay: 600, origin: 'top'});
sr.reveal('.home-text h1',{delay: 680, origin: 'left'});
sr.reveal('.home-text p',{delay: 750, origin: 'left'});

sr.reveal('.main-btn',{delay: 860, origin: 'right'});

sr.reveal('.share',{delay: 950, origin: 'bottom'});
sr.reveal('.home-img',{delay: 1000, origin: 'right '});


sr.reveal('.about img',{delay: 600, origin: 'left'});
sr.reveal('.about-text h1',{delay: 680, origin: 'top'});
sr.reveal('.about-text h5',{delay: 750, origin: 'left'});
sr.reveal('.about-text p',{delay: 750, origin: 'right'});
sr.reveal('.btnAbout',{delay: 860, origin: 'bottom'});
