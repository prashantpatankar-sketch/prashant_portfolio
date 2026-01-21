# 🚀 PORTFOLIO SETUP GUIDE

## QUICK START (5 MINUTES)

### Step 1: Initial Setup
```bash
# Navigate to your portfolio folder
cd portfolio

# Test locally (choose one based on your system)
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000

# Node.js (if installed)
npx http-server
```
Then open: `http://localhost:8000`

---

## ⚙️ EMAILJS SETUP (Email Contact Form)

### Why EmailJS?
- Free tier (200 emails/month)
- No backend required
- Direct email delivery
- Easy setup

### Setup Steps:

#### 1️⃣ Create EmailJS Account
- Visit: https://www.emailjs.com/
- Click "Sign up free"
- Use Google or email signup
- Verify your email

#### 2️⃣ Add Email Service
- Go to Dashboard → Email Services (left sidebar)
- Click "Create New Service"
- Choose your provider:
  - **Gmail**: Select "Gmail" → Connect your Gmail account
  - **Outlook**: Similar process
  - **Custom SMTP**: Requires SMTP details

#### 3️⃣ Verify Email Address
- Check your email inbox
- Click verification link
- EmailJS now knows where to send emails

#### 4️⃣ Create Email Template
- Go to Dashboard → Email Templates
- Click "Create New Template"
- Configure template:

**Template Settings:**
- Template Name: `portfolio_contact` (or any name)
- Subject: `New Portfolio Contact: {{from_name}}`

**Email Content:**
```
Hi there!

You've received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Message:
{{message}}

---
Sent from Portfolio Website
```

- Click "Save"
- Note down: **Template ID** (e.g., template_abc123)

#### 5️⃣ Get Your Credentials

**Service ID:**
- Go to Email Services
- Look for your connected service
- Copy the **Service ID**

**Template ID:**
- Go to Email Templates
- Copy the **Template ID**

**Public Key (API Key):**
- Go to Account → API Keys (or info icon)
- Copy your **Public Key**

#### 6️⃣ Update JavaScript File

Open `js/script.js` and find these lines:

**Line ~100 (Initialize):**
```javascript
emailjs.init('YOUR_PUBLIC_KEY');
```
Replace `YOUR_PUBLIC_KEY` with your actual public key

**Lines ~128-129 (Send Email):**
```javascript
emailjs.send(
    'YOUR_SERVICE_ID',      // Replace here
    'YOUR_TEMPLATE_ID',     // Replace here
    templateParams
)
```

**Example after update:**
```javascript
emailjs.init('pk_47d8f3k2hd9f2k39');
emailjs.send(
    'service_9d8f2k3h',
    'template_7h8f2k9d',
    templateParams
)
```

#### 7️⃣ Test the Contact Form
- Go to your portfolio
- Fill the contact form
- Submit
- Check your email inbox
- Verify email arrives

---

## 📦 UPDATE PERSONAL INFORMATION

### 1. Update HTML Links

**File:** `index.html`

**LinkedIn URL (Line 83):**
```html
<!-- Before -->
<a href="https://linkedin.com/in/" target="_blank">

<!-- After -->
<a href="https://linkedin.com/in/your-username" target="_blank">
```

**GitHub URL (Line 87):**
```html
<!-- Before -->
<a href="https://github.com/" target="_blank">

<!-- After -->
<a href="https://github.com/your-username" target="_blank">
```

**Footer Links (Lines 249-251):**
```html
<!-- Before -->
<a href="https://linkedin.com/in/" target="_blank">
<a href="https://github.com/" target="_blank">

<!-- After -->
<a href="https://linkedin.com/in/your-username" target="_blank">
<a href="https://github.com/your-username" target="_blank">
```

### 2. Add Resume File

- Create your resume as PDF
- Name it: `Prashant_Patankar_Resume.pdf`
- Place in: `assets/resume/`
- Download button will automatically work

### 3. Update Project Links

**File:** `index.html` (Lines ~200-215)

```html
<!-- For each project, update GitHub link -->
<a href="https://github.com/your-username/project-name" target="_blank">
```

### 4. Add Profile Photo (Optional)

- Save photo as: `assets/images/profile.jpg`
- Add to About section:
```html
<img src="assets/images/profile.jpg" alt="Profile Photo" style="width: 150px; border-radius: 50%;">
```

---

## 🎨 CUSTOMIZE COLORS

**File:** `css/style.css`

**Lines 1-15 (CSS Variables):**

Current colors (Dark theme with cyan & pink):
```css
:root {
    --primary-color: #00d4ff;      /* Bright Cyan */
    --secondary-color: #ff006e;    /* Hot Pink */
    --dark-bg: #0a0e27;            /* Dark Blue */
    --card-bg: #1a1f3a;            /* Lighter Blue */
    --text-primary: #e4e4e7;       /* Light Gray */
    --text-secondary: #a1a1a6;     /* Medium Gray */
}
```

**Color Palette Options:**

Purple Theme:
```css
--primary-color: #9d4edd;
--secondary-color: #c77dff;
--dark-bg: #10002b;
--card-bg: #240046;
```

Green Theme:
```css
--primary-color: #00f5a0;
--secondary-color: #00d084;
--dark-bg: #0a1f12;
--card-bg: #1a3a2e;
```

Orange Theme:
```css
--primary-color: #ff6b35;
--secondary-color: #ff4757;
--dark-bg: #1a0f0e;
--card-bg: #3a2a29;
```

---

## 🌐 DEPLOY TO GITHUB PAGES

### Method 1: GitHub Pages (Easiest)

