function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div.target');
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('ul.ranked-list li').innerhtml
  for (i = 0; i < ranks.length; i++) {
    parseInt(ranks[i].innerHTML, 10);
  }
}
