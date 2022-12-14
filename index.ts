#!usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkanimation from "chalk-animation";
import { Console } from "console";

const sleep = () => {
    return new Promise((resolve) => {

        setTimeout((resolve), 2000);
    })
}

async function welcome() {
    let chalkTittle = chalkanimation.rainbow("Welcome to calculation")
    
    await sleep();
    chalkTittle.stop();
    let res =  chalkanimation.pulse(`
_____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|
`)
await sleep();
res.stop();

}

welcome();
async function askQuestion() {
    //await welcome();
   await inquirer
        .prompt([
            /* Pass your questions in here */
            {
                name: "Operator",
                message: "What operator do you want",
                choices: ["Addition", "Subtraction", "Multiplication", "Division"],
                type:"list",
            },
            {
                type: "number",
                name: "Num1",
                message: "Enter First Number"
            },
            {
                type: "number",
                name: "Num2",
                message: "Enter Second Number"
            }
        ])
        .then((answers) => {
            // Use user feedback for... whatever!!
            if (answers.Operator == "Addition") {
                console.log(`${answers.Num1} + ${answers.Num2} = ${answers.Num1 + answers.Num2}`);
            }
              else if (answers.Operator == "Subtraction") {
                console.log(`${answers.Num1}-${answers.Num2} = ${answers.Num1 - answers.Num2}`);
            } 
            else if (answers.Operator == "Multiplication") {
                console.log(`"Your answwer is:"${answers.Num1} * ${answers.Num2} = ${answers.Num1 * answers.Num2}`);
            } 
            else if (answers.Operator == "Division") {
                console.log(`${answers.Num1}/${answers.Num2} = ${answers.Num1 / answers.Num2}`);
            }
        })
}
// askQuestion();
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer
        .prompt({
            type:"input",
            name: "restart",
            message:"Do you want continue ? Press Y/N :"
        })
    }
     while (again.restart == "Y"|| again.restart == "y" || again.restart == "YES");
}
startAgain();