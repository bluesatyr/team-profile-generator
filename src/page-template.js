

const generateCards = teamData => {
  // text of all cards to be added to page html
  let cardsHTML = '';
  for (let i = 0; i < teamData.length; i++) {
    const teamMember = teamData.shift();
    // get role specific info for cards
    switch (teamMember.getRole()) {
      case 'Manager':
        var roleInfo = `Office ${teamMember.getOffice()}`;
        var roleIcon = "fas fa-crown";
        break;
      case 'Engineer':
        var roleInfo = `GitHub: https://github.com/${teamMember.getGithub()}/`;
        var roleIcon = "fas fa-laptop-code";
        break;
      case 'Intern':
        var roleInfo = `School: ${teamMember.getSchool()}`;
        var roleIcon = "fas fa-user-graduate";
    };
    // create card using team data array.
    const card = `
    <div class="card">
      <div class="employee">
          <h2>${teamMember.getName()}</h2>
          <i class="${roleIcon}"></i><span class="role">${teamMember.getRole()}</span>
      </div>
      <div class="employee-info">
        <div class="employee-id">ID: ${teamMember.getId()}</div>
        <div class="email">${teamMember.getEmail()}</div>
        <div class="role-info">${roleInfo}</div>
      </div>
    </div>`;
    cardsHTML += card;
  };

  return cardsHTML;
}

//
const generateHTML = (teamData) => {
  console.log(teamData);
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
      <title>Our Team</title>
      <!-- Font Awesome -->
      <script src="https://kit.fontawesome.com/ab5ed30506.js"></script>
      <link rel="stylesheet" href="./test.css"> 
  </head>
  <body>
      <header>
          <div><h1>Our Team</h1></div>
      </header>
      <main>
          <div class="flex-container">
            ${teamData}
          </div>
      </main>
  </body>
  </html>
  `;
};

module.exports = generateHTML;