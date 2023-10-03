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
                name: 'Title',
                message: 'What is the title of your project?',
            },
            {
                type: 'input',
                name: 'Description',
                message: 'Type in your description for your ReadMe file.',
            },
            {
                type: 'input',
                name: 'Installion Instructions',
                message: 'Please type in the command you want to use to run the readme.',
                default: 'npm test'
            },
            {
                type: 'input',
                name: 'Usage',
                message: 'Please input the usage of the application.',
            },
            {
                type: 'input',
                name: 'Contribution',
                message: 'Please type how a user can contributes to your application.',
            },
            {
                type: 'input',
                name: 'Test',
                message: 'Please type how to test the application.',
            },
            {
                type: 'list',
                name: 'License',
                message: 'Which license did you use?',
                choices: ['Apache 2.0', 'GNU 3.0', 'MIT'],
            },
            {
                type: 'input',
                name: 'Github Username',
                message: 'Please enter your Github username.',
            },
            {
                type: 'input',
                name: 'Email Address',
                message: 'Please enter your email address.',
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
