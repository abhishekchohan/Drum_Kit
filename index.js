const buttons = document.querySelectorAll(".set button");
const keypressed = document.addEventListener("keypress", (event) => {
  if (
    event.key === "w" ||
    event.key === "a" ||
    event.key === "s" ||
    event.key === "d" ||
    event.key === "j" ||
    event.key === "k" ||
    event.key === "l"
  ) {
    const audio = new Audio(`sounds/${event.key}.mp3`);
    audio.play();
  }
});

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    const audio = new Audio(
      `sounds/${button.getAttributeNode("class").value[0]}.mp3`
    );
    audio.play();
  })
);
