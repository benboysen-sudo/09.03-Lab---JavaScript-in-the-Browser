function myLineUp(event) {
  event.preventDefault();

  const form = document.getElementById("lineup-form");
  const display = document.getElementById("lineup-display");
  if (!(form instanceof HTMLFormElement) || !display) {
    console.error("The lineup form or its display element could not be found.");
    return;
  }

  const entries = Array.from(new FormData(form).entries());
  console.log("Lineup data:", entries);
  display.textContent = entries
    .map(([field, value]) => `${field}: ${value}`)
    .join(", ");
}

document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("lineup-submit");
  const form = document.getElementById("lineup-form");
  if (!submitButton || !(form instanceof HTMLFormElement)) {
    console.error("The lineup submit button or form could not be found.");
    return;
  }

  submitButton.addEventListener("click", myLineUp);
  form.addEventListener("submit", myLineUp);
});
