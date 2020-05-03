import {makeElement} from './functions';

const renderContact = () => {

  const page = document.querySelector(".page");
  
  const heading = makeElement("h1", "heading", "Look at these numbers!", page);
};

export {renderContact};