#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
async function welcome() {
    let title = chalkAnimation.karaoke(`\t----------------------------------------- \n\t      Welcome To Currency Converter\n\t----------------------------------------- \n`, 2);
    await new Promise((resolve) => {
        setTimeout(resolve, 1800);
    });
    title.stop();
}
await welcome();
const currency = {
    USD: 1, // US Dollar, Base Currency
    CHF: 0.90, // Swiss Franc
    EUR: 0.92, // Euro
    GBP: 0.79, // British Pound
    CAD: 1.36, // Canadian Dollar
    AUD: 1.51, // Australian Dollar
    NZD: 1.66, // New Zealand Dollar
    QAR: 3.64, // Qatari Riyal
    SAR: 3.75, // Saudi Arabian Riyal
    JPY: 155, // Japanese Yen
    INR: 83.54, // Indian Rupee
    PKR: 278.14 // Pakistani Rupee
};
let answer = await inquirer.prompt([
    {
        name: "from",
        message: chalk.hex('#7DF9FF')("Select From Currency: "),
        type: "list",
        choices: ["USD", "CHF", "EUR", "GBP", "CAD", "AUD", "NZD", "QAR", "SAR", "JPY", "INR", "PKR"]
    },
    {
        name: "to",
        message: chalk.hex('#7DF9FF')("Select To Currency: "),
        type: "list",
        choices: ["USD", "CHF", "EUR", "GBP", "CAD", "AUD", "NZD", "QAR", "SAR", "JPY", "INR", "PKR"]
    },
    {
        name: "amount",
        message: chalk.hex('#FFFD37')("Enter Your Amount:"),
        type: "number"
    }
]);
let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let amount = answer.amount;
let baseAmount = amount / fromAmount;
let convertAmount = baseAmount * toAmount;
let finalAmount = convertAmount.toFixed(2);
console.log(chalk.hex('#FF00FF')(`${amount} ${answer.from} in ${answer.to} equals to ${finalAmount} ${answer.to}`));
