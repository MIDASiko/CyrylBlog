document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("#nav-menu a");
  const categoryBlocks = document.querySelectorAll(".category-block");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      const target = link.getAttribute("href").substring(1);

      categoryBlocks.forEach(block => {
        block.style.display = target === "all" || block.dataset.category === target ? "block" : "none";
      });

      const title = document.querySelector(".category-title");
      title.textContent = link.textContent === "Все" ? "Все статьи" : link.textContent;
    });
  });
});