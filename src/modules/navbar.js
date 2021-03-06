import {makeElement} from './functions';

const renderHeader = (() => {

  const main = document.getElementById("content");
  const header = makeElement("header", "header-nav", "", main);
  const heading = makeElement("h1", "heading", "Don Cornholio's", header);
  const image = makeElement("img", "image", "", header);
  const nav = makeElement("nav", "navbar", "", header);
  
  const ele1 = makeElement("a", "nav-link", "Home", nav);
  const ele2 = makeElement("a", "nav-link", "Menu", nav);
  const ele3 = makeElement("a", "nav-link", "Contact", nav);

  [ele1, ele2, ele3].forEach(element => {
    element.setAttribute("href", "#");
  });

  image.setAttribute("src", "/Users/k-dawg/Documents/coding-projects/restaurant-page/src/rustic.png");

  return {ele1, ele2, ele3};
})();

export {
  renderHeader
};