const menuToggle = document.querySelector("[data-menu-toggle]");
const header = document.querySelector(".site-header");
const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const projectCards = Array.from(document.querySelectorAll("[data-category]"));
const filterFeedback = document.querySelector(".filter-feedback");

menuToggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;
    let visibleCount = 0;

    projectCards.forEach((card) => {
      const isVisible = category === "todos" || card.dataset.category === category;
      card.classList.toggle("is-filtered", !isVisible);
      if (isVisible) visibleCount += 1;
    });

    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    filterFeedback.textContent = `Mostrando ${visibleCount} ${visibleCount === 1 ? "produto" : "produtos"}`;
  });
});
