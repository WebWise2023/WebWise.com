// scroll section active
// Select all navigation links with the "nav-link" class
// let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('.nav-link');

// Add a click event listener to each navigation link
// sections.forEach(sec=> {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute(id)
// })
navlinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default link behavior (page jump)

        // Get the target section's ID from the href attribute
        const targetId = link.getAttribute('href').substring(1);

        // Find the corresponding section based on the ID
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Calculate the scroll position to the target section
            const offset = targetSection.offsetTop;

            // Scroll smoothly to the target section
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });

            // Remove the "active" class from all navigation links
            navlinks.forEach(navlink => {
                navlink.classList.remove('active');
            });

            // Add the "active" class to the clicked navigation link
            link.classList.add('active');
        }
    });
    // sticky navbar
    let header = document.querySelectorAll('header');

    header.classList.toogle('sticky', window.scrollY > 100);
});
