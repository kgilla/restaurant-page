import {makeElement} from './functions';

const renderMenu = () => {

  const page = document.querySelector(".page");
  
  const heading = makeElement("h2", "sub-heading", "Menu", page);

  const menu = makeElement("ul", "menu", "", page);

  const item1 = makeElement("li", "menu-item", "Ontario Asparagus", menu);
  makeElement("p", "menu-desc", "Fresh asparagus, bacon vinegrette, gremolatta", item1);
  makeElement("p", "menu-price", "15", item1);

  const item2 = makeElement("li", "menu-item", "Sea Urchin", menu);
  makeElement("p", "menu-desc", "Delicate sea urchin, shaved parmesan, toasted bread crumble", item2);
  makeElement("p", "menu-price", "15", item2);

  const item3 = makeElement("li", "menu-item", "Umamai Dust", menu);
  makeElement("p", "menu-desc", "Who knew there was another flavor? So much interest wow", item3);
  makeElement("p", "menu-price", "21", item3);

  const item4 = makeElement("li", "menu-item", "Canadian Sturgeon", menu);
  makeElement("p", "menu-desc", "Wild caught sturgeon, lightly smoked, tender greens, citrus", item4);
  makeElement("p", "menu-price", "29", item4);

  const item5 = makeElement("li", "menu-item", "P.E.I Rib Eye", menu);
  makeElement("p", "menu-desc", "A big honkin piece of meat, fried golden potatoes, fresh greens", item5);
  makeElement("p", "menu-price", "36", item5);

  const item6 = makeElement("li", "menu-item", "Something", menu);
  makeElement("p", "menu-desc", "Let us cook for you, three courses of whatever we find particularily exciting!", item6);
  makeElement("p", "menu-price", "69", item6);

};

export {renderMenu};