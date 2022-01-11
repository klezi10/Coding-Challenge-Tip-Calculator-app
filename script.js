const billValue = document.getElementById('bill-value');

const fivePercent = document.getElementById('five-percent');
const tenPercent = document.getElementById('ten-percent');
const fifteenPercent = document.getElementById('fifteen-percent');
const twentyFive = document.getElementById('twenty-five-percent');
const fifty = document.getElementById('fifty-percent');

const dollarTip = document.querySelector('.dollar-tip');
const dollarTotal = document.querySelector('.dollar-total');

fivePercent.addEventListener('click', calculateFive);

function calculateFive(event) {
  event.preventDefault();
  let tip = (billValue.value * parseInt(fivePercent.value)) / 100;
  let totalBill = tip + parseInt(billValue.value);

  console.log(fivePercent.value);
  console.log(tip);
  console.log(totalBill);
  dollarTip.textContent = `$${parseFloat(tip).toFixed(2)}`;
  dollarTotal.textContent = `$${parseFloat(totalBill).toFixed(2)}`;
}
