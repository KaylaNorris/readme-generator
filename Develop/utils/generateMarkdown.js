// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#descripion)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribute](#contribute)
  - [Test](#test)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This application is licensed under the ${data.license} license.

  ## How to Contribute
  ${data.contribute}

  ## Tests
  ${data.test}

  ## Questions
  For more information, please contact me on Github at [${data.github}](${data.github})<br/>
  or email me at [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
