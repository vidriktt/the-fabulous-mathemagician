import GameHelper from './GameHelper';
import {increaseByOne, sum} from './TestFunctions';
import '../css/index.css';

document.getElementById('end').style.display = 'none';

const helper = new GameHelper();
let userNum1 = -1;
let userNum2 = -1;
let answer = -1;
let counter = 0;
const startTime = Date.now();
newProblem();

function newProblem() {
  if (counter >= 3) {
    helper.end(startTime);
  }

  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  answer = helper.calculate(num1, num2);
  userNum1 = -1;
  userNum1 = -1;

  document.getElementById('num1').innerHTML = `${num1}`;
  document.getElementById('num2').innerHTML = `${num2}`;

  counter++;
}

document.addEventListener('keyup', (event) => {
  const number = parseInt(event.key);

  if (isNaN(number)) return;
  if (number === answer) {
    document.getElementById('sum').value = '';
    newProblem();
  } else if (userNum1 === -1) {
    userNum1 = number;
  } else {
    userNum2 = number;
    if (parseInt('' + userNum1 + userNum2) === answer) {
      document.getElementById('sum').value = '';
      newProblem();
    }
  }
});

console.log(sum('0', '1', {c: '1'})); // eslint-disable-line no-console
console.log(sum('6', '7', {c: '13'})); // eslint-disable-line no-console
console.log(sum('0', '0', {c: '0'})); // eslint-disable-line no-console
console.log(increaseByOne('0', {b: '1'})); // eslint-disable-line no-console
console.log(sum('2', {b: '3'})); // eslint-disable-line no-console
