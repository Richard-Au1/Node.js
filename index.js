// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            title: 'Title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            title: 'Description',
            message: 'Type in your description for your ReadMe file.',
        },
        {
            type: 'input',
            title: 'Installion Instructions',
            message: 'Please type if your application has installation instructions.',
        },
        {
            type: 'input',
            title: 'Usage Information',
            message: 'Please input the usage of your application.',
        },
        {
            type: 'input',
            title: 'Contribution guidelines',
            message: 'Please type how a user can contributes to your application.',
        },
        {
            type: 'input',
            title: 'Test Intructions',
            message: 'Please type how to test the application.',
        },
        {
            type: 'input',
            title: 'License',
            message: 'Which license did you use?',
        },
        {
            type: 'input',
            title: 'Github Username',
            message: 'Please enter your Github username.',
        },
        {
            type: 'input',
            title: 'Email Address',
            message: 'Please enter your email address.',
        }
    ])
};

// TODO: Create a function to write README file
fs.writeToFile('READme.md', process.argv[questions], (err) => 
err ? console.error(err) : console.log('Success!')
);
// TODO: Create a function to initialize app
const init = () =>{
    promptUser()
        .then((answers) => writeFile('Readme.md', generateReadme(answers)))
        .then(() => console.log('Successfully wrote to Readme.md'))
        .catch((err) => console.error(err));
};
// Function call to initialize app
init();
