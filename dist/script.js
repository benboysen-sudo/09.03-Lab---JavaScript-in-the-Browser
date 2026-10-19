function myLineUp(event) {
  event.preventDefault();

  const form = document.getElementById("lineup-form");
  const display = document.getElementById("lineup-display");
  if (!(form instanceof HTMLFormElement) || !display) {
    console.error("The lineup form or its display element could not be found.");
    return;
  }

  const status = form.querySelector('input[name="status"]:checked');
  const gameDate = form.querySelector("#gameDate");
  if (!(status instanceof HTMLInputElement) || !(gameDate instanceof HTMLSelectElement)) {
    console.error("The lineup status or game date could not be found.");
    return;
  }

  const players = Array.from(
    form.querySelectorAll('input[name="players"]:checked'),
    (player) => player.value
  );
  const lineup = {
    status: status.value,
    gameDate: gameDate.value,
    players
  };

  console.log("Lineup data:", lineup);
  display.textContent = `Status: ${lineup.status}, Date: ${lineup.gameDate}, Players: ${
    lineup.players.length ? lineup.players.join(", ") : "None selected"
  }`;
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
