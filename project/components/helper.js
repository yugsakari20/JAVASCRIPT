export const getValue = (selector) => {
    return document.querySelector(selector).value;
  };
  
  export const getValueByClassName = (className) => {
    return document.querySelector(className).value;
  };
  
  // Export the createTag function
  export const createTag = (tag, value) => {
    let tagName = document.createElement(tag);
    if (tag === "img") {
      tagName.src = value;
    } else {
      tagName.innerHTML = value;
    }
    return tagName;
  };
  