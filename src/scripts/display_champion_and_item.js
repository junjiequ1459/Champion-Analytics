import { changeStatByLevel } from "./change_stat_by_level";
import { buttonClick } from "./button_click";
import { statChart } from "./charts";
import { allQuerys } from "./querySelectors";
import { generate_button } from "./generate_button_on_skin";
import { skinButtonClick } from "./skin_button_click";
import { remove_button } from "./generate_button_on_skin";

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
        remove_button();
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
        let modal = document.createElement("div");
        modal.classList.add("modal");
        modal.addEventListener("click", function () {
          modal.style.display = "none";
        });
        let modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
        let errorMessage = document.createElement("p");
        errorMessage.textContent =
          "Champion does not exist, check for capitalization?";
        modalContent.appendChild(errorMessage);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
      }
    });
  return allChampArray;
}
