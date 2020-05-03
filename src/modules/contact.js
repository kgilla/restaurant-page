import {makeElement} from './functions';

const renderContact = () => {

  const page = document.querySelector(".page");
  
  const heading = makeElement("h2", "sub-heading", "Get In Touch", page);

  const contact = makeElement("ul", "contact-box", "", page);

  const address = makeElement("li", "contact-heading", "Address", contact);
  makeElement("p", "contact-info", "123 Fake Street, Toronto Ontario M6Y 3F3", address);

  const phone = makeElement("li", "contact-heading", "Telephone", contact);
  makeElement("p", "contact-info", "(416)-123-4567", phone);
  
  const email = makeElement("li", "contact-heading", "Email", contact);
  makeElement("p", "contact-info", "Cornholio@gmail.com", email);

};

export {renderContact};