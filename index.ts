#! /usr/bin/env node

// import inquirer module

import inquirer from "inquirer";

const answers: {
  Sentence: string;
} = await inquirer.prompt([
  {
    name: "Sentence",
    type: "input",
    message: "Enter your sentence to count the word.",
  },
]);
// using trim and split method for removing white spaces and making an array of words
const words = answers.Sentence.trim().split(" ");
// print the array of words to console
console.log(words);

console.log(`Your sentence word count is ${words.length}`);
