//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//array of questions for user input
function init() {

    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter project title',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Enter project description',
                name: 'description',
            },
            {
                type: 'input',
                message: 'Enter installation instructions',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'Enter project usage',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'Credits',
                name: 'credits',
            },
            {
                type: 'list',
                message: 'Pick a license from the list',
                choices: ['MIT', 'GNU', 'Apache', 'Mozilla'],
                name: 'license',
            },
            {
                type: 'input',
                message: 'Tests',
                name: 'test',
            },
            {
                type: 'input',
                message: 'How to contribute',
                name: 'contribute',
            },
            {
                type: 'input',
                message: 'What is your email?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is your GitHub profile URL?',
                name: 'github',
            },
        ])

        // TODO: Create a function to write README file

        .then((answers) => {
            const readmeFile = generateMarkdown(answers);
            fs.writeFile('README.md', readmeFile, (err) => {
                err ? console.error(err) : console.log('README file created!');
            });
        });
}

// Function call to initialize app
init()



