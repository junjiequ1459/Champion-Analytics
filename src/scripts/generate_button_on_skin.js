export function generate_button(champData, champName, number) {
  for (let i = 0; i < number; i++) {
    let div_button = document.querySelector("#button_skin_container");
    let button = document.createElement("button");
    button.className = "skin_button";
    button.id = "skin_button" + i;
    button.setAttribute("value", champData.data[champName].skins[i].num);
    button.innerHTML = champData.data[champName].skins[i].name;
    div_button.appendChild(button);
  }
}

export function remove_button() {
  let elements = document.getElementsByClassName("skin_button");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}
