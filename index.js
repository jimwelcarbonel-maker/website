document.addEventListener('DOMContentLoaded', () => {
  // Light/Dark Theme Switcher with LocalStorage Persistence
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('portfolio-theme');

  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '☀️ Light Glass';
  }

  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('portfolio-theme', 'light');
      themeToggleBtn.textContent = '🌙 Dark Glass';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('portfolio-theme', 'dark');
      themeToggleBtn.textContent = '☀️ Light Glass';
    }
  });

  // Contact Form Submission Handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for reaching out! Your message has been sent.');
      contactForm.reset();
    });
  }
});document.addEventListener('DOMContentLoaded', () => {
  // Light/Dark Theme Switcher with LocalStorage Persistence
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('portfolio-theme');

  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '☀️ Light Glass';
  }

  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('portfolio-theme', 'light');
      themeToggleBtn.textContent = '🌙 Dark Glass';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('portfolio-theme', 'dark');
      themeToggleBtn.textContent = '☀️ Light Glass';
    }
  });

  // Clickable Featured Project Cards & Lightbox Modal Handler
  const projectCards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalImg = document.getElementById('modal-img');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalTags = document.getElementById('modal-tags');

  // Open modal when any project card is clicked or activated via keyboard (Enter)
  projectCards.forEach(card => {
    const openCardModal = () => {
      const img = card.querySelector('.project-img');
      const category = card.querySelector('.project-category');
      const title = card.querySelector('h3');
      const desc = card.querySelector('p');
      const tags = card.querySelector('.project-tags');

      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalCategory.textContent = category.textContent;
      modalTitle.textContent = title.textContent;
      modalDesc.textContent = desc.textContent;
      modalTags.innerHTML = tags.innerHTML;

      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    card.addEventListener('click', openCardModal);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        openCardModal();
      }
    });
  });

  // Close modal function
  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  modalCloseBtn.addEventListener('click', closeModal);

  // Close when clicking outside modal content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close modal on 'Escape' keypress
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Contact Form Submission Handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for reaching out! Your message has been sent.');
      contactForm.reset();
    });
  }
});