import Example from "./scripts/example";
import createDropDown from "./scripts/create_dropdown_menu";
import changeStatByLevel from "./scripts/change_stat_by_level";

const apiUrl =
  "https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/championFull.json";
let champName = "Kaisa";

createDropDown();

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    let champData = data;
    (document.querySelector("#champ-stats").innerText = JSON.stringify(
      data.data[champName].stats
    )),
      changeStatByLevel(data, champName);

    fetch("https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/item.json")
      .then((response) => response.json())
      .then((data) => {
        let jsonData2 = data;
        console.log(jsonData2);data
        // you can use the jsonData2 variable here
        // or in other functions
      });
  });

const root = document.querySelector("#root");
new Example(root);
