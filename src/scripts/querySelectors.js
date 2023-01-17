export function allQuerys(champData, champName) {
  let strNum = champData.data[champName].key;
  let ability = champData.data[champName].spells;
  let passive = champData.data[champName].passive.image.full;
  console.log(passive);
  let champKey = strNum.padStart(4, "0");
  document.querySelector("#title_champ").innerText =
    champData.data[champName].id;
  document.querySelector("#title_nick").innerText =
    champData.data[champName].title;
  document.querySelector("#champ-stats").innerText = JSON.stringify(
    champData.data[champName].stats
  );
  document.querySelector("#champ_description").innerText = JSON.stringify(
    champData.data[champName].lore
  );

  document.querySelector(
    "#main_img"
  ).src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_0.jpg`;

  document.querySelector(
    "#backround_img"
  ).src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_0.jpg`;

  document.querySelector(
    "#source"
  ).src = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${champKey}/ability_${champKey}_P1.webm`;
  document.querySelector("#ability_video").load();

  document.querySelector(
    "#passive_icon"
  ).src = `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/passive/${passive}`;
  document.querySelector(
    "#Q_icon"
  ).src = `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/${ability["0"].id}.png`;
  document.querySelector(
    "#W_icon"
  ).src = `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/${ability["1"].id}.png`;
  document.querySelector(
    "#E_icon"
  ).src = `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/${ability["2"].id}.png`;
  document.querySelector(
    "#R_icon"
  ).src = `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/${ability["3"].id}.png`;
  document.querySelector(".ability_description").innerText =
    champData.data[champName].passive.description
}
