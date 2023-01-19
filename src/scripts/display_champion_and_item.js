import { changeStatByLevel } from "./change_stat_by_level";
import { buttonClick } from "./button_click";
import { statChart } from "./charts";
import { allQuerys } from "./querySelectors";
import { generate_button } from "./generate_button_on_skin";
import { skinButtonClick } from "./skin_button_click";

// import { addStats } from "./change_stat_by_level";
// import changeStatByItem from "./change_stat_by_item";

const championApiUrl =
  "https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/championFull.json";
const itemApiUrl =
  "https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/item.json";

// let champtionName = "Kaisa";
// let itemName = "3068"; //sunfire cape
export function displayStatAndItem(champName) {
  let allChampArray = [];
  fetch(championApiUrl)
    .then((response) => response.json())
    .then((data) => {
      let champData = data;
      try {
        let skinAmount = champData.data[champName].skins.length;
        for (let key in champData.data) {
          allChampArray.push(key);
        }
        allQuerys(champData, champName);
        statChart(
          champData.data[champName].info.attack,
          champData.data[champName].info.defense,
          champData.data[champName].info.magic
        );
        let champStatData = champData.data[champName].stats;
        changeStatByLevel(champStatData);
        buttonClick(champData, champName);
        generate_button(champData, champName, skinAmount);
        skinButtonClick(champName);
        // let select = document.querySelector("#number-select");
        // let tempObj = { ...champStatData };
        // changeStatByItem(addStats(tempObj, select.value), itemData);
        // fetch(itemApiUrl)
        //   .then((response) => response.json())
        //   .then((data) => {
        // let itemData = data.data[itemName].stats;
        // let sunfire = document.querySelector("#sunfire");

        // sunfire.addEventListener("click", function () {
        // });
      } catch (error) {
        alert("Champion does not Exist");
      }
    });
  return allChampArray;
}
