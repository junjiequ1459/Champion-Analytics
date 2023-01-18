import createDropDown from "./scripts/create_dropdown_menu";
import { displayStatAndItem } from "./scripts/display_champion_and_item";
let champName = "Kaisa";

const form = document.querySelector("form");
const refresh = document.querySelector(".fa-arrows-rotate");
let result = displayStatAndItem(champName);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const searchInput = document.querySelector("#search-input");
  champName = searchInput.value.toLowerCase();
  let cleanChampName = champName[0].toUpperCase() + champName.slice(1);
  displayStatAndItem(cleanChampName);
});

refresh.addEventListener("click", function (event) {
  event.preventDefault();
  let randomChampName = result[Math.floor(Math.random() * result.length)];
  displayStatAndItem(randomChampName);
});
createDropDown();
