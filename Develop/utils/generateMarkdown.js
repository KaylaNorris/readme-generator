// returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    'MIT': 'https://img.shields.io/badge/license-MIT-green',
    'GNU': 'https://img.shields.io/badge/license-GPL%20v3-blue',
    'Apache': 'https://img.shields.io/badge/License-Apache%202.0-yellow',
    'MPL 2.0': 'https://img.shields.io/badge/license-MPL%202.0-orange',
  };
  return badges[license] || '';
}




// returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenses = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GNU': 'https://www.gnu.org/licenses/gpl-3.0.html',
    'Apache': 'https://opensource.org/licenses/Apache-2.0',
    'MPL 2.0': 'https://opensource.org/licenses/MPL-2.0',
  };
  return licenses[license] || '';
}

// returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This application is under license. Click the badge to learn more.` || ''
}


// generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

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
  ${data.usage} </br>
  ![Screenshot 1](ENTER SCREENSHOT URL HERE)

  ## License
  [![License: ${data.license}](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)}) </br>
  ${renderLicenseSection(data)}

  ## How to Contribute
  ${data.contribute}

  ## Tests
  ${data.test}

  ## Questions
  For more information, please contact me on Github at [${data.github}](${data.github})</br>
  or email me at [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
