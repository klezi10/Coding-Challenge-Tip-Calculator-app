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
  button.addEventListener('click', (event) => {
    event.preventDefault()
    button.style.backgroundColor = 'hsl(172, 67%, 45%)';
    calculate(event)
  });
}

function calculate(event) {
  resetBtn.classList.remove('reset-btn-disabled');
  let bill = Number(billValue.value)
  let tip = (bill * parseInt(event.target.value)) / 100;
  let totalBill = tip + bill;

  dollarTip.textContent = `$${tip.toFixed(2)}`;
  dollarTotal.textContent = `$${totalBill.toFixed(2)}`;

  splitCheck(tip, totalBill);
}

function splitCheck(tip, totalBill) {
  numberOfPeople.addEventListener('change', (event) => {
    event.preventDefault();

    if (event.target.value === "0") {
      numberOfPeopleError.textContent = `Can't be zero`
      numberOfPeopleError.classList.add('errorMsg')
      // numberOfPeople.classList.add('errorInput')


    } else {
      let newTip = tip / numberOfPeople.value;
    let newTotalBill = totalBill / numberOfPeople.value;
    dollarTip.textContent = `$${newTip.toFixed(2)}`;
    dollarTotal.textContent = `$${newTotalBill.toFixed(2)}`;
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
  
  numberOfPeople.value = '';
  customTip.value = '';
  numberOfPeopleError.textContent = "";
  for (const button of buttons) {
    button.style.backgroundColor = 'hsl(183, 100%, 15%)';
  }
  resetBtn.classList.add('reset-btn-disabled');
});
