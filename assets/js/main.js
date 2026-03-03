/* ============================================================
   CHELSEA RITTENMYER — main.js
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  /* ── CUSTOM CURSOR ──────────────────────────────────────── */
  const cursor = document.getElementById("cursor");
  const cursorRing = document.getElementById("cursorRing");

  if (cursor && cursorRing) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      setTimeout(() => {
        cursorRing.style.left = e.clientX + "px";
        cursorRing.style.top = e.clientY + "px";
      }, 80);
    });

    // Enlarge cursor on interactive elements
    const hoverTargets = document.querySelectorAll(
      "a, button, .btn, .video-card, .nav-toggle",
    );
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
    });
  }

  /* ── MOBILE NAV TOGGLE ──────────────────────────────────── */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("open");
      navLinks.classList.toggle("open");
    });

    // Close nav when a link is clicked
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("open");
        navLinks.classList.remove("open");
      });
    });
  }

  /* ── SCROLL-TRIGGERED TIMELINE ──────────────────────────── */
  const timelineItems = document.querySelectorAll(".timeline-item");

  if (timelineItems.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, i * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    timelineItems.forEach((item) => observer.observe(item));
  }

  /* ── SMOOTH SCROLL FOR ANCHOR LINKS ─────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  /* ── NAV SCROLL STATE ────────────────────────────────────── */
  const nav = document.getElementById("mainNav");
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
});
