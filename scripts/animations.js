/* 
 * PontoCego Security - Scroll Animations
 * Fade-in and slide-in effects for sections
 */

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
      }
    });
  }, observerOptions);
  
  const animatedElements = document.querySelectorAll(
    '.section-title, .section-subtitle, .service-card, .team-card, ' +
    '.why-point, .why-image, .about-section, .value-card, .map-container, ' +
    '.faq-item, .blog-card, .client-logo, .industry-card, .impact-card'
  );
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}

function initNavbarScroll() {
  const nav = document.querySelector('nav');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      const successMessage = document.querySelector('.success-message');
      if (successMessage) {
        setTimeout(() => {
          successMessage.classList.add('show');
          setTimeout(() => {
            successMessage.classList.remove('show');
          }, 5000);
        }, 500);
      }
    });
  }
}

function initFAQAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const faqContainer = faqItem.closest('.faq-container');
      const isActive = faqItem.classList.contains('active');
      
      if (faqContainer) {
        faqContainer.querySelectorAll('.faq-item').forEach(item => {
          item.classList.remove('active');
        });
      }
      
      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initNavbarScroll();
  initMobileMenu();
  initSmoothScroll();
  initContactForm();
  initFAQAccordion();
});
