function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div.target');
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < ranks.length; i++) {
    let old_number = parseInt(ranks[i].innerHTML, 10);
    ranks[i].innerHTML = old_number + n;
  }
}

function deepestChild() {
  let grand_nodes = document.querySelectorAll('div#grand-node');
  return grand_nodes[grand_nodes.length];
}
