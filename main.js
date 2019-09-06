class Ship {
  constructor(name, hitPoint, lostWhenHit) {
    this.name = name;
    this._hitPoint = hitPoint;
    this._lostWhenHit = lostWhenHit;
  }
}
const motherData = [1, "Mother Ship", 100, 9];
const defenseData = [5, "Defense Ship", 80, 10];
const attackData = [8, "Attack Ship", 45, 12];
const shipCollection = document.getElementById("shipCollection");
let shipArr = [];
const addShipsToArr = () => {
  shipArr.push(new Ship(motherData[1], motherData[2], motherData[3]));
  for (let i = 0; i < defenseData[0]; i++) {
    spaceShipArr.push(new Ship(defenseData[1], defenseData[2], defenseData[3]));
  }
  for (let i = 0; i < attackData[0]; i++) {
    spaceShipArr.push(new Ship(attackData[1], attackData[2], attackData[3]));
  }
  return shipArr;
};
const makeInnerHTML = () => {
  let HTML = "";
  for (let i = 0; i < shipArr.length; i++) {
    HTML += `<div class="${shipArr[i].name.toLowerCase()}"><h3> ${
      shipArr[i].name
    } <br>${shipArr[i].hitPoints}</h3></div>`;
  }
  return HTML;
};
const getRandomNumber = () => {
  return Math.floor(Math.random() * shipArr.length);
};
const endGame = () => {
  if (
    shipArr.map(e => e.name).indexOf("Mother Ship") == -1 ||
    shipArr.length === 0
  ) {
    alert("You killed all of the alien ships!");
    addShipsToArr();
    shipCollection.innerHTML = makeInnerHTML();
  }
};

const reset = () => {
  spaceShipArr = [];
  addShipsToArr();
  shipCollection.innerHTML = makeInnerHTML();
};

addShipsToArr();
shipCollection.innerHTML = makeInnerHTML();
const shoot = () => {
  let shotShip = getRandomNumber();
  shipArr[shotShip].hitPoints -= shipArr[shotShip].pointsLostOnHit;
  if (shipArr[shotShip].hitPoints <= 0) {
    shipArr.splice(shotShip, 1);
    shipCollection.innerHTML = makeInnerHTML();
  } else {
    shipCollection.innerHTML = makeInnerHTML();
  }
  endGame();
};

document.getElementById(
  "game-info"
).innerHTML += `<p>defenceship1:  Hit Points Left:${pointsLeft} status:${status}</p>`;
