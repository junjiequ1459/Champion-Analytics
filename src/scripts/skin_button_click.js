export function skinButtonClick(champName) {
  let allButton = document.querySelectorAll(".skin_button");
  document.querySelector(
    "#champ_skin"
  ).src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_${allButton[0].value}.jpg`;
  for (let i = 0; i < allButton.length; i++) {
    allButton[i].addEventListener("click", function () {
      document.querySelector(
        "#champ_skin"
      ).src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_${allButton[i].value}.jpg`;
    });
  }
}
