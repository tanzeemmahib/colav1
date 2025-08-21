/* ===========================
   BLACK & WHITE COKE — SCRIPT
   (Vanilla JS + smooth motion)
   =========================== */

(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Helpers ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ---------- Year in footer ---------- */
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Loader (non-blocking) ---------- */
  const loader = $('.loader');
  if (loader) {
    // Briefly show loader during asset decode; fades out on 'load'
    loader.classList.add('active');
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.remove('active'), 350);
    });
  }

  /* ---------- Mobile nav toggle ---------- */
  const nav = $('.nav');
  const navToggle = $('.nav-toggle');
  if (nav && navToggle) {
    const setExpanded = (val) => {
      nav.setAttribute('aria-expanded', String(val));
      navToggle.setAttribute('aria-expanded', String(val));
    };
    setExpanded(false);

    navToggle.addEventListener('click', () => {
      const expanded = nav.getAttribute('aria-expanded') === 'true';
      setExpanded(!expanded);
    });

    // Close after clicking a link (mobile)
    $$('.nav-list a').forEach(a =>
      a.addEventListener('click', () => setExpanded(false))
    );
  }

  /* ---------- Button ripple (mouse position) ---------- */
  $$('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      btn.style.setProperty('--mx', `${e.clientX - r.left}px`);
      btn.style.setProperty('--my', `${e.clientY - r.top}px`);
    }, { passive: true });
  });

  /* ---------- Scroll reveal (IntersectionObserver) ---------- */
  const reveal = (els, extraClass) => {
    if (!('IntersectionObserver' in window)) {
      // Fallback: show everything
      els.forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
          target.classList.add('in');
          if (extraClass) target.classList.add(extraClass);
          obs.unobserve(target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });
    els.forEach(el => io.observe(el));
  };

  reveal($$('[data-animate]'));
  reveal($$('.tl-card')); // timeline cards

  /* ---------- Hero parallax (logo + content) ---------- */
  if (!prefersReduced) {
    const hero = $('.hero');
    const heroLogo = $('.hero-logo');
    const heroContent = $('.hero-content');

    if (hero && (heroLogo || heroContent)) {
      const onScroll = () => {
        const y = window.scrollY || window.pageYOffset;
        const h = hero.offsetHeight || window.innerHeight;
        const p = Math.max(0, Math.min(y / h, 1)); // 0 → 1

        if (heroLogo) {
          const scale = 1 - p * 0.12;
          const ty = -20 * p; // px
          heroLogo.style.transform = `translateY(${ty}px) scale(${scale})`;
        }
        if (heroContent) {
          heroContent.style.opacity = String(1 - p * 0.35);
        }
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }
  }

  /* ---------- Product card tilt (3D micro-parallax) ---------- */
  if (!prefersReduced) {
    $$('.product-card').forEach(card => {
      const mediaImg = $('.product-media img', card);

      const onMove = (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;   // 0..1
        const y = (e.clientY - r.top) / r.height;   // 0..1
        const rotX = (0.5 - y) * 8;                 // deg
        const rotY = (x - 0.5) * 8;                 // deg
        card.style.transform = `translateY(-6px) perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        if (mediaImg) mediaImg.style.transform = `translateZ(90px) rotateZ(-2deg) scale(1.06)`;
      };

      const onLeave = () => {
        card.style.transform = '';
        if (mediaImg) mediaImg.style.transform = '';
      };

      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
    });
  }

  /* ---------- Custom cursor ---------- */
  const cursor = $('.cursor');
  if (cursor && !prefersReduced && window.matchMedia('(pointer:fine)').matches) {
    let rafId;
    const pos = { x: 0, y: 0 }, target = { x: 0, y: 0 };

    const render = () => {
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      cursor.style.left = `${pos.x}px`;
      cursor.style.top = `${pos.y}px`;
      rafId = requestAnimationFrame(render);
    };

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      cursor.classList.add('active');
      if (!rafId) rafId = requestAnimationFrame(render);
    };

    const onLeave = () => {
      cursor.classList.remove('active');
      cancelAnimationFrame(rafId);
      rafId = null;
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mousedown', () => {
      cursor.classList.add('click');
      setTimeout(() => cursor.classList.remove('click'), 140);
    });

    // Emphasize over interactive elements
    const interactive = ['a', 'button', '.btn', 'input', 'textarea', '.product-card'];
    interactive.forEach(sel => {
      $$(sel).forEach(el => {
        el.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%,-50%) scale(1.2)');
        el.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%,-50%) scale(1)');
      });
    });
  }

  /* ---------- Smooth anchor focus (accessibility nicety) ---------- */
  $$('.nav-list a, .to-top').forEach(a => {
    a.addEventListener('click', () => {
      const href = a.getAttribute('href') || '';
      if (href.startsWith('#') && href.length > 1) {
        const t = $(href);
        if (t) setTimeout(() => t.setAttribute('tabindex', '-1'), 0);
      }
    });
  });

  /* ---------- Bonus: gently animate marquee speed on hover ---------- */
  const marquee = $('.marquee-track');
  if (marquee && !prefersReduced) {
    marquee.addEventListener('mouseenter', () => marquee.style.animationDuration = '24s');
    marquee.addEventListener('mouseleave', () => marquee.style.animationDuration = '16s');
  }

  /* ---------- Defensive: trigger initial reveals for above-the-fold ---------- */
  // Some browsers may not fire IO if element already in view before setup
  setTimeout(() => {
    $$('[data-animate]').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) el.classList.add('in');
    });
    $$('.tl-card').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) el.classList.add('in');
    });
  }, 120);
})();
