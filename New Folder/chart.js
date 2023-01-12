anychart.onDocumentReady(function () {
  // create a data set
  var chartData = {
    header: ["#", "Kaisa"],
    rows: [
      ["Damage", 100],
      ["Utility", 100],
      ["Toughness", 100],
      ["Control", 100],
      ["Mobility", 100],
    ],
  };

  var chart = anychart.radar();
  chart.data(chartData);
  chart.title("Ratings");
  chart.container("container");
  chart.draw();
});
