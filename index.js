const inquirer = require('inquirer');



inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'name',
    },

    {
      type: 'list',
      message: 'Where are you located?',
      name: 'framwork',
      choices: ['Chicago', 'Mississippi', 'New York'],
    },
 ])
 




  
  