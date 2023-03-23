//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//array of questions for user input
function init() {

    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'Project title',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Project description',
                name: 'description',
            },
            {
                type: 'input',
                message: 'Table of contents',
                name: 'contents',
            },
            {
                type: 'input',
                message: 'Installation instructions',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'Usage',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'Credits',
                name: 'credits',
            },
            {
                type: 'input',
                message: 'License',
                name: 'license',
            },
            {
                type: 'input',
                message: 'Features',
                name: 'features',
            },
            {
                type: 'input',
                message: 'How to contribute',
                name: 'contribute',
            },
        ])

        // TODO: Create a function to write README file

        .then((answers) => {
            const readmeFile = init(answers);
            fs.writeFile('README.md', readmeFile, (err) => {
                err ? console.error(err) : console.log('README file created!');
            });
        });
}

// Function call to initialize app
init();

