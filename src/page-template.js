

const generateCards = teamData => {
  // text of all cards to be added to page html
  let cardsHTML = '';
  const iterator = teamData.length;
  for (let i = 0; i < iterator ; i++) {
    let teamMember;
    if (teamData.length === 1){
        teamMember = teamData[0];
    } else {
        teamMember = teamData.shift();
    }
    // get role specific info for cards
    switch (teamMember.getRole()) {
      case 'Manager':
        var roleInfo = `Office: ${teamMember.getOffice()}`;
        var roleIcon = "fas fa-crown";
        break;
      case 'Engineer':
        var roleInfo = `GitHub: ${teamMember.getGithub()}`;
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
        <div class="email">email: ${teamMember.getEmail()}</div>
        <div class="role-info">${roleInfo}</div>
      </div>
    </div>`;
    cardsHTML += card;
  };
  return cardsHTML;
}

//
const generateHTML = (teamData) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
      <title>Our Team</title>
      <!-- Font Awesome -->
      <script src="https://kit.fontawesome.com/ab5ed30506.js"></script>
      <link rel="stylesheet" href="./style.css"> 
  </head>
  <body>
      <header>
          <div><h1>Our Team</h1></div>
      </header>
      <main>
          <div class="flex-container">
          ${generateCards(teamData)}
          </div>
      </main>
  </body>
  </html>
  `;
};

module.exports = generateHTML;