/**
 * Favour Chinenye Agbo — Portfolio Script
 * Features: active nav tracking, mobile menu, scroll reveal, header shadow
 */

(function () {
  'use strict';

  /* ── Elements ─────────────────────────────── */
  const header    = document.querySelector('.site-header');
  const toggle    = document.querySelector('.nav-toggle');
  const navMenu   = document.getElementById('nav-menu');
  const navLinks  = document.querySelectorAll('.nav-link:not(.nav-link--cta)');
  const sections  = document.querySelectorAll('section[id]');
  const revealEls = document.querySelectorAll('.timeline-item, .edu-card, .project-card, .focus-card, .cert-item, .skills-category, .contact-card');

  /* ── Footer year ───────────────────────────── */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── Header: shadow on scroll ──────────────── */
  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNav();
    revealOnScroll();
  }

  /* ── Active nav link ──────────────────────── */
  function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 90;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  /* ── Mobile Menu ───────────────────────────── */
  function openMenu() {
    navMenu.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navMenu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open');
      isOpen ? closeMenu() : openMenu();
    });
  }

  // Close menu when a link is clicked
  navMenu && navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      closeMenu();
      toggle && toggle.focus();
    }
  });

  /* ── Scroll Reveal ────────────────────────── */
  revealEls.forEach(el => el.classList.add('reveal'));

  function revealOnScroll() {
    const threshold = window.innerHeight * 0.88;
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < threshold) {
        el.classList.add('visible');
      }
    });
  }

  /* ── Smooth anchor clicks ─────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL without jumping
        history.pushState(null, '', `#${targetId}`);
        // Move focus for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  /* ── Init ─────────────────────────────────── */
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll(); // Run on load
  // Trigger reveal for elements already in view
  setTimeout(revealOnScroll, 100);
})();
