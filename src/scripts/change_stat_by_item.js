import changeStatByLevel from "./change_stat_by_level";

function changeStatByItem(champstat, itemStat) {
  let dupObj = { ...champstat };

  for (let [key, value] of Object.entries(itemStat)) {
    switch (key) {
      case "FlatArmorMod":
        dupObj.armor += value;
        break;
      case "FlatHPPoolMod":
        dupObj.hp += value;
        break;
      case "FlatPhysicalDamageMod":
        dupObj.attackdamage += value;
        break;
      case "FlatMPPoolMod":
        dupObj.mp += value;
        break;
      default:
    }
  }

  document.querySelector("#champ-stats").innerText = JSON.stringify(dupObj);
}

export default changeStatByItem;

//sunfire
// stats: Object { FlatHPPoolMod: 500, FlatArmorMod: 50 }
// ​​​​
// FlatArmorMod: 50
// ​​​​
// FlatHPPoolMod: 500
