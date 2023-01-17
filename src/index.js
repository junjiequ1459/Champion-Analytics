import Example from "./scripts/example";
import createDropDown from "./scripts/create_dropdown_menu";
import { changeStatByLevel } from "./scripts/change_stat_by_level";
import { addStats } from "./scripts/change_stat_by_level";
import changeStatByItem from "./scripts/change_stat_by_item";
const championApiUrl =
  "https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/championFull.json";
const itemApiUrl =
  "https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/item.json";
let champName = "Nami";
let itemName = "3068"; //sunfire cape

createDropDown();

fetch(championApiUrl)
  .then((response) => response.json())
  .then((data) => {
    let champStatData = data.data[champName].stats;
    document.querySelector("#champ-stats").innerText =
      JSON.stringify(champStatData);
    fetch(itemApiUrl)
      .then((response) => response.json())
      .then((data) => {
        changeStatByLevel(champStatData);
        let itemData = data.data[itemName].stats;
        let sunfire = document.querySelector("#sunfire");

        sunfire.addEventListener("click", function () {
          let select = document.querySelector("#number-select");
          let tempObj = { ...champStatData };
          console.log(changeStatByLevel(champStatData));
          changeStatByLevel;
          changeStatByItem(addStats(tempObj, select.value), itemData);
        });
      });
  });

const root = document.querySelector("#root");
new Example(root);
