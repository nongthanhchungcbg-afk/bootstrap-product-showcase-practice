const colorButtons = document.querySelectorAll(".color-swatch");
const selectedColor = document.querySelector("#selectedColor");

colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    colorButtons.forEach((option) => {
      const isSelected = option === button;
      option.classList.toggle("active", isSelected);
      option.setAttribute("aria-pressed", String(isSelected));
    });

    selectedColor.textContent = button.dataset.color;
  });
});
