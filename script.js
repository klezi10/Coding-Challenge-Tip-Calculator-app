const billValue = document.getElementById('bill-value');
const buttons = document.querySelectorAll('.tip-btns');
const resetBtn = document.getElementById('reset-btn');
const dollarTip = document.querySelector('.dollar-tip');
const dollarTotal = document.querySelector('.dollar-total');
const customTip = document.getElementById('custom');

// const fivePercent = document.getElementById('five-percent');
// const tenPercent = document.getElementById('ten-percent');
// const fifteenPercent = document.getElementById('fifteen-percent');
// const twentyFive = document.getElementById('twenty-five-percent');
// const fifty = document.getElementById('fifty-percent');

// ================TIP BUTTONS =====================

for (const button of buttons) {
  button.addEventListener('click', calculate);
}

function calculate(event) {
  // console.log(event.target.value);
  let tip = (billValue.value * parseInt(event.target.value)) / 100;
  let totalBill = tip + parseInt(billValue.value);

  dollarTip.textContent = `$${parseFloat(tip).toFixed(2)}`;
  dollarTotal.textContent = `$${parseFloat(totalBill).toFixed(2)}`;
}

// ================= CUSTOM TIP ==============

customTip.addEventListener('keyup', (event) => {
  // console.log(event.target.value);
  calculate(event);
});

// =================== RESET BTN=============

// if (billValue === null) {
//   resetBtn.disabled = true;
// } else {
//   resetBtn.disabled = false;
// }

resetBtn.addEventListener('click', () => {
  billValue.value = '';
  dollarTip.textContent = '$0.00';
  dollarTotal.textContent = '$0.00';
  resetBtn.disabled = true;
});
