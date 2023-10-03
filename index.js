//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');


//Create a function to initialize app
function init() {
    inquirer
        // Create an array of questions for user input
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter your name?',
            },
            {
                type: 'input',
                name: 'username',
                message: 'Enter your GitHub username?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email address?',
            },
            {
                type: 'input',
                name: 'title',
                message: 'Enter the name of your project?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please write a short description of your project:',
            },
            {
                type: 'list',
                name: 'license',
                message: 'What kind of license should your project have?',
                choices: ['Apache 2.0', 'GNU 3.0', 'MIT', 'None']
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What command should be run to install dependencies?',
                default: 'npm i',
            },
            {
                type: 'input',
                name: 'test',
                message: 'What command should be run to run tests?',
                default: 'npm test',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What does the user need to know about using the repo?',
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'How can the user contribute to the repo?',
            },
            
        ])

        // TODO: Create a function to write README file
        .then((data) => {
        let readmeContent = markdown(data)
        
        fs.writeFile('README.md', readmeContent, (err) => {
            if (err) {
                console.log(err);
            }else{
                console.log('Generating your README File...');
            }
        });
    });
};
//Function call to initialize app
init();
