const drink = age >= 10 ? 'Root Beer' : 'water';
console.log(drink);

let drink2;
if (age >= 10) {
    drink2 = 'Root Beer';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log('I like to drink ${age >= 10 ? 'Root Beer' : 'water'}');
