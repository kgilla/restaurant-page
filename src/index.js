import './style.css';
import './reset.css';
import {renderHeader as header} from './modules/navbar';
import {renderHomepage} from './modules/home';
import {renderMenu} from './modules/menu';
import {makeElement} from './modules/functions';

const restaurant = (() => {

/* init element setup */
const main = document.getElementById("content");
const nav = header;
const page = makeElement("div", "page", "", main);
renderHomepage();

/* adding listeners to navbar  */
nav.ele1.addEventListener("click", makeHome);
nav.ele2.addEventListener("click", makeMenu);
nav.ele3.addEventListener("click", makeContact);

function clearPage() { 
  page.innerHTML = "";
}

function makeMenu() {
  clearPage();
  renderMenu();
}

function makeHome() {
  clearPage();
  renderHomepage();
}

function makeContact() {
  clearPage();
} 

})();
