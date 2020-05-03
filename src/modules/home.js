import {makeElement} from './functions'

const renderHomepage = () => {

  const page = document.querySelector(".page");

  const quote = makeElement("h3", "quote", "Trust us with filling your mouthhole the right way!", page);

};

export {renderHomepage};