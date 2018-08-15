function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  let nested = document.getElementById(nested);
  nested.getElementsByClassName(target);
}
