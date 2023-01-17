import { changeStatByLevel } from "./change_stat_by_level";
import { addStats } from "./change_stat_by_level";
import changeStatByItem from "./change_stat_by_item";
import { buttonClick } from "./button_click";
import { statChart } from "./charts";
import { allQuerys } from "./querySelectors";

const championApiUrl =
  "https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/championFull.json";
const itemApiUrl =
  "https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/item.json";

let champtionName = "Kaisa";
// let itemName = "3068"; //sunfire cape

export function displayStatAndItem(champName) {
  fetch(championApiUrl)
    .then((response) => response.json())
    .then((data) => {
      let champData = data;
      let champStatData = champData.data[champName].stats;
      allQuerys(champData, champName);
      fetch(itemApiUrl)
        .then((response) => response.json())
        .then((data) => {
          buttonClick(champData, champName);
          changeStatByLevel(champStatData);
          // let itemData = data.data[itemName].stats;
          // let sunfire = document.querySelector("#sunfire");

          // sunfire.addEventListener("click", function () {
          //   let select = document.querySelector("#number-select");
          //   let tempObj = { ...champStatData };
          //   changeStatByItem(addStats(tempObj, select.value), itemData);
          // });
          statChart(
            champData.data[champName].info.attack,
            champData.data[champName].info.defense,
            champData.data[champName].info.magic
          );
        });
    });
}
