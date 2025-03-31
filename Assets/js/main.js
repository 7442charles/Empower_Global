document.addEventListener("DOMContentLoaded", function () {
    const mediaButton = document.getElementById("mediaDropdownButton");
    const mediaDropdown = document.getElementById("mediaDropdown");

    mediaButton.addEventListener("click", function (event) {
        event.stopPropagation();
        mediaDropdown.classList.toggle("hidden");
    });

    // Close the dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!mediaButton.contains(event.target) && !mediaDropdown.contains(event.target)) {
            mediaDropdown.classList.add("hidden");
        }
    });
});

document.getElementById("careersDropdownButton").addEventListener("click", function () {
    let menu = document.getElementById("careersDropdown");
    menu.classList.toggle("hidden");
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px',
    });

    document.querySelectorAll('.animate-fade-up, .animate-fade-right, .animate-fade-left').forEach((element) => {
        observer.observe(element);
    });

    // Mobile Menu Toggle
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
});

function toggleFAQ(index) {
    let content = document.getElementById("faq-" + index);
    let icon = document.getElementById("icon-" + index);

    if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
        icon.innerText = "▲";
    } else {
        content.classList.add("hidden");
        icon.innerText = "▼";
    }
}