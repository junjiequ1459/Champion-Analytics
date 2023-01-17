import Example from "./scripts/example";
import createDropDown from "./scripts/create_dropdown_menu";
import { displayStatAndItem } from "./scripts/display_champion_and_item";

createDropDown();
displayStatAndItem();


const root = document.querySelector("#root");
new Example(root);
