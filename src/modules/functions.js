function makeElement(type, className, content, target) { 
  let element = document.createElement(type);
  element.setAttribute("class", className);
  element.innerHTML = content;
  target.appendChild(element);
  return element;
}

export { makeElement };