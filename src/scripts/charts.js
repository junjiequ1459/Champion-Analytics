export function StatChart(
  Damage = 20,
  Toughness = 20,
  Utility = 20,
  Mobility = 20,
  Control = 20
) {
  var ctx = document.querySelector("#statChart").getContext("2d");

  var myChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["Damage", "Toughness", "Utility", "Mobility", "Control"],
      datasets: [
        {
          label: "Data Set 1",
          data: [Damage, Toughness, Utility, Mobility, Control],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          label: "Data Set 2",
          data: [45, 30, 45, 55],
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
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
