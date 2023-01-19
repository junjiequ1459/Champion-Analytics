import createDropDown from "./scripts/create_dropdown_menu";
import { displayStatAndItem } from "./scripts/display_champion_and_item";
import { remove_button } from "./scripts/generate_button_on_skin";
let champName = "Kaisa";

const form = document.querySelector("form");
const refresh = document.querySelector(".fa-arrows-rotate");
const questionMark = document.querySelector(".fa-question");
const search = document.querySelector(".fa-magnifying-glass");
let result = displayStatAndItem(champName);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const searchInput = document.querySelector("#search-input");
  champName = searchInput.value; // .toLowerCase();
  // let cleanChampName = champName[0].toUpperCase() + champName.slice(1);
  // if (cleanChampName === "Wukong") {
  //   cleanChampName = "MonkeyKing";
  // }

  if (champName === "Wukong") {
    champName = "MonkeyKing";
  }

  createDropDown();
  displayStatAndItem(champName);
  remove_button();
});

refresh.addEventListener("click", function (event) {
  event.preventDefault();
  let randomChampName = result[Math.floor(Math.random() * result.length)];
  displayStatAndItem(randomChampName);
  remove_button();
});

questionMark.addEventListener("hover", function (event) {
  event.preventDefault();
});

search.addEventListener("click", function (event) {
  event.preventDefault();
  const searchInput = document.querySelector("#search-input");
  champName = searchInput.value.toLowerCase();
  let cleanChampName = champName[0].toUpperCase() + champName.slice(1);
  createDropDown();
  displayStatAndItem(cleanChampName);
  remove_button();
});

createDropDown();
