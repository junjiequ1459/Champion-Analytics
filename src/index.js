import Example from "./scripts/example";

addEventListener("DOMContentLoaded", () => {
  let myLocalObject;

  fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => {
      myLocalObject = data;
      console.log(myLocalObject);
    })
    .catch((error) => console.error(error));

  const root = document.querySelector("#root");
  new Example(root);
});
