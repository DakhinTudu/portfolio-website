# Daxin Tudu Portfolio

## Overview
This is a personal portfolio website for Daxin Tudu, a Java Full Stack Developer. The site highlights skills, projects, education, experience, and provides a contact form for direct communication. It features a modern, responsive design with animated effects and social media integration.

## Project Structure
```
portfolio-project
├── src
│   ├── index.html                # Main HTML document
│   ├── css
│   │   └── styles.css            # Styles for the project
│   ├── js
│   │   ├── main.js               # JavaScript for interactivity
│   │   └── config.sample.js      # Sample config for API keys (do not commit real keys)
│   ├── resources
│   │   ├── images/               # Profile and project images
│   │   └── resume/               # Resume PDF
└── .gitignore                    # Ensures sensitive files are not tracked
```

## Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   ```
2. **Navigate to the project directory:**
   ```sh
   cd portfolio-project
   ```
3. **Add your EmailJS/API keys:**
   - Copy `src/js/config.sample.js` to `src/js/config.js` and fill in your own keys.
   - **Do not commit `config.js` to GitHub.**

4. **Open the portfolio:**
   - Open `src/index.html` in your web browser.
   - For best results, use a local server (like VS Code Live Server).

## Technologies Used
- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (Vanilla)
- [EmailJS](https://www.emailjs.com/) (for contact form, no backend required)
- Font Awesome (for social icons)

## Features
- Responsive, modern design
- Animated hero section with typing effect and glowing profile image
- Skills, projects, education, and experience sections
- Downloadable resume
- Contact form (works via EmailJS, no backend needed)
- Social media links (GitHub, LinkedIn, Twitter)
- Theme toggle (light/dark mode)

## Security & Privacy
- **Sensitive info (API keys, etc.) is never committed.**  
  See `.gitignore` and use `config.js` for your own keys.
- If you fork or clone, add your own EmailJS keys as described above.

## Author
**Daxin Tudu**  
Email: dtudu195@gmail.com  
[LinkedIn](https://www.linkedin.com/in/dakhin-tudu-b3550821b/) | [GitHub](https://github.com/DakhinTudu)

---
Feel free to use or adapt this portfolio for
