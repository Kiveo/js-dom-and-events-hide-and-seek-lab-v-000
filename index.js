function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div.target');
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < ranks.length; i++) {
    console.log(ranks[i]);
    console.log("HELLO!?!?!??!");
    parseInt(ranks[i], 10) + n;
  }
}
