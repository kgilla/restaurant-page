import {makeElement} from './functions'

const renderHomepage = () => {

  const page = document.querySelector(".page");

  const quote = makeElement("h3", "quote", '"Trust us with filling your mouthhole the right way!"', page);

  const paragraph = makeElement("p", "para", "For over 25 years, Don Cornholio's has been happily serving the Scranton community with utter pride and dedication. Our commitment has always been to delivering excellence through our food and dining experience. We would love to have you as a guest and look forward to your patronage!", page);

 const reserve = makeElement("button", "reservation", "Make A Reservation", page);

};

export {renderHomepage};