import { changeStatByLevel } from "./change_stat_by_level";
import { addStats } from "./change_stat_by_level";
import changeStatByItem from "./change_stat_by_item";
import { buttonClick } from "./button_click";
import { StatChart } from "./charts";


const championApiUrl =
  "https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/championFull.json";
const itemApiUrl =
  "https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/item.json";

let champName = "MasterYi";
let itemName = "3068"; //sunfire cape

export function displayStatAndItem() {
  fetch(championApiUrl)
    .then((response) => response.json())
    .then((data) => {
      let champStatData = data.data[champName].stats;
      document.querySelector("#champ-stats").innerText =
        JSON.stringify(champStatData);
      document.querySelector("#champ_description").innerText = JSON.stringify(
        data.data[champName].lore
      );
      buttonClick(data, champName);
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
            StatChart();
          });
        });
    });
}
