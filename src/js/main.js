document.addEventListener('DOMContentLoaded', function () {
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    body.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        });
    });

    // Typing Animation
    const typingText = document.querySelector('.typing-text');
    const words = ['Java Developer', 'Spring Boot Developer', 'Full Stack Developer', 'Web Developer'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;

    function type() {
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);

        typingText.textContent = currentChar;

        if (!isDeleting && charIndex < currentWord.length) {
            // Typing
            charIndex++;
            setTimeout(type, 100);
        } else if (isDeleting && charIndex > 0) {
            // Deleting
            charIndex--;
            setTimeout(type, 50);
        } else {
            // Change word
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            setTimeout(type, 1000);
        }
    }

    // Start typing animation
    setTimeout(type, 1000);

    // Scroll Reveal Animation for Skills
    const skillBars = document.querySelectorAll('.skill-progress');

    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }

    // Intersection Observer for skill bars animation
    const skillsSection = document.querySelector('.skills');
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(skillsSection);

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll to Top Button
    const scrollTopBtn = document.querySelector('.scroll-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();


});

//FOrm submision using Google Apps Script


const scriptURL = "https://script.google.com/macros/s/AKfycbzRPHIuUhsVYzFs4wFrw1x8eGea7CPNjruI9sTn4Tzemo9L4ToS0pO_1v9UdpNPCs8-9g/exec";
const form = document.getElementById("contactForm");
const formMessage = document.querySelector(".form-message");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch(scriptURL, {
            method: "POST",
            mode: "no-cors", // prevents CORS issues, but no response can be read
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        form.reset();
        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";
        alert("Thank you! Your message has been sent.");
    } catch (error) {
        console.error("Error:", error);
        formMessage.textContent = "Failed to send message.";
        formMessage.style.color = "red";
         alert("Oops! Something went wrong. Please try again.");
    }
});