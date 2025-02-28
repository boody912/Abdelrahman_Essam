// Select the menu icon and navbar elements
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Add a click event listener to the menu icon
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



// Select all the sections and links in the header navigation
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Listen for the 'onscroll' event of the window object
window.onscroll = () => {
    // Loop through each section
    sections.forEach(sec => {
        // Check if the section is currently visible on the screen
        let top = window.scrollY; // The current scroll position of the window
        let offset = sec.offsetTop - 150; // The offset of the section from the top of the page, minus 150 pixels
        let height = sec.offsetHeight; // The height of the section
        let id = sec.getAttribute('id'); // The ID of the section

        if (top >= offset && top < offset + height) {
            // If the section is visible, remove the 'active' class from all the links in the header navigation
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Add the 'active' class to the link with the corresponding 'href' attribute
            document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
        }
    });
    // steackey navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 10);
    // remove toggl icon when selected
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

// scroll reveal
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

})
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js
const typed = new Typed('.multiple-text', {
    // strings: ['Frontend Developer', 'Web Designer', 'Animator'],
    strings: ['Software Engineer', 'Web Developer',  'Full Stack Developer' ],
    typeSpeed: 100,
    backSpeed: 50,
    backDe1ay: 1000,
    loop: true
});





function toggleContent(btn) {
    const content = btn.previousElementSibling;
    if (content.style.display === "none") {
        content.style.display = "block";
        btn.textContent = "Read Less";
    } else {
        content.style.display = "none";
        btn.textContent = "Read More";
    }
}