# 📋 EMAILJS SETUP CHECKLIST

## ⚙️ BEFORE YOU START

Print this page or keep it open while setting up EmailJS.

---

## STEP 1: CREATE EMAILJS ACCOUNT

- [ ] Go to: https://www.emailjs.com/
- [ ] Click "Sign up free"
- [ ] Use Email OR Google/GitHub to sign up
- [ ] Verify your email address
- [ ] Login to dashboard

---

## STEP 2: ADD EMAIL SERVICE

- [ ] Go to: Dashboard → Email Services (left sidebar)
- [ ] Click "Create New Service"
- [ ] Choose your email provider:
  - **Gmail**: Recommended, easy setup
  - **Outlook**: Also supported
  - **Custom SMTP**: For other providers

### If Using Gmail:
- [ ] Select "Gmail"
- [ ] Click "Connect Account"
- [ ] Google will ask for permission
- [ ] Allow EmailJS to send emails
- [ ] Return to EmailJS dashboard
- [ ] Service created ✅

### Your Service ID:
```
Service ID: [You'll see this on Email Services page]
```

**Save your Service ID:** `_________________________`

---

## STEP 3: CREATE EMAIL TEMPLATE

- [ ] Go to: Dashboard → Email Templates (left sidebar)
- [ ] Click "Create New Template"
- [ ] Fill in template details:

**Template Name:** `portfolio_contact`
(Can be anything, but use this for consistency)

**From Email:** `{{from_email}}`

**To Email:** Enter YOUR email where you want messages sent

**From Name:** `{{from_name}}`

**Subject:** `New Portfolio Contact: {{from_name}}`

**Email Content (HTML):** Click "Edit HTML" and copy this exactly:

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 20px;">
  <div style="background: linear-gradient(135deg, #2563eb, #7c3aed); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
    <h2 style="color: white; margin: 0;">📩 New Portfolio Contact</h2>
  </div>
  
  <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <p style="font-size: 16px; color: #1e293b; margin-bottom: 25px;">
      You've received a new message from your portfolio website!
    </p>
    
    <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <p style="margin: 0 0 10px 0; color: #64748b; font-weight: 600; font-size: 14px;">FROM:</p>
      <p style="margin: 0; color: #1e293b; font-size: 18px; font-weight: bold;">{{from_name}}</p>
    </div>
    
    <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <p style="margin: 0 0 10px 0; color: #64748b; font-weight: 600; font-size: 14px;">EMAIL:</p>
      <p style="margin: 0; color: #2563eb; font-size: 16px;">
        <a href="mailto:{{from_email}}" style="color: #2563eb; text-decoration: none;">{{from_email}}</a>
      </p>
    </div>
    
    <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <p style="margin: 0 0 15px 0; color: #64748b; font-weight: 600; font-size: 14px;">MESSAGE:</p>
      <p style="margin: 0; color: #1e293b; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">{{message}}</p>
    </div>
    
    <div style="text-align: center; padding-top: 20px; border-top: 2px solid #e2e8f0; margin-top: 30px;">
      <p style="color: #94a3b8; font-size: 13px; margin: 0;">
        💼 Sent from your Portfolio Website
      </p>
    </div>
  </div>
