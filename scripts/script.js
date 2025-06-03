const navLinks = document.querySelectorAll("nav a"); // descendant combninator
const sections = document.querySelectorAll("main > section");

TEAM_MAP = {
  1: "Dhangadhi FC",
  2: "Kathmandu Razyrs"
};

NSL_MATCH_DATA = [
  {
    "home": 1,
    "away": 2,
    "home_score": 1,
    "away_score": 0
  },
  {
    "home": 1,
    "away": 2,
    "home_score": 1,
    "away_score": 0
  },

];

A_LEAGUE_MATCH_DATA = [
  {
    "home": 1,
    "away": 2,
    "home_score": 1,
    "away_score": 0
  },
  {
    "home": 1,
    "away": 2,
    "home_score": 1,
    "away_score": 0
  },

];

function navSetup() {
  navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    clearSections();


    // the links' href attribs contain only the ids of various
    // sections (live sections)
    const targetID = link.getAttribute("href");
    const targetSection = document.querySelector(targetID);
    if (targetSection) {
      targetSection.style.display = "block";
    }
  });
});

}

function clearSections() {
  sections.forEach(section => {
      section.style.display ="none";
  });

}

function setup() {
  clearSections();
  document.querySelector("#live").style.display="block";
  navSetup();

  
  /*home page when clicked on logo*/
  const img=document.querySelector(".logo");
  img.addEventListener("click", (e) => {
    sections.forEach(section => {
      section.style.display = "none";
    });
    document.querySelector("#live").style.display="block";
  });
  /*live game*/

}


function renderMatch(target_id, team1, team2, score1, score2) {

  const match = document.createElement("p");
  match.textContent = `${team1} ${score1}-${score2} ${team2} `;
  document.getElementById(target_id).appendChild(match);
}




setup();
renderMatch("live", "Dhangadhi fc","Kathmandu Rayzrs","1-0");
renderMatch("nsl", "Dhangadhi fc","Kathmandu Rayzrs","1-0");
document.body.classList.remove("hidden");