let homeScore = document.getElementById("home-score");
let awayScore = document.getElementById("away-score");

let countHome = 0;
let countAway = 0;

// Functions for adding points to the home team
function addHome1() {
  countHome += 1;
  homeScore.textContent = countHome;
  winningTeam();
}

function addHome2() {
  countHome += 2;
  homeScore.textContent = countHome;
  winningTeam();
}

function addHome3() {
  countHome += 3;
  homeScore.textContent = countHome;
  winningTeam();
}

// Functions for adding points to the away team
function addAway1() {
  countAway += 1;
  awayScore.textContent = countAway;
  winningTeam();
}

function addAway2() {
  countAway += 2;
  awayScore.textContent = countAway;
  winningTeam();
}

function addAway3() {
  countAway += 3;
  awayScore.textContent = countAway;
  winningTeam();
}

// New game functionality (Resets the score to 0)
function newGame() {
  countHome = 0;
  countAway = 0;
  homeScore.textContent = countHome;
  awayScore.textContent = countAway;
  winningTeam();
}

// Function to highlight the winning team
function winningTeam() {
  if (
    Number.parseInt(homeScore.textContent) >
    Number.parseInt(awayScore.textContent)
  ) {
    home.classList.add("highlight");
    guest.classList.remove("highlight");
  } else if (
    Number.parseInt(awayScore.textContent) >
    Number.parseInt(homeScore.textContent)
  ) {
    guest.classList.add("highlight");
    home.classList.remove("highlight");
  } else {
    home.classList.remove("highlight");
    guest.classList.remove("highlight");
  }
}
