function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  let nested_target = document.getElementById(nested);
  return nested_target.getElementsByClassName(target);
}
