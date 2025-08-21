<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Coca-Cola — Black & White Experience</title>
  <meta name="description" content="A cinematic, black & white Coca-Cola themed experience with smooth, flashy animations.">
  <link rel="preload" href="cocacolalogo.png" as="image">
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <!-- Custom cursor -->
  <div class="cursor" aria-hidden="true"></div>

  <!-- Page loader -->
  <div class="loader" aria-hidden="true">
    <div class="loader-ring"></div>
    <span class="loader-text">Loading</span>
  </div>

  <!-- Floating bubbles / particles background -->
  <div id="bubbles" aria-hidden="true"></div>

  <!-- Header / Nav -->
  <header class="site-header">
    <a href="#" class="brand" aria-label="Home">
      <img src="cocacolalogo.png" alt="Coca-Cola Logo" class="brand-logo">
      <span class="brand-text">Coke Studio</span>
    </a>

    <nav class="nav">
      <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-list">
        <li><a href="#hero">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#story">Story</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Hero -->
  <section id="hero" class="hero section">
    <div class="hero-content">
      <div class="hero-logo-wrap" data-animate="fade-in" data-delay="0">
        <img src="cocacolalogo.png" alt="Coca-Cola" class="hero-logo">
      </div>

      <h1 class="hero-title" data-animate="stagger-up" data-delay="150">
        <span>Taste</span> <span>the</span> <span>Feeling</span>
      </h1>

      <p class="hero-sub" data-animate="fade-up" data-delay="400">
        A black & white, high-gloss experience—smooth scrolls, soft glows, and fizzy motion.
      </p>

      <div class="hero-cta" data-animate="fade-up" data-delay="600">
        <a href="#products" class="btn btn-primary">Explore</a>
        <a href="#story" class="btn btn-ghost">Our Story</a>
      </div>
    </div>

    <!-- subtle parallax layers -->
    <div class="hero-parallax layer-1" aria-hidden="true"></div>
    <div class="hero-parallax layer-2" aria-hidden="true"></div>
    <div class="hero-parallax vignette" aria-hidden="true"></div>
  </section>

  <!-- Products -->
  <section id="products" class="products section">
    <div class="section-head">
      <h2 data-animate="fade-up">Iconic Classics</h2>
      <p data-animate="fade-up" data-delay="150">Minimal palette. Maximum vibe. Hover for surprises.</p>
    </div>

    <div class="product-grid">
      <!-- Coca-Cola Original -->
      <article class="product-card" data-animate="slide-in-left">
        <figure class="product-media">
          <img src="cocacolacan.png" alt="Coca-Cola Original Can">
        </figure>
        <div class="product-info">
          <h3>Coca-Cola Original</h3>
          <p>Bold, timeless, unmistakable.</p>
          <ul class="bullet">
            <li>Silky scroll reveal</li>
            <li>Glow-on-hover can spin</li>
            <li>Subtle bass-like float</li>
          </ul>
          <a href="#contact" class="btn btn-line">Stay in touch</a>
        </div>
      </article>

      <!-- Diet Coke -->
      <article class="product-card" data-animate="fade-up" data-delay="100">
        <figure class="product-media">
          <img src="dietcocacola.png" alt="Diet Coca-Cola Can">
        </figure>
        <div class="product-info">
          <h3>Diet Coke</h3>
          <p>Crisp feel, zero guilt aesthetic.</p>
          <ul class="bullet">
            <li>Monochrome shimmer</li>
            <li>Magnetic hover pull</li>
            <li>Ripple buttons</li>
          </ul>
          <a href="#contact" class="btn btn-line">Stay in touch</a>
        </div>
      </article>

      <!-- Coke Zero -->
      <article class="product-card" data-animate="slide-in-right" data-delay="150">
        <figure class="product-media">
          <img src="cocacolazero.png" alt="Coca-Cola Zero Can">
        </figure>
        <div class="product-info">
          <h3>Coke Zero Sugar</h3>
          <p>Sharp lines, zero compromise.</p>
          <ul class="bullet">
            <li>3D tilt on hover</li>
            <li>Shadow bloom</li>
            <li>Micro-parallax</li>
          </ul>
          <a href="#contact" class="btn btn-line">Stay in touch</a>
        </div>
      </article>
    </div>
  </section>

  <!-- Divider marquee -->
  <section class="marquee" aria-hidden="true">
    <div class="marquee-track">
      <span>COCA-COLA •</span><span>TASTE THE FEELING •</span><span>CLASSIC •</span>
      <span>COCA-COLA •</span><span>TASTE THE FEELING •</span><span>CLASSIC •</span>
    </div>
  </section>

  <!-- Story / Timeline -->
  <section id="story" class="story section">
    <div class="section-head">
      <h2 data-animate="fade-up">The Story in Black & White</h2>
      <p data-animate="fade-up" data-delay="150">Moments that fizz. Milestones that shine.</p>
    </div>

    <ol class="timeline">
      <li class="tl-item" data-animate="slide-in-left">
        <div class="tl-dot"></div>
        <time class="tl-time">1886</time>
        <div class="tl-card">
          <h3>Origins</h3>
          <p>A spark becomes a sip—crafted, shared, remembered.</p>
        </div>
      </li>
      <li class="tl-item" data-animate="slide-in-right">
        <div class="tl-dot"></div>
        <time class="tl-time">1950s</time>
        <div class="tl-card">
          <h3>Global Icon</h3>
          <p>Design meets culture; the silhouette is instantly known.</p>
        </div>
      </li>
      <li class="tl-item" data-animate="slide-in-left">
        <div class="tl-dot"></div>
        <time class="tl-time">2005</time>
        <div class="tl-card">
          <h3>Zero Era</h3>
          <p>Sharper edge, same vibe—monochrome modern.</p>
        </div>
      </li>
      <li class="tl-item" data-animate="slide-in-right">
        <div class="tl-dot"></div>
        <time class="tl-time">Today</time>
        <div class="tl-card">
          <h3>Timeless</h3>
          <p>Classic feel with future-ready motion. Black, white, unforgettable.</p>
        </div>
      </li>
    </ol>
  </section>

  <!-- Parallax Break -->
  <section class="parallax-cta section" aria-label="Taste the Classic">
    <div class="parallax-inner" data-animate="fade-in">
      <h2>Classic Never Fades</h2>
      <p>Scroll-reactive depth. Cinematic motion. Minimal palette.</p>
      <a href="#contact" class="btn btn-primary">Collaborate</a>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="contact section">
    <div class="section-head">
      <h2 data-animate="fade-up">Say Hello</h2>
      <p data-animate="fade-up" data-delay="120">Let’s build something refreshing.</p>
    </div>

    <form class="contact-form" action="#" method="post" novalidate data-animate="stagger-up">
      <div class="form-row">
        <label for="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" required>
      </div>
      <div class="form-row">
        <label for="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" required>
      </div>
      <div class="form-row">
        <label for="msg">Message</label>
        <textarea id="msg" name="message" rows="4" placeholder="Your message"></textarea>
      </div>
      <button class="btn btn-primary" type="submit">Send</button>
    </form>
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <p>© <span id="year"></span> Coke Studio — Concept fan site (Black & White Edition).</p>
    <a href="#hero" class="to-top" aria-label="Back to top">↑</a>
  </footer>

  <!-- Scripts -->
  <script src="script.js"></script>
</body>
</html>
