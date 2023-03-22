export function allQuerys(champData, champName) {
  let champStat = champData.data[champName].stats;
  let strNum = champData.data[champName].key;
  let ability = champData.data[champName].spells;
  let passive = champData.data[champName].passive.image.full;

  let champKey = strNum.padStart(4, "0");

  if (champName === "MonkeyKing") {
    document.querySelector("#title_champ").innerText = "WuKong";
  } else {
    document.querySelector("#title_champ").innerText =
      champData.data[champName].id;
  }
  document.querySelector("#title_nick").innerText =
    champData.data[champName].title;

  document.querySelector("#champ_description").innerText =
    champData.data[champName].lore;

  document.querySelector("#c_health").innerText = `Health : ${champStat.hp}`;
  document.querySelector("#c_mana").innerText = `Mana : ${champStat.mp}`;
  document.querySelector(
    "#c_health_regen"
  ).innerText = `HealthRegen : ${champStat.hpregen}`;
  document.querySelector(
    "#c_mana_regen"
  ).innerText = `ManaRegen : ${champStat.mpregen}`;
  document.querySelector("#c_armor").innerText = `Armor : ${champStat.armor}`;
  document.querySelector(
    "#c_attack_damage"
  ).innerText = `AttackDamage : ${champStat.attackdamage}`;
  document.querySelector(
    "#c_magic_resist"
  ).innerText = `MagicResist : ${champStat.spellblock}`;
  document.querySelector("#c_crit").innerText = `Crit : ${champStat.crit}`;
  document.querySelector(
    "#c_move_speed"
  ).innerText = `MoveSpeed : ${champStat.movespeed}`;
  document.querySelector(
    "#c_attack_range"
  ).innerText = `AttackRange : ${champStat.attackrange}`;

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
    ".passive_icon"
  ).src = `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/passive/${passive}`;
  document.querySelector(
    ".Q_icon"
  ).src = `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/${ability["0"].id}.png`;
  document.querySelector(
    ".W_icon"
  ).src = `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/${ability["1"].id}.png`;
  document.querySelector(
    ".E_icon"
  ).src = `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/${ability["2"].id}.png`;
  document.querySelector(
    ".R_icon"
  ).src = `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/${ability["3"].id}.png`;

  document.querySelector(".ability_description").innerText = champData.data[
    champName
  ].passive.description.replace(/<br\s*\/?>/gi, "");

  document.querySelector(".ability_name").innerText =
    champData.data[champName].passive.name;
}
