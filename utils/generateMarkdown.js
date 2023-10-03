// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadgeUrls = {
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'GNU 3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'None': '',
  };
  const badgeUrl = licenseBadgeUrls[license] || '';
  return badgeUrl;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinkUrls = {
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GNU 3.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'MIT': 'https://opensource.org/licenses/MIT',
    'None': '',
  };
  const linkUrl = licenseLinkUrls[license] || '';
  return linkUrl;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseInfo = {
    // You can include license information here
    'Apache 2.0': 'Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at\n\n' +
      'http://www.apache.org/licenses/LICENSE-2.0\n\n' +
      'Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.',
    'GNU 3.0': 'This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.\n\n' +
      'This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.\n\n' +
      'You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.',
    'MIT': 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\n' +
      'The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n' +
      'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',
    'None': '',
  };
  const information = licenseInfo[license] || '';
  return information;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const githubLink = `https://github.com/${data.username}`;
  const emailLink = `mailto:${data.email}`;

  // Get the license badge URL based on the selected license
  const licenseBadgeUrl = renderLicenseBadge(data.license);
  // Get the license link URL based on the selected license
  const licenseLinkUrl = renderLicenseLink(data.license);
  // Get the license information based on the selected license
  const licenseInformation = renderLicenseSection(data.license);

  // Replace placeholders in the template with actual user answers
  let readmeContent = `# ${data.title}
[![Github License](${licenseBadgeUrl})](${licenseLinkUrl})

## Project Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)`;
  


readmeContent += 
`

\n\n
## Installation
To install necessary dependencies, run the following command:

${data.installation}

`;
  // Append the user's answer for the "Usage" section
  readmeContent += `
  
## Usage
${data.usage}
`;

  // Append the user's answer for the "Contributing" section
  readmeContent += `
  
## License
This project is licensed under the ${data.license} license.\n\n
Copyright (c) ${new Date().getFullYear()} ${data.name}. All rights reserved.


${licenseInformation}
  `;

  // Append the user's answer for the "Contributing" section
  readmeContent += `
    
## Contributing
${data.contributing}
`;

  // Append the user's answer for the "Tests" section
  readmeContent += `
  
## Tests
To run tests, run the following command:
\`\`\`
${data.test}
\`\`\`
`;
  // Append the user's answer for the "Questions" section
  readmeContent += `
  
## Questions
If you have any questions about the repo, open an issue or contact me directly at [${data.email}](${emailLink}). You can find more of my work at [${data.username}](${githubLink}).
`;

  // Return the completed README content
  return readmeContent;
}

module.exports = generateMarkdown;
