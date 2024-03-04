// Add a class to an HTML element
function addClass(elementId, className) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.add(className);
  }
}

// Remove a class from an HTML element
function removeClass(elementId, className) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.remove(className);
  }
}

// Toggle a class on an HTML element
function toggleClass(elementId, className) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.toggle(className);
  }
}

// Set CSS styles for an HTML element
function setStyles(elementId, styles) {
  const element = document.getElementById(elementId);
  if (element) {
    Object.assign(element.style, styles);
  }
}

// Get CSS styles for an HTML element
function getStyles(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    return window.getComputedStyle(element);
  }
  return null;
}

// Add an event listener to an HTML element
function addEventListener(elementId, event, callback) {
  const element = document.getElementById(elementId);
  if (element) {
    element.addEventListener(event, callback);
  }
}

// Remove an event listener from an HTML element
function removeEventListener(elementId, event, callback) {
  const element = document.getElementById(elementId);
  if (element) {
    element.removeEventListener(event, callback);
  }
}
