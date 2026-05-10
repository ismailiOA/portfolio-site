// =========================
// NAV LINKS SMOOTH SCROLL
// =========================
const navLinks = document.querySelectorAll(".nav-links a");
const headerHeight = document.querySelector(".header")?.offsetHeight || 0;

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId.startsWith("#")) {
      // Only scroll for internal sections
      e.preventDefault();

      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const topPos = targetSection.offsetTop - headerHeight - 20; // adjust for header
        window.scrollTo({ top: topPos, behavior: "smooth" });
      }
    }
  });
});

// =========================
// PROJECT CARDS ANIMATION (index.html)
// =========================
const projectCards = document.querySelectorAll(".projects .project");

if (projectCards.length) {
  const observerOptions = {
    threshold: 0.2, // Trigger when 20% is visible
  };

  const projectObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transition =
          "opacity 0.8s ease, transform 0.8s ease";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  projectCards.forEach((card) => {
    projectObserver.observe(card);
  });
}

// =========================
// SKETCH & GALLERY IMAGE ANIMATION (project pages)
// =========================
const scrollElements = document.querySelectorAll(
  ".sketch-grid img, .gallery-grid img",
);

if (scrollElements.length) {
  const scrollObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          entry.target.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  scrollElements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    scrollObserver.observe(el);
  });
}

// =========================
// CONTACT FORM VALIDATION
// =========================
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields correctly.");
      return;
    }

    // Success feedback
    alert("Thank you! Your message has been sent.");

    // Reset form after submission
    contactForm.reset();
  });
}

// =========================
// BACK-TO-TOP BUTTON
// =========================
const backToTopBtn = document.getElementById("backToTop");

if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Back to top button
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.remove("hide");
  } else {
    backToTop.classList.add("hide");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
