import {makeElement} from './functions'

const socialLinks = () => {

  const main = document.querySelector("#content");

  const footer = makeElement("footer", "footer", "", main);

  const twitter = makeElement("a", "social-link", "Twitter", footer);

  const instagram = makeElement("a", "social-link", "Instagram", footer);

  const facebook = makeElement("a", "social-link", "Facebook", footer);

  [facebook, twitter, instagram].forEach(element => {
    element.setAttribute("href", "#");
  });
}

export {socialLinks};