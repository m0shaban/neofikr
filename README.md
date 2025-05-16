# NeoFikr Website

A modern, futuristic cyberpunk-styled website for NeoFikr, a fictional tech company specializing in AI and Web3 solutions. The website features a responsive design with RTL (Right-to-Left) support for Arabic content.

## Features

- **Futuristic Design**: Cyberpunk-inspired UI with dynamic effects
- **Particle.js Effects**: Interactive particle network in the background
- **Matrix Rain Animation**: Custom matrix rain effect with Arabic characters
- **Responsive Layout**: Works on mobile, tablet, and desktop devices
- **RTL Support**: Full support for Arabic content and right-to-left text direction
- **Interactive Elements**: Animations and hover effects for enhanced user experience
- **Modern Web Technologies**: Built with HTML5, CSS3, and vanilla JavaScript

## File Structure

```
neofikr/
│
├── css/
│   └── styles.css          # Main stylesheet
│
├── images/
│   ├── README.md           # Documentation for images
│   ├── logo.png            # Site logo (to be added)
│   └── neofikr-default.jpg # Default social media image (to be added)
│
├── js/
│   ├── config.js           # Particles.js configuration
│   └── script.js           # Main JavaScript file
│
├── GITHUB_PAGES_DEPLOYMENT.md  # Guide for deploying to GitHub Pages
├── README.md               # This file
└── index.html              # Main HTML file
```

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your browser to view the website locally
3. Customize the content in `index.html` to match your needs
4. Replace placeholder images in the `images` folder with your own
5. Review and update contact information and social media links

## Customization

### Change Colors

The website uses CSS variables for colors. Edit the `:root` section in `css/styles.css` to update the color scheme:

```css
:root {
    --primary: #00f0ff;    /* Main cyan color */
    --secondary: #7928ca;  /* Purple accent */
    --tertiary: #ff0080;   /* Pink accent */
    --dark: #0f0e17;       /* Dark background */
    --light: #fffffe;      /* Light text */
}
```

### Update Contact Information

Edit the contact section in `index.html` to update your information:

- Email: Find `id="config-email"` and `id="config-email-link"`
- Phone: Find `id="config-phone"` and `id="config-phone-link"`
- Address: Find `id="config-address"`
- Social media links: Find elements with IDs starting with `config-link-`

### Add or Remove Sections

Each section is clearly marked in the HTML with comments. You can add new sections or remove existing ones as needed.

## Deployment

For detailed deployment instructions, see the included `GITHUB_PAGES_DEPLOYMENT.md` file.

## External Libraries Used

- [Font Awesome](https://fontawesome.com/) for icons
- [Tailwind CSS](https://tailwindcss.com/) for utility classes
- [Google Fonts](https://fonts.google.com/) for typography (Tajawal and Orbitron)
- [Particles.js](https://vincentgarreau.com/particles.js/) for particle effects

## Credits

- Designed and developed for a Blogger to HTML/CSS conversion project
- Inspired by modern cyberpunk UI trends and designs

## License

Free to use for personal and commercial projects. Attribution appreciated but not required.
