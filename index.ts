#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"



const currency: any = {
    USD: 1,    // base currency
    PKR: 280,
    INR: 74.57,
    EUR: 0.91,
    GBP: 0.76
}

let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: chalk.bgBlueBright.bold("Enter From currency"),
        type: "list",
        choices: ["USD", "PKR", "INR", "EUR", "GBP"]  
    },
    {
        name: "to",
        message:chalk.bgRedBright.italic ("Enter to currency"),
        type: "list",
        choices: ["USD", "PKR", "INR", "EUR", "GBP"]  
    },
    {
        name: "amount",
        message: chalk.bgGray("Enter Your Amount"),
        type: "number"
    }
]);

let fromAmount = currency[userAnswer.from]
let toAmount = currency[userAnswer.to]
let amount = userAnswer.amount
let baseAmount = amount / fromAmount           // USD base Currency
let convertedAmount =chalk.whiteBright (Math.round (baseAmount * toAmount));

console.log(chalk.white(convertedAmount));





