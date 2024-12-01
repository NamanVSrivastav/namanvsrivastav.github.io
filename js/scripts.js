document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Anchor Links
    const heroLinks = document.querySelectorAll(".hero-links a");
    heroLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const target = link.getAttribute("href");
        if (target.startsWith("#")) {
          document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // Animate Hero Section Elements
    const observerOptions = {
      threshold: 0.5, // Element becomes visible when 50% is in view
    };
  
    const animateOnScroll = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, observerOptions);
  
    document.querySelectorAll(".hero--left, .hero--right").forEach((el) => {
      el.classList.add("hidden");
      animateOnScroll.observe(el);
    });
  });
  document.querySelectorAll('.social-icon').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default behavior (if needed)
      window.location.href = link.href; // Manually redirect
    });
  });
  