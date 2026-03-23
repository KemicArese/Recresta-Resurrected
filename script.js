// Script for interactive JavaScript functionalities

// Function for smooth scrolling
const smoothScroll = (target) => {
    const targetElement = document.querySelector(target);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
};

// Function to update active navigation
const updateActiveNav = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop >= 0 && sectionTop <= window.innerHeight / 2) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector(`nav a[href*=${section.id}]`).classList.add('active');
        }
    });
};

// Function to copy text to clipboard
const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    });
};

// Function to update player count
const updatePlayerCount = (count) => {
    document.getElementById('player-count').innerText = `Players Online: ${count}`;
};

// Function for scroll animations
const scrollAnimation = () => {
    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight) {
            element.classList.add('fade-in');
        }
    });
};

// Event Listeners
document.addEventListener('scroll', updateActiveNav);
window.addEventListener('scroll', scrollAnimation);

// Example usage of copying to clipboard
document.getElementById('copy-button').addEventListener('click', () => {
    copyToClipboard('Sample text');
});

// Example usage of updating player count
updatePlayerCount(5); // Update with the actual player count
