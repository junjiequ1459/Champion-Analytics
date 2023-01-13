function changeStatByLevel(data, champName) {
  let select = document.querySelector("#number-select");
  select.addEventListener("change", function () {
    let selectedNumber = select.value;
    if (selectedNumber === "1") {
      return (document.querySelector("#champ-stats").innerText = JSON.stringify(
        data.data[champName].stats
      ));
    } else {
      let dupObj = { ...data.data[champName].stats };
      dupObj.hp += dupObj.hpperlevel * select.value;
      dupObj.mp += dupObj.mpperlevel * select.value;
      dupObj.armor += dupObj.armorperlevel * select.value;
      dupObj.spellblock += dupObj.spellblockperlevel * select.value;
      dupObj.hpregen += dupObj.hpregenperlevel * select.value;
      dupObj.mpregen += dupObj.mpregenperlevel * select.value;
      dupObj.attackdamage += dupObj.attackdamageperlevel * select.value;
      dupObj.attackspeed =
        dupObj.attackspeed *
        (1 + (dupObj.attackspeedperlevel * select.value) / 100);

      document.querySelector("#champ-stats").innerText = JSON.stringify(dupObj);
    }
  });
}
export default changeStatByLevel;
