/* ==================== NAVBAR / MOBILE MENU ==================== */

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

/**
 * Toggle mobile menu visibility
 */
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

/**
 * Close mobile menu when a link is clicked
 */
function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// Event listeners for mobile menu
hamburger.addEventListener('click', toggleMobileMenu);
navLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

/* ==================== SMOOTH SCROLLING ==================== */

/**
 * Handle smooth scrolling to sections
 */
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Scroll to show the section with some offset from top
            const offset = 80; // Navbar height + some spacing
            const targetPosition = targetSection.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/* ==================== FADE-IN ANIMATIONS ==================== */

/**
 * Observe elements and add fade-in animation when they come into view
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

/* ==================== NAVBAR ACTIVE LINK ==================== */

/**
 * Update active navigation link based on scroll position
 */
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

/* ==================== CONTACT FORM - EMAILJS ==================== */

/**
 * Initialize EmailJS
 * Your credentials are now configured!
 */
// EmailJS Initialization
emailjs.init('3JU-eh4ep0PrzmM8W'); // Public key configured

const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

/**
 * Handle contact form submission
 */
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Disable submit button to prevent double submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validate form
    if (!name || !email || !message) {
        showError('Please fill in all fields');
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        return;
    }
    
    // Validate email format
    if (!isValidEmail(email)) {
        showError('Please enter a valid email address');
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        return;
    }
    
    // Prepare template parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };
    
    // Detect device type and select appropriate template
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const templateId = isMobile ? 'template_xaps92a' : 'template_qyeffgk';
    
    // Send email via EmailJS with timeout
    const sendPromise = emailjs.send(
        'service_15hzr7i',      // Service ID configured
        templateId,             // Template ID - Auto-selects Mobile or Desktop
        templateParams
    );
    
    // Add timeout to prevent long waits
    const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 10000)
    );
    
    Promise.race([sendPromise, timeoutPromise])
    .then(function(response) {
        console.log('Email sent successfully!', response);
        showSuccess();
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    })
    .catch(function(error) {
        console.log('Failed to send email:', error);
        if (error.message === 'Request timeout') {
            showError('Request timed out. Please check your connection and try again.');
        } else {
            showError('Failed to send message. Please try again.');
        }
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    });
});

/**
 * Display success message
 */
function showSuccess() {
    successMessage.style.display = 'flex';
    errorMessage.style.display = 'none';
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);
}

/**
 * Display error message
 */
function showError(msg) {
    errorMessage.textContent = msg;
    errorMessage.style.display = 'flex';
    successMessage.style.display = 'none';
    
    // Hide error message after 5 seconds
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000);
}

/* ==================== FORM VALIDATION ==================== */

/**
 * Real-time form validation
 */
const emailInput = document.getElementById('email');

emailInput.addEventListener('blur', function() {
    if (!isValidEmail(this.value)) {
        this.style.borderColor = '#ff006e';
    } else {
        this.style.borderColor = '';
    }
});

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/* ==================== SCROLL TO TOP BUTTON ==================== */

/**
 * Handle scroll-to-top button visibility and functionality
 */
const scrollTopBtn = document.getElementById('scrollTopBtn');

if (scrollTopBtn) {
    // Show scroll-to-top button when scrolling down
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    // Scroll to top on button click
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ==================== PRELOAD ANIMATIONS ==================== */

/**
 * Add fade-in animation to hero elements on page load
 */
window.addEventListener('load', () => {
    const heroElements = document.querySelectorAll('.hero .fade-in');
    heroElements.forEach((el, index) => {
        el.style.animation = `fadeIn 0.8s ease-out ${index * 0.1}s forwards`;
    });
});

/* ==================== CONSOLE GREETING ==================== */

/**
 * Fun console message for developers
 */
console.log('%cHey there, developer! 👋', 'font-size: 20px; color: #00d4ff; font-weight: bold;');
console.log('%cThanks for checking out my portfolio! Feel free to reach out if you have any opportunities.', 'font-size: 14px; color: #a1a1a6;');
