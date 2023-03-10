import { changeStatByLevel } from "./change_stat_by_level";
import { buttonClick } from "./button_click";
import { statChart } from "./charts";
import { allQuerys } from "./querySelectors";
import { generate_button } from "./generate_button_on_skin";
import { skinButtonClick } from "./skin_button_click";

const championApiUrl =
  "https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/championFull.json";
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
      } catch (error) {
        alert("Champion does not exist, check for capitalization?");
      }
    });
  return allChampArray;
}
