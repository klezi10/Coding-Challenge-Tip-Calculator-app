const billValue = document.getElementById('bill-value');
const buttons = document.querySelectorAll('.tip-btns');
const resetBtn = document.getElementById('reset-btn');
const dollarTip = document.querySelector('.dollar-tip');
const dollarTotal = document.querySelector('.dollar-total');
const customTip = document.getElementById('custom');
const numberOfPeople = document.getElementById('people-value');

// ================TIP BUTTONS =====================

for (const button of buttons) {
  button.addEventListener('click', calculate);
}

function calculate(event) {
  // console.log(event.target.value);
  event.preventDefault();
  let tip = (billValue.value * parseInt(event.target.value)) / 100;
  let totalBill = tip + parseInt(billValue.value);

  dollarTip.textContent = `$${parseFloat(tip).toFixed(2)}`;
  dollarTotal.textContent = `$${parseFloat(totalBill).toFixed(2)}`;

  splitCheck(tip, totalBill);
}

function splitCheck(tip, totalBill) {
  numberOfPeople.addEventListener('keyup', (event) => {
    event.preventDefault();
    let newTip = tip / numberOfPeople.value;
    let newTotalBill = totalBill / numberOfPeople.value;
    dollarTip.textContent = `$${parseFloat(newTip).toFixed(2)}`;
    dollarTotal.textContent = `$${parseFloat(newTotalBill).toFixed(2)}`;
  });
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
  numberOfPeople.value = '';
});
