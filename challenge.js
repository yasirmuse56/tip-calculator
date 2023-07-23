const bill = 102; 
let tipPercentage;
if (bill >= 50 && bill <= 300) {
  tipPercentage = 0.15;
} else {
  tipPercentage = 0.20;
}
const tip = bill * tipPercentage;
const totalValue = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${totalValue}.`);