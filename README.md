# Prashant Patankar - Personal Portfolio Website

A modern, responsive, dark-themed personal portfolio website for a Full Stack Developer. Built with pure HTML, CSS, and JavaScript - no frameworks, no backend, no database.

## 🚀 Features

✨ **Modern Design**
- Dark theme with professional colors
- Smooth animations and hover effects
- Fully responsive (mobile, tablet, desktop)
- Single-page layout with smooth scrolling

📱 **Responsive Layout**
- Mobile-first design approach
- Hamburger menu for mobile devices
- Optimized for all screen sizes

⚡ **Interactive Elements**
- Sticky navigation bar
- Fade-in animations on scroll
- Smooth scroll behavior
- Contact form with EmailJS integration
- Scroll-to-top button

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styling with CSS variables
├── js/
│   └── script.js          # JavaScript functionality
├── assets/
│   ├── images/            # Place your images here
│   └── resume/
│       └── Prashant_Patankar_Resume.pdf
├── README.md              # This file
└── .gitignore            # Git ignore file
```

## 🛠️ Sections Included

### 1. **Header / Navbar**
- Sticky navigation bar with smooth scrolling links
- Logo with name "Prashant Patankar"
- Responsive mobile menu with hamburger toggle

### 2. **Hero Section**
- Eye-catching greeting "HELLO!"
- Name and role display
- Three CTA buttons (LinkedIn, GitHub, Resume Download)

### 3. **About Section**
- Professional introduction for freshers
- Mentions core skills and experience

### 4. **Skills Section**
- Skill cards with icons for:
  - HTML, CSS, JavaScript
  - Python, Git & GitHub
  - MySQL

### 5. **Projects Section**
- 3 project cards with descriptions:
  - Portfolio Website
  - Employee Management System
  - Login & Registration System
- GitHub links for each project

### 6. **Contact Section**
- Contact form with validation
- EmailJS integration for email delivery
- Success/error message display

### 7. **Footer**
- Copyright information
- Social media links (LinkedIn, GitHub)

## 🔧 Setup Instructions

### 1. **Download/Clone the Project**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. **Set Up EmailJS for Contact Form**

1. Visit [EmailJS](https://www.emailjs.com/) and sign up
2. Create a free account
3. Go to "Email Services" and create a new service (e.g., Gmail)
4. Configure your email settings
5. Create an Email Template with these variables:
   - `from_name` (sender's name)
   - `from_email` (sender's email)
   - `message` (message content)

6. Get your credentials:
   - **Service ID** (from Email Services)
   - **Template ID** (from Email Templates)
   - **Public Key** (from Account → API Keys)

7. Open `js/script.js` and replace:
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY');           // Line 100
   emailjs.send('YOUR_SERVICE_ID', ...       // Line 128
   'YOUR_TEMPLATE_ID', ...                   // Line 129
   ```

### 3. **Update Personal Information**

Edit `index.html` and update:
- LinkedIn URL (line 83)
- GitHub URL (line 87)
- Project links in Projects section

### 4. **Add Your Resume**

Place your resume PDF in: `assets/resume/Prashant_Patankar_Resume.pdf`

The download link is already configured in the HTML.

### 5. **Test Locally**

```bash
# Using Python (if installed)
python -m http.server 8000

# Or use any local server
# Then open: http://localhost:8000
```

## 🌐 Deploy to GitHub Pages

### Method 1: Using GitHub Pages Directly

1. Create a GitHub account (if you don't have one)
2. Create a new repository named: `yourusername.github.io`
3. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   ```
4. Copy all portfolio files into this repository
5. Commit and push:
   ```bash
   git add .
   git commit -m "Add portfolio website"
   git push origin main
   ```
6. Your portfolio is now live at: `https://yourusername.github.io`

### Method 2: Using a Different Repository Name

1. Create a new repository (e.g., `portfolio`)
2. Push your code to GitHub
3. Go to repository Settings → Pages
4. Under "Source", select: Branch: `main`, Folder: `/ (root)`
5. Click "Save"
6. Your portfolio will be at: `https://yourusername.github.io/portfolio`

### Method 3: Alternative Hosting Options

- **Netlify** (Free & Easy):
  1. Connect your GitHub repo to Netlify
  2. Deploy is automatic on push
  3. Get a free domain or use your custom domain

- **Vercel** (Free & Fast):
  1. Import your GitHub repo
  2. Deploy with one click
  3. Free SSL certificate included

- **Firebase Hosting**:
  1. Install Firebase CLI
  2. Run `firebase init hosting`
  3. Deploy with `firebase deploy`

## 🎨 Customization Guide

### Change Color Scheme

Edit `css/style.css` - CSS Variables section (lines 1-15):

```css
:root {
    --primary-color: #00d4ff;      /* Change cyan color */
    --secondary-color: #ff006e;    /* Change pink color */
    --dark-bg: #0a0e27;            /* Change dark background */
    --card-bg: #1a1f3a;            /* Change card background */
    /* ... more colors ... */
}
```

### Modify Fonts

Google Fonts are already imported. To change:
1. Visit [Google Fonts](https://fonts.google.com/)
2. Select a font family
3. Copy the import link
4. Replace in `index.html` (line 17)

### Update Social Links

In `index.html`, update:
- Line 83: LinkedIn URL
- Line 87: GitHub URL
- Footer social links (lines 249-251)

## 🚀 Performance Tips

✅ **Already Implemented:**
- Lazy loading with Intersection Observer
- CSS animations using GPU acceleration
- Minimal external dependencies
- Optimized image loading

📈 **Further Optimization:**
1. Compress images using [TinyPNG](https://tinypng.com/)
2. Minify CSS/JS in production
3. Use WebP format for images
4. Enable gzip compression on hosting

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🔒 Security Notes

- Contact form data is sent directly to your email via EmailJS
- No data is stored on servers
- HTML5 form validation included
- Email validation before sending

## 📝 Best Practices Implemented

✅ Semantic HTML5
✅ CSS Variables for maintainability
✅ Mobile-first responsive design
✅ Accessible navigation and buttons
✅ Form validation and error handling
✅ Smooth animations and transitions
✅ Clean, commented code
✅ Beginner-friendly structure

## 🤝 Contributing

Feel free to fork and customize this portfolio for your own use!

## 📄 License

This portfolio template is open source and available for personal use.

---

## 💡 Tips for Job Applications

1. **Update All Links**: Make sure LinkedIn and GitHub links work
2. **Professional Email**: Use professional email in contact form
3. **Add Real Projects**: Replace project descriptions with your actual work
4. **Professional Photo**: Consider adding a profile picture
5. **Custom Domain**: Use a custom domain instead of GitHub Pages URL
6. **Mobile Check**: Test on real mobile devices
7. **Performance**: Test with Google PageSpeed Insights

## 🐛 Troubleshooting

**Contact form not working?**
- Check if EmailJS credentials are correct in `js/script.js`
- Verify email service is configured on EmailJS dashboard
- Check browser console for errors

**Resume not downloading?**
- Ensure file exists at `assets/resume/Prashant_Patankar_Resume.pdf`
- Check file name matches exactly (case-sensitive on Linux)

**Responsive design issues?**
- Clear browser cache (Ctrl+Shift+Del)
- Test in Chrome DevTools mobile view
- Check viewport meta tag in HTML

## 📞 Support

For issues or questions, please check the code comments or reach out on LinkedIn.

---

**Happy coding! 🚀**

Built with ❤️ for developers.
