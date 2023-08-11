/*
CHALLENGE #4
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
Your tasks:
Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).
Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
Example: The bill was 275, the tip was 41.25, and the total value 316.25.
Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂
*/

// code 1:  
const bill = 275;
let tip;
/* Write your code below. Good luck! 🙂 */

if (bill > 50 && bill < 300) {
    tip = (15 * bill / 100);
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
} else {
    tip = (20 * bill / 100);
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
}

// code2:
const bill1 = 275;
const tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
console.log(`The bill was ${bill1}, the tip was ${tip1}, and the total value ${bill1 + tip1}`);