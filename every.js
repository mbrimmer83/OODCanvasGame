var cards = [
  {match: true},
  {match: true},
  {match: true},
  {match: true}
]

var winner = cards.every(function(item, idx, arr){
  return item.match
});

console.log(winner);
