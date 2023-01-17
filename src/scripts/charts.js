export function statChart(Attack, Defence, Magic) {
  var ctx = document.querySelector("#statChart").getContext("2d");

  var myChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["Attack", "Defense", "Magic"],
      datasets: [
        {
          label: "Data Set 1",
          data: [Attack, Defence, Magic],
          backgroundColor: "rgba(255, 140, 0, 1)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scale: {
        ticks: {
          min: 1,
          max: 10,
          display: true,
        },
        angleLines: {
          color: "white",
          display: true,
        },
        gridLines: {
          color: "gray",
          display: true,
        },
      },
    },
  });
}
