const MORE_BTNS = document.querySelectorAll(".questions__icon");

function displayMore(c) {
  const item = c.target;
  const parentSection = item.closest(".content__questions");
  const relatedFactsSection = parentSection.nextElementSibling;

  relatedFactsSection.classList.toggle("toggle-facts");

  if (relatedFactsSection.classList.contains("toggle-facts")) {
    item.removeAttribute("src");
    item.setAttribute("src", "images/icon-minus.svg");
  } else {
    item.removeAttribute("src");
    item.setAttribute("src", "images/icon-plus.svg");
  }
}

MORE_BTNS.forEach((btn) => {
  btn.addEventListener("click", displayMore);
  btn.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      displayMore(event);
    }
  });
});
