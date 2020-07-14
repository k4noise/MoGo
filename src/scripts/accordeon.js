function toggleAccordeon(accordeonTitleElement) {
  let accordeonTextElement = accordeonTitleElement.nextElementSibling;
  accordeonTitleElement.classList.toggle("information__accordeon-title-up");
  accordeonTextElement.classList.toggle("information__accordeon-text-open");
}

function closeAccordeon() {
  let accordeonTitle = document.querySelector(
    ".information__accordeon-title-up"
  );
  accordeonTitle.classList.remove("information__accordeon-title-up");
  accordeonTitle.nextElementSibling.classList.remove(
    "information__accordeon-text-open"
  );
}

document.querySelector(".information__accordeon").onclick = (e) => {
  if (e.target.classList.contains("information__accordeon")) return;
  let accordeonTitleElement =
      e.target.closest(".information__accordeon-title") ||
      e.target.previousElementSibling,
    accordeonTextElement = accordeonTitleElement.nextElementSibling;

  if (
    !accordeonTextElement.classList.contains(
      "information__accordeon-text-open"
    ) &&
    document.querySelectorAll(".information__accordeon-text-open").length === 1
  )
    closeAccordeon();
  toggleAccordeon(accordeonTitleElement);
};
