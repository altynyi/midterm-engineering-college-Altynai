// Navbar Active Link Handling
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Registration Form Validation
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', e => {
    e.preventDefault();
    const pass = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;
    const msg = document.getElementById('registerMsg');

    if (pass !== confirm) {
      msg.innerHTML = '<div class="alert alert-danger">Passwords do not match.</div>';
      return;
    }
    if (!terms) {
      msg.innerHTML = '<div class="alert alert-danger">You must accept the terms.</div>';
      return;
    }
    msg.innerHTML = '<div class="alert alert-success">Registration successful! We will contact you soon.</div>';
    registerForm.reset();
  });
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const spam = parseInt(document.getElementById('spamCheck').value);
    const msg = document.getElementById('contactMsg');
    if (spam !== 5) {
      msg.innerHTML = '<div class="alert alert-danger">Anti-spam check failed. Try again.</div>';
      return;
    }
    msg.innerHTML = '<div class="alert alert-success">Message sent successfully!</div>';
    contactForm.reset();
  });
}

// Example Extra Interactivity: FAQ Toggle (Progressive Enhancement)
document.querySelectorAll('.faq-question')?.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.nextElementSibling.classList.toggle('d-none');
  });
});
