const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
const sections = Array.from(document.querySelectorAll("[data-section]"));
const revealItems = Array.from(document.querySelectorAll(".reveal"));
const specialtyFilters = Array.from(document.querySelectorAll("[data-specialty-filter]"));
const specialtyCards = Array.from(document.querySelectorAll("[data-specialty-category]"));
const labTabs = Array.from(document.querySelectorAll("[data-lab-tab]"));
const labPanels = Array.from(document.querySelectorAll("[data-lab-panel]"));
const form = document.getElementById("appointment-form");
const feedback = document.getElementById("form-feedback");
const departmentPills = Array.from(document.querySelectorAll("[data-department-pill]"));
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuToggle = document.querySelector("[data-mobile-menu-toggle]");
const mobileMenuClosers = Array.from(document.querySelectorAll("[data-mobile-menu-close]"));

const setActiveNav = (id) => {
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === id);
  });
};

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      setActiveNav(`#${entry.target.id}`);
    });
  },
  {
    rootMargin: "-35% 0px -45% 0px",
    threshold: 0.1,
  },
);

sections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
  },
);

revealItems.forEach((item) => revealObserver.observe(item));

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const targetId = link.getAttribute("href");

    if (targetId?.startsWith("#")) {
      setActiveNav(targetId);
    }
  });
});

const setMobileMenuState = (isOpen) => {
  if (!mobileMenu || !mobileMenuToggle) {
    return;
  }

  mobileMenu.classList.toggle("is-open", isOpen);
  mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  mobileMenuToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("mobile-menu-open", isOpen);

  mobileMenuClosers.forEach((item) => {
    if (item.classList.contains("mobile-menu-backdrop")) {
      item.hidden = !isOpen;
      item.classList.toggle("is-open", isOpen);
    }
  });
};

if (mobileMenu && mobileMenuToggle) {
  mobileMenuToggle.addEventListener("click", () => {
    setMobileMenuState(!mobileMenu.classList.contains("is-open"));
  });

  mobileMenuClosers.forEach((item) => {
    item.addEventListener("click", () => {
      setMobileMenuState(false);
    });
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMobileMenuState(false);
    }
  });
}

specialtyFilters.forEach((filterButton) => {
  filterButton.addEventListener("click", () => {
    const selected = filterButton.dataset.specialtyFilter;

    specialtyFilters.forEach((button) => {
      button.classList.toggle("is-active", button === filterButton);
    });

    specialtyCards.forEach((card) => {
      const matches =
        selected === "all" || card.dataset.specialtyCategory === selected;
      card.classList.toggle("is-hidden", !matches);
    });
  });
});

labTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.labTab;

    labTabs.forEach((button) => {
      button.classList.toggle("is-active", button === tab);
    });

    labPanels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.labPanel === target);
    });
  });
});

if (form && feedback) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name");
    const department = formData.get("department");
    const date = formData.get("date");

    feedback.textContent = `Request captured for ${name} in ${department} on ${date}. A coordinator will follow up to confirm the slot.`;
    form.reset();
  });
}

if (form && departmentPills.length > 0) {
  const departmentSelect = form.querySelector('select[name="department"]');

  departmentPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      departmentPills.forEach((item) => {
        item.classList.toggle("is-active", item === pill);
      });

      if (departmentSelect) {
        departmentSelect.value = pill.dataset.departmentPill;
      }
    });
  });
}
