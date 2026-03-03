document.addEventListener("DOMContentLoaded", () => {
    /* ── CUSTOM CURSOR ──────────────────────────────────── */
    const hasPointer = window.matchMedia(
        "(hover: hover) and (pointer: fine)",
    ).matches;
    const cursor = document.getElementById("cursor");
    const cursorRing = document.getElementById("cursorRing");
    if (hasPointer && cursor && cursorRing) {
        document.addEventListener("mousemove", (e) => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
            setTimeout(() => {
                cursorRing.style.left = e.clientX + "px";
                cursorRing.style.top = e.clientY + "px";
            }, 80);
        });
        document
            .querySelectorAll("a, button, .video-card")
            .forEach((el) => {
                el.addEventListener("mouseenter", () =>
                    cursor.classList.add("hover"),
                );
                el.addEventListener("mouseleave", () =>
                    cursor.classList.remove("hover"),
                );
            });
    }

    /* ── MOBILE NAV ─────────────────────────────────────── */
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            navToggle.classList.toggle("open");
            navLinks.classList.toggle("open");
        });
        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navToggle.classList.remove("open");
                navLinks.classList.remove("open");
            });
        });
    }

    /* ── SCROLL-TRIGGERED TIMELINE ──────────────────────── */
    const timelineItems =
        document.querySelectorAll(".timeline-item");
    if (timelineItems.length) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, i) => {
                    if (entry.isIntersecting) {
                        setTimeout(
                            () =>
                                entry.target.classList.add(
                                    "visible",
                                ),
                            i * 150,
                        );
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 },
        );
        timelineItems.forEach((item) => observer.observe(item));
    }

    /* ── SPARK PARTICLES ────────────────────────────────── */
    const canvas = document.getElementById("sparkCanvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        let W,
            H,
            sparks = [];

        const resize = () => {
            W = canvas.width = canvas.offsetWidth;
            H = canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener("resize", resize, {
            passive: true,
        });

        class Spark {
            constructor() {
                this.reset(true);
            }
            reset(initial) {
                // spawn from random points along the bottom half
                this.x = Math.random() * W;
                this.y = initial
                    ? Math.random() * H
                    : H * (0.5 + Math.random() * 0.6);
                // mostly upward with a slight horizontal drift
                const angle =
                    -Math.PI / 2 + (Math.random() - 0.5) * 1.1;
                const speed = 0.4 + Math.random() * 1.4;
                this.vx = Math.cos(angle) * speed;
                this.vy = Math.sin(angle) * speed;
                this.life = 0;
                this.maxLife = 60 + Math.random() * 90;
                this.size = 0.8 + Math.random() * 1.6;
                // teal / seafoam / warm-white palette
                const palette = [
                    [78, 205, 196], // seafoam
                    [26, 143, 163], // teal
                    [180, 230, 230], // pale teal-white
                    [255, 240, 200], // warm flicker
                ];
                this.color =
                    palette[
                        Math.floor(Math.random() * palette.length)
                    ];
                this.tail = [];
            }
            update() {
                this.tail.unshift({ x: this.x, y: this.y });
                if (this.tail.length > 6) this.tail.pop();
                // gentle gravity pulling sparks back
                this.vy += 0.012;
                // tiny random walk
                this.vx += (Math.random() - 0.5) * 0.08;
                this.x += this.vx;
                this.y += this.vy;
                this.life++;
                if (this.life > this.maxLife || this.y < -10)
                    this.reset(false);
            }
            draw() {
                const progress = this.life / this.maxLife;
                // fade in then fade out
                const alpha =
                    progress < 0.15
                        ? progress / 0.15
                        : 1 - (progress - 0.15) / 0.85;
                const [r, g, b] = this.color;

                // draw tail
                for (let i = 0; i < this.tail.length; i++) {
                    const t = this.tail[i];
                    const ta =
                        alpha * (1 - i / this.tail.length) * 0.35;
                    ctx.beginPath();
                    ctx.arc(
                        t.x,
                        t.y,
                        this.size *
                            (1 - i / this.tail.length) *
                            0.6,
                        0,
                        Math.PI * 2,
                    );
                    ctx.fillStyle = `rgba(${r},${g},${b},${ta})`;
                    ctx.fill();
                }

                // draw core
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
                ctx.fill();

                // soft glow
                const grd = ctx.createRadialGradient(
                    this.x,
                    this.y,
                    0,
                    this.x,
                    this.y,
                    this.size * 4,
                );
                grd.addColorStop(
                    0,
                    `rgba(${r},${g},${b},${alpha * 0.25})`,
                );
                grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
                ctx.beginPath();
                ctx.arc(
                    this.x,
                    this.y,
                    this.size * 4,
                    0,
                    Math.PI * 2,
                );
                ctx.fillStyle = grd;
                ctx.fill();
            }
        }

        // initialise ~55 sparks staggered across the canvas
        for (let i = 0; i < 55; i++) sparks.push(new Spark());

        const tick = () => {
            ctx.clearRect(0, 0, W, H);
            sparks.forEach((s) => {
                s.update();
                s.draw();
            });
            requestAnimationFrame(tick);
        };
        tick();
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
            const target = document.querySelector(
                anchor.getAttribute("href"),
            );
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });

    /* ── NAV SCROLL STATE ───────────────────────────────── */
    const nav = document.getElementById("mainNav");
    if (nav) {
        const onScroll = () =>
            nav.classList.toggle("scrolled", window.scrollY > 60);
        window.addEventListener("scroll", onScroll, {
            passive: true,
        });
        onScroll();
    }
});
