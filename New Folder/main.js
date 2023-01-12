fetch(
  "https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/championFull.json"
)
  .then((response) => response.json())
  .then((data) => {
    let select = document.getElementById("level");
    select.addEventListener("change", myFunction);

    function myFunction() {
      document.getElementById("stats").innerText = JSON.stringify(
        data.data.Aatrox.stats
      );
      console.log("test");
    }

    document.getElementById("stats").innerText = JSON.stringify(
      data.data.Kaisa.stats
    );
    document.getElementById("lore").innerText = JSON.stringify(
      data.data.Kaisa.lore
    );
    document.getElementById("difficulty").innerText = JSON.stringify(
      data.data.Kaisa.info
    );
    document.getElementById("role").innerText = JSON.stringify(
      data.data.Kaisa.tags
    );
    document.getElementById("spell1").innerText = JSON.stringify(
      `${data.data.Kaisa.spells[0].name} ${data.data.Kaisa.spells[0].description}`
    );
    document.getElementById("spell2").innerText = JSON.stringify(
      `${data.data.Kaisa.spells[1].name} ${data.data.Kaisa.spells[1].description}`
    );
    document.getElementById("spell3").innerText = JSON.stringify(
      `${data.data.Kaisa.spells[2].name} ${data.data.Kaisa.spells[2].description}`
    );
    document.getElementById("spell4").innerText = JSON.stringify(
      `${data.data.Kaisa.spells[3].name} ${data.data.Kaisa.spells[3].description}`
    );
  });
