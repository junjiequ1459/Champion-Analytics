import createDropDown from "./scripts/create_dropdown_menu";
import { displayStatAndItem } from "./scripts/display_champion_and_item";
let champName = "Kaisa";
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const searchInput = document.querySelector("#search-input");
  champName = searchInput.value;
  displayStatAndItem(champName);
});

displayStatAndItem(champName);
createDropDown();