</div>
```

**OR use Plain Text Content (simpler):**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📩 NEW PORTFOLIO CONTACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FROM: {{from_name}}

EMAIL: {{from_email}}

MESSAGE:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💼 Sent from Portfolio Website
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

- [ ] Click "Save" or "Create Template"
- [ ] Template created ✅

**Save your Template ID:** `_________________________`

---

## STEP 4: GET YOUR PUBLIC KEY (API KEY)

- [ ] Go to: Dashboard → Account (or Info icon)
- [ ] Click "API Keys"
- [ ] You'll see your "Public Key"
- [ ] Copy the entire key (long string)

**Save your Public Key:** `_________________________`

---

## STEP 5: UPDATE YOUR JAVASCRIPT

**File to Edit:** `js/script.js`

**Find Line ~100:**
```javascript
emailjs.init('YOUR_PUBLIC_KEY');
```

Replace `YOUR_PUBLIC_KEY` with your actual Public Key from Step 4.

**Example:**
```javascript
emailjs.init('pk_live_47d8f3k2hd9f2k39abc123def456ghi');
```

---

**Find Lines ~128-129:**
```javascript
emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    templateParams
)
```

Replace with your actual Service ID and Template ID from Steps 2 & 3.

**Example:**
```javascript
emailjs.send(
    'service_abc123def456',
    'template_xyz789',
    templateParams
)
```

---

## STEP 6: TEST YOUR SETUP

- [ ] Open `index.html` in your browser
- [ ] Scroll to Contact section
- [ ] Fill out the form:
  - Name: Test Name
  - Email: your-email@example.com
  - Message: This is a test message

- [ ] Click "Send Message"
- [ ] Check for success message
- [ ] Check your email inbox
- [ ] Verify email arrived ✅

---

## ✅ COMPLETE CHECKLIST

| Step | Task | Status |
|------|------|--------|
| 1 | Create EmailJS account | ☐ |
| 2 | Add email service | ☐ |
| 3 | Verify email with provider | ☐ |
| 4 | Create email template | ☐ |
| 5 | Get credentials (Service ID, Template ID, Public Key) | ☐ |
| 6 | Update `script.js` line 100 | ☐ |
| 7 | Update `script.js` lines 128-129 | ☐ |
| 8 | Test contact form | ☐ |
| 9 | Verify email received | ☐ |

---

## 📝 CREDENTIALS REFERENCE

**Keep this for later (or in a secure location):**

```
EmailJS Account Email: _________________________
Service ID: _________________________
Template ID: _________________________
Public Key: _________________________
Email Receiving Messages: _________________________
```

---

## 🔍 TROUBLESHOOTING

### Form submits but no email?
1. Check credentials are correct (no "YOUR_..." still in code)
2. Check email service is connected
3. Check you verified with email provider
4. Try sending test from EmailJS dashboard

### Error in browser console?
1. Press F12 to open developer tools
2. Go to "Console" tab
3. Look for error messages
4. Check if credentials contain typos

### Service disconnected?
1. Go to Email Services
2. Click your service
3. Click "Reconnect" if needed
4. Re-verify with email provider

### Email going to spam?
1. Check spam/junk folder
2. Mark as "Not Spam" to train filter
3. Add EmailJS to contacts

---

## 📊 EMAILJS LIMITS (FREE TIER)

✅ Free Tier Includes:
- Up to 200 emails per month
- No credit card required
- Unlimited templates
- Unlimited services

📈 Upgrade when needed:
- Basic: $2.99/month (500 emails)
- Premium: $9.99/month (5000 emails)

---

## 🔐 SECURITY NOTES

✅ Your credentials are safe:
- Public Key: Can be public (that's why it's called "public")
- Service ID & Template ID: Should not be shared
- Your actual email password: NEVER shared with EmailJS

✅ Data protection:
- No form data stored
- Emails sent directly to your email
- Users don't see your email address
- GDPR compliant

---

## 📱 AFTER DEPLOYMENT

Your email functionality will work even after deploying online:

✅ GitHub Pages: EmailJS works
✅ Netlify: EmailJS works
✅ Vercel: EmailJS works
✅ Any static host: EmailJS works

No backend changes needed!

---

## 💡 PRO TIPS

1. **Email Notifications:**
   - EmailJS can also send confirmation to the person who contacted you
   - Configure in template advanced settings

2. **Multiple Recipients:**
   - Can set up to send to multiple email addresses
   - Check EmailJS documentation for how

3. **Email Service Issues:**
   - If Gmail disconnects, just reconnect in Email Services
   - Takes 30 seconds

4. **Monitor Usage:**
   - Check Dashboard → Usage
   - See how many emails sent this month
   - Get alerts if approaching limit

---

## ✨ YOU'RE READY!

Once you complete all these steps, your portfolio contact form will work perfectly!

Questions? Review the main documentation files:
- README.md
- SETUP_GUIDE.md
- DEPLOYMENT.md

Good luck! 🚀

---

**Print this page or save it for reference!**
