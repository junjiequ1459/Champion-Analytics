function createDropDown() {
  let select = document.querySelector("#number-select");
  let option = document.createElement("option");
  option.text = "Select a level";
  option.value = "1";
  option.disabled = true;
  option.selected = true;
  select.appendChild(option);

  for (let i = 1; i <= 18; i++) {
    let option = document.createElement("option");
    option.text = i;
    option.value = i;
    select.appendChild(option);
  }
}

export default createDropDown;