**Step 1: Create GitHub Repository**
```
1. Go to github.com
2. Click "New Repository" (top-left)
3. Repository name: yourusername.github.io
4. Make sure it's PUBLIC
5. Click "Create repository"
```

**Step 2: Push Your Code**
```bash
# In your portfolio folder, initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Step 3: Access Your Portfolio**
```
After 1-2 minutes, visit: https://yourusername.github.io
```

---

### Method 2: Deploy to Netlify (Recommended)

**Step 1: Push to GitHub**
(Follow GitHub steps above, but use any repository name)

**Step 2: Connect to Netlify**
```
1. Go to netlify.com
2. Click "Sign up"
3. Select "GitHub"
4. Authorize Netlify
5. Click "New site from Git"
6. Select your portfolio repository
7. Click "Deploy site"
```

**Benefits:**
- ✅ Free SSL certificate
- ✅ Custom domain support
- ✅ CDN for fast loading
- ✅ Automatic deployments on push

---

### Method 3: Deploy to Vercel

**Step 1: Push to GitHub**

**Step 2: Deploy on Vercel**
```
1. Go to vercel.com
2. Click "Sign up" → Choose "GitHub"
3. Import your repository
4. Click "Deploy"
5. Get automatic deployments on every push
```

---

## ✅ FINAL CHECKLIST

Before sharing your portfolio:

### Content Check
- [ ] Replace "Prashant Patankar" with your name (all occurrences)
- [ ] Update LinkedIn profile URL
- [ ] Update GitHub profile URL
- [ ] Add your resume PDF
- [ ] Update project descriptions
- [ ] Review "About" section for accuracy

### Contact Form
- [ ] EmailJS account created
- [ ] Service ID added to `script.js`
- [ ] Template ID added to `script.js`
- [ ] Public Key added to `script.js`
- [ ] Test form submission

### Design
- [ ] Colors match your preference
- [ ] Profile photo added (if desired)
- [ ] Mobile view tested
- [ ] All links working

### Deployment
- [ ] Code pushed to GitHub
- [ ] Site deployed (GitHub Pages / Netlify / Vercel)
- [ ] Domain accessible
- [ ] Performance tested

### SEO (Optional but Recommended)
- [ ] Update meta description in HTML
- [ ] Add keywords in meta tag
- [ ] Update favicon
- [ ] Test on Google Mobile-Friendly Test

---

## 🐛 TROUBLESHOOTING

### Contact Form Not Working?

**Check 1: Verify EmailJS Setup**
```javascript
// Open browser console (F12)
// Should print: "HELLO! 👋"
console.log('Testing EmailJS');
```

**Check 2: Verify Credentials**
```javascript
// Open js/script.js
// Confirm these are NOT:
// - YOUR_PUBLIC_KEY
// - YOUR_SERVICE_ID
// - YOUR_TEMPLATE_ID
```

**Check 3: Check Browser Console**
- Press `F12` in browser
- Go to "Console" tab
- Submit form and check for errors

**Check 4: Verify Email Service**
- Go to EmailJS dashboard
- Confirm email service is connected
- Check service hasn't been disconnected

### Resume Not Downloading?

**Solution:**
```bash
# Make sure file exists:
assets/resume/Prashant_Patankar_Resume.pdf

# File name must be exact (case-sensitive on Linux)
# Check: No spaces, correct spelling, .pdf extension
```

### Site Not Loading?

**If using GitHub Pages:**
```
1. Wait 2-3 minutes after first push
2. Clear browser cache (Ctrl+Shift+Del)
3. Check repository settings → Pages → Main branch
4. Verify index.html is in root folder
```

**If using Netlify:**
```
1. Check deployment status in Netlify dashboard
2. Check build logs for errors
3. Clear Netlify cache: Settings → Clear cache
```

### Styling Not Applying?

```bash
# Clear browser cache:
# Option 1: Ctrl+Shift+Del (Windows/Linux)
# Option 2: Cmd+Shift+Del (Mac)
# Option 3: Hard refresh: Ctrl+F5 or Cmd+Shift+R
```

---

## 📱 RESPONSIVE TESTING

Test on different devices:

```bash
# Chrome DevTools (Recommended)
1. Open website
2. Press F12
3. Click "Toggle device toolbar" (Ctrl+Shift+M)
4. Test all screen sizes

# Or test on real devices:
- iPhone / iPad
- Android phone
- Tablet (Portrait & Landscape)
- Desktop (Full width)
```

---

## 🚀 OPTIMIZATION TIPS

### Image Optimization
- Use TinyPNG to compress images
- Use WebP format for modern browsers
- Add lazy loading for images

### Performance
- Minify CSS/JS in production
- Use GZIP compression (hosting)
- Enable browser caching

### SEO
- Add Open Graph meta tags
- Submit to Google Search Console
- Add sitemap.xml

---

## 💡 NEXT STEPS

1. **Add Blog Section** (Optional)
   - Add markdown-based blog
   - Use static site generator

2. **Add More Projects**
   - Add 3-5 real projects
   - Include screenshots
   - Add live demos

3. **Custom Domain**
   - Buy domain from GoDaddy/Namecheap
   - Connect to GitHub Pages or Netlify
   - Add SSL certificate (auto on Netlify)

4. **Analytics**
   - Add Google Analytics
   - Track visitor stats
   - Monitor form submissions

---

## 📞 NEED HELP?

- Check README.md for detailed info
- Review code comments in files
- Test in different browsers
- Check browser console (F12) for errors

---

**You're all set! 🎉**

Your portfolio is ready to impress recruiters!
