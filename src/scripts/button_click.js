export function buttonClick(json, champName) {
  var strNum = json.data[champName].key;
  var champKey = strNum.padStart(4, "0");
  const videoSource = document.querySelector("#ability_video");
  const source = document.querySelector("#source");

  passive.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".ability_description").innerText =
      json.data[champName].passive.description;
    document.querySelector(".ability_name").innerText =
      json.data[champName].passive.name;
    source.src = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${champKey}/ability_${champKey}_P1.webm`;
    videoSource.load();
  });

  abilityQ.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".ability_description").innerText = json.data[
      champName
    ].spells["0"].description.replace(/<br\s*\/?>/gi, "");
    document.querySelector(".ability_name").innerText =
      json.data[champName].spells["0"].name;
    source.src = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${champKey}/ability_${champKey}_Q1.webm`;
    videoSource.load();
  });

  abilityW.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".ability_description").innerText = json.data[
      champName
    ].spells["1"].description.replace(/<br\s*\/?>/gi, "");
    document.querySelector(".ability_name").innerText =
      json.data[champName].spells["1"].name;
    source.src = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${champKey}/ability_${champKey}_W1.webm`;
    videoSource.load();
  });

  abilityE.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".ability_description").innerText = json.data[
      champName
    ].spells["2"].description.replace(/<br\s*\/?>/gi, "");
    document.querySelector(".ability_name").innerText =
      json.data[champName].spells["2"].name;
    source.src = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${champKey}/ability_${champKey}_E1.webm`;

    videoSource.load();
  });

  abilityR.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".ability_description").innerText = json.data[
      champName
    ].spells["3"].description.replace(/<br\s*\/?>/gi, "");
    document.querySelector(".ability_name").innerText =
      json.data[champName].spells["3"].name;
    source.src = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${champKey}/ability_${champKey}_R1.webm`;
    videoSource.load();
  });
}
