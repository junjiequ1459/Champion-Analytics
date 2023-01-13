export function changeStatByLevel(data) {
  let select = document.querySelector("#number-select");
  select.addEventListener("change", function () {
    let selectedNumber = select.value;
    if (selectedNumber === "1") {
      document.querySelector("#champ-stats").innerText = JSON.stringify(data);
      return data;
    } else {
      let dupObj = { ...data };

      dupObj = { ...addStats(dupObj, select.value) };
      document.querySelector("#champ-stats").innerText = JSON.stringify(dupObj);
      return dupObj;
    }
  });
}

export function addStats(dupObj, value) {
  dupObj.hp += dupObj.hpperlevel * value;
  dupObj.mp += dupObj.mpperlevel * value;
  dupObj.armor += dupObj.armorperlevel * value;
  dupObj.spellblock += dupObj.spellblockperlevel * value;
  dupObj.mpregen += dupObj.mpregenperlevel * value;
  dupObj.hpregen += dupObj.hpregenperlevel * value;
  dupObj.attackdamage += dupObj.attackdamageperlevel * value;
  dupObj.attackspeed =
    dupObj.attackspeed * (1 + (dupObj.attackspeedperlevel * value) / 100);
  return dupObj;
}
