// import './utils.js';
/* import subtract, { add, square } from './utils.js'

console.log('app.js is running!!!! ');
console.log(square(4));
console.log(add(1, 3));
console.log(subtract(1, 3)); */

import isSenior, { isAdult, canDrink} from './person.js'
console.log(isAdult(17));
console.log(isAdult(18));
console.log(canDrink(18));
console.log(canDrink(20));
console.log(canDrink(21));
console.log('isSenior: ', isSenior(64));