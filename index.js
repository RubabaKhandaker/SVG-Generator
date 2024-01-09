// importing fs and inquirer, shapes.js
const fs = require('fs');
const inquirer = require('inquirer');
const {Square, Triangle, Circle} = require('./lib/shapes');


// promt questions 

inquirer.prompt([

    {
      type: 'input',
      name: 'typeText',
      message: 'What would you like your logo to say? (MAX 3 chars)',
    },

    {
        type: 'list',
        name: 'typeShape',
        message: 'What shape would you like your logo to be?',
        choices: ['Square', 'Triangle', 'Circle'],
      },

    {
      type: 'input',
      name: 'colourText',
      message: 'What colour would you like your text to be?',
      default: '',
    },

    {
      type: 'input',
      name: 'colourShape',
      message: 'What colour would you like your shape to be?',
      default: '',
    },

  ])