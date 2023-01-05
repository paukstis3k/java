const attackBtn = document.querySelector("#attack-btn");

const defendBtn = document.querySelector("#defend-btn");

const healBtn = document.querySelector("#heal-btn");

const resultDragonHealth = document.querySelector("#dragon-health");

const resultKnightHealth = document.querySelector("#knight-health");

const footer = document.querySelector(".footer");

const containerRight = document.querySelector(".container-right");

const containerLeft = document.querySelector(".container-left");

let currentRound = 1;

attackBtn.addEventListener("click", knightAttack);

defendBtn.addEventListener("click", knightDefend);

healBtn.addEventListener("click", displayCombatLog);

function getRandomNb(max) {
  const randomInt = Math.ceil(Math.random() * max);
  return randomInt;
}

resultDragonHealth.textContent = "200";
function knightAttack() {
  const attackDragonDamage = getRandomNb(10);
  resultDragonHealth.textContent =
    Number(resultDragonHealth.textContent) - attackDragonDamage;
  dragonAttack(attackDragonDamage);
}

resultKnightHealth.textContent = "100";

function dragonAttack(attackDragonDamage) {
  const knightAttackDamage = getRandomNb(20);
  resultKnightHealth.textContent =
    Number(resultKnightHealth.textContent) - knightAttackDamage;
  displayCombatLog(attackDragonDamage,knightAttackDamage);
}

function isknightDefend() {
  let knightDefend = true;
  dragonAttack();
  if ((attackDragonDamage = 0)) {
    displayCombatLog();
  } else {
    dragonAttack(attackDragonDamage);
  }
}

function displayCombatLog(attackDragonDamage, knightAttackDamage) {
  footer.style.display = "block";
  const logContainer = document.createElement("div");

  const logHeading = document.createElement("h2");
  logHeading.textContent = "Round-" + currentRound;
  currentRound++;
  const knightInfo = document.createElement("p");
  knightInfo.textContent = `Knight attacks and deals ${getRandomNb(
    10
  )} damage.`;

  const dragonInfo = document.createElement("p");

  dragonInfo.textContent = `Dragon attacks and deals ${getRandomNb(
    20
  )} damage.`;

  footer.append(logContainer);

  logContainer.append(logHeading, knightInfo, dragonInfo);

  areTheyAlive(attackDragonDamage, knightAttackDamage);

  console.log(attackDragonDamage, knightAttackDamage);
}

function areTheyAlive(attackDragonDamage, knightAttackDamage) {
  if (
    resultKnightHealth.textContent > 0 &&
    resultDragonHealth.textContent <= 0
  ) {
    containerLeft.style.display = "none";
  } else if (
    resultKnightHealth.textContent < 0 &&
    resultDragonHealth.textContent >= 0
  ) {
    containerRight.style.display = "none";
  }
}