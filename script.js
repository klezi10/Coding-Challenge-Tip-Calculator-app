const billValue = document.getElementById('bill-value');
const buttons = document.querySelectorAll('.tip-btns');
const resetBtn = document.getElementById('reset-btn');
const dollarTip = document.querySelector('.dollar-tip');
const dollarTotal = document.querySelector('.dollar-total');
const customTip = document.getElementById('custom');
const numberOfPeople = document.getElementById('people-value');
const numberOfPeopleError = document.getElementById('number-people-error')
resetBtn.classList.add('reset-btn-disabled');

// ================TIP BUTTONS =====================

for (const button of buttons) {
  button.addEventListener('click', calculate);
}

function calculate(event) {
  event.preventDefault();
  resetBtn.classList.remove('reset-btn-disabled');
  let tip = (billValue.value * parseInt(event.target.value)) / 100;
  let totalBill = tip + parseInt(billValue.value);

  dollarTip.textContent = `$${parseFloat(tip).toFixed(2)}`;
  dollarTotal.textContent = `$${parseFloat(totalBill).toFixed(2)}`;

  splitCheck(tip, totalBill);
}

function splitCheck(tip, totalBill) {
  numberOfPeople.addEventListener('change', (event) => {
    event.preventDefault();

    if (event.target.value === "0") {
      numberOfPeopleError.textContent = `Can't be zero`
      numberOfPeopleError.classList.add('errorMsg')
    } else {
      let newTip = tip / numberOfPeople.value;
    let newTotalBill = totalBill / numberOfPeople.value;
    dollarTip.textContent = `$${parseFloat(newTip).toFixed(2)}`;
    dollarTotal.textContent = `$${parseFloat(newTotalBill).toFixed(2)}`;
      if (numberOfPeopleError) {
        numberOfPeopleError.textContent = "";
      }
    }
  });
}

// ================= CUSTOM TIP ==============

customTip.addEventListener('keyup', (event) => {
  calculate(event);
});

// =================== RESET BTN=============

if (billValue != '') {
  resetBtn.disabled = false;
} else {
  resetBtn.disabled = true;
}

resetBtn.addEventListener('click', () => {
  billValue.value = '';
  dollarTip.textContent = '$0.00';
  dollarTotal.textContent = '$0.00';
  resetBtn.classList.add('reset-btn-disabled');
  numberOfPeople.value = '';
  customTip.value = '';
});
