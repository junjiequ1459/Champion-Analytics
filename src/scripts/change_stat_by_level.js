export function changeStatByLevel(data) {
  let select = document.querySelector("#number-select");
  select.addEventListener("change", function () {
    let selectedNumber = select.value;
    console.log(selectedNumber)
    if (selectedNumber === "1") {
      document.querySelector("#c_health").innerText = `Health : ${JSON.stringify(data.hp)}`;
      document.querySelector("#c_mana").innerText = `Mana : ${JSON.stringify(data.mp)}`;
      document.querySelector("#c_health_regen").innerText = `HealthRegen : ${JSON.stringify(data.hpregen)}`;
      document.querySelector("#c_mana_regen").innerText = `ManaRegen : ${JSON.stringify(data.mpregen)}`;
      document.querySelector("#c_armor").innerText = `Armor : ${JSON.stringify(data.armor)}`;
      document.querySelector("#c_attack_damage").innerText = `AttackDamage : ${JSON.stringify(data.attackdamage)}`;
      document.querySelector("#c_magic_resist").innerText = `MagicResist : ${JSON.stringify(data.spellblock)}`;
      document.querySelector("#c_crit").innerText = `Crit : ${JSON.stringify(data.crit)}`;
      document.querySelector("#c_move_speed").innerText = `MoveSpeed : ${JSON.stringify(data.movespeed)}`;
      document.querySelector("#c_attack_range").innerText = `AttackRange : ${JSON.stringify(data.attackrange)}`;
      return data;
    } else {
      let dupObj = { ...data };

      dupObj = { ...addStats(dupObj, select.value) };

      document.querySelector("#c_health").innerText = `Health : ${JSON.stringify(dupObj.hp)}`;
      document.querySelector("#c_mana").innerText = `Mana : ${JSON.stringify(dupObj.mp)}`;
      document.querySelector("#c_health_regen").innerText = `HealthRegen : ${JSON.stringify((dupObj.hpregen).toFixed(1))}`;
      document.querySelector("#c_mana_regen").innerText = `ManaRegen : ${JSON.stringify((dupObj.mpregen).toFixed(1))}`;
      document.querySelector("#c_armor").innerText = `Armor : ${JSON.stringify((dupObj.armor).toFixed(1))}`;
      document.querySelector("#c_attack_damage").innerText = `AttackDamage : ${JSON.stringify(dupObj.attackdamage)}`;
      document.querySelector("#c_magic_resist").innerText = `MagicResist : ${JSON.stringify((dupObj.spellblock).toFixed(1))}`;
      document.querySelector("#c_crit").innerText = `Crit : ${JSON.stringify(dupObj.crit)}`;
      document.querySelector("#c_move_speed").innerText = `MoveSpeed : ${JSON.stringify(dupObj.movespeed)}`;
      document.querySelector("#c_attack_range").innerText = `AttackRange : ${JSON.stringify(dupObj.attackrange)}`;
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
