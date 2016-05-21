
function sortFood() {
  var food = ['steak', 'shrimp', 'apples'].sort();

  //implement
}

console.log('food', sortFood()); // -> apples, shrimp, steak

var people = [
  { name: 'Sue', age: 65 },
  { name: 'Bob', age: 40 },
  { name: 'Dirk', age: 27 },
  { name: 'Naaman', age: 35 },
  { name: 'George', age: 97 }
];

function sortPeopleByAgeAscending() {
  //implement
}

console.log('sort by age', sortPeopleByAgeAscending()); // -> Dirk, then Naaman, then Bob, then Sue, and finally George

function sortPeopleByNameDescending() {
  //implement
}

console.log('sort by name', sortPeopleByNameDescending()); // -> Sue, then Naaman, then George, then Dirk, and finally Bob
