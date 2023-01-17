export function statChart(Damage, Armor, Spellblock) {
  var ctx = document.querySelector("#statChart").getContext("2d");

  var myChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["Damage", "Armor", "Magic Resist"],
      datasets: [
        {
          label: "Data Set 1",
          data: [Damage, Armor, Spellblock],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        // {
        //   label: "Data Set 2",
        //   data: [45, 30, 45],
        //   backgroundColor: "rgba(54, 162, 235, 0.2)",
        //   borderColor: "rgba(54, 162, 235, 1)",
        //   borderWidth: 1,
        // },
      ],
    },
    options: {
      scale: {
        angleLines: {
          display: true,
        },
        gridLines: {
          display: true,
        },
      },
    },
  });
}
