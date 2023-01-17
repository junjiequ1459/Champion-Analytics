export function buttonClick(json, champName) {
  const videoSource = document.querySelector("#ability_video");
  const source = document.querySelector("source");
  passive.addEventListener("click", function () {
    document.querySelector(".ability_description").innerText = JSON.stringify(
      json.data[champName].passive.description
    );
    source.src =
      "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0011/ability_0011_P1.webm";
    videoSource.load();
  });

  abilityQ.addEventListener("click", function () {
    document.querySelector(".ability_description").innerText = JSON.stringify(
      json.data[champName].spells["0"].description
    );
    source.src =
      "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0011/ability_0011_Q1.webm";
    videoSource.load();
  });

  abilityW.addEventListener("click", function () {
    document.querySelector(".ability_description").innerText = JSON.stringify(
      json.data[champName].spells["1"].description
    );
    source.src =
      "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0011/ability_0011_W1.webm";
    videoSource.load();
  });

  abilityE.addEventListener("click", function () {
    document.querySelector(".ability_description").innerText = JSON.stringify(
      json.data[champName].spells["2"].description
    );
    source.src =
      "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0011/ability_0011_E1.webm";
    videoSource.load();
  });

  abilityR.addEventListener("click", function () {
    document.querySelector(".ability_description").innerText = JSON.stringify(
      json.data[champName].spells["3"].description
    );
    source.src =
      "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0011/ability_0011_R1.webm";
    videoSource.load();
  });
}
