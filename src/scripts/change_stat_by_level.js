export function changeStatByLevel(data) {
  let select = document.querySelector("#number-select");
  select.addEventListener("change", function () {
    let selectedNumber = select.value;
    if (selectedNumber === "1") {
      document.querySelector("#c_health").innerText = `Health : ${data.hp}`;
      document.querySelector("#c_mana").innerText = `Mana : ${data.mp}`;
      document.querySelector(
        "#c_health_regen"
      ).innerText = `HealthRegen : ${data.hpregen}`;
      document.querySelector(
        "#c_mana_regen"
      ).innerText = `ManaRegen : ${data.mpregen}`;
      document.querySelector("#c_armor").innerText = `Armor : ${data.armor}`;
      document.querySelector(
        "#c_attack_damage"
      ).innerText = `AttackDamage : ${data.attackdamage}`;
      document.querySelector(
        "#c_magic_resist"
      ).innerText = `MagicResist : ${data.spellblock}`;
      document.querySelector("#c_crit").innerText = `Crit : ${data.crit}`;
      document.querySelector(
        "#c_move_speed"
      ).innerText = `MoveSpeed : ${data.movespeed}`;
      document.querySelector(
        "#c_attack_range"
      ).innerText = `AttackRange : ${data.attackrange}`;
      return data;
    } else {
      let dupObj = { ...data };

      dupObj = { ...addStats(dupObj, select.value) };

      document.querySelector("#c_health").innerText = `Health : ${dupObj.hp}`;
      document.querySelector("#c_mana").innerText = `Mana : ${dupObj.mp}`;
      document.querySelector(
        "#c_health_regen"
      ).innerText = `HealthRegen : ${dupObj.hpregen.toFixed(0)}`;
      document.querySelector(
        "#c_mana_regen"
      ).innerText = `ManaRegen : ${dupObj.mpregen.toFixed(0)}`;
      document.querySelector(
        "#c_armor"
      ).innerText = `Armor : ${dupObj.armor.toFixed(0)}`;
      document.querySelector(
        "#c_attack_damage"
      ).innerText = `AttackDamage : ${dupObj.attackdamage.toFixed(0)}`;
      document.querySelector(
        "#c_magic_resist"
      ).innerText = `MagicResist : ${dupObj.spellblock.toFixed(0)}`;
      document.querySelector("#c_crit").innerText = `Crit : ${dupObj.crit}`;
      document.querySelector(
        "#c_move_speed"
      ).innerText = `MoveSpeed : ${dupObj.movespeed}`;
      document.querySelector(
        "#c_attack_range"
      ).innerText = `AttackRange : ${dupObj.attackrange}`;
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
