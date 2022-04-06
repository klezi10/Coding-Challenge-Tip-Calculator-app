const billValue = document.getElementById('bill-value');
const buttons = document.querySelectorAll('.tip-btns');
const resetBtn = document.getElementById('reset-btn');
const dollarTip = document.querySelector('.dollar-tip');
const dollarTotal = document.querySelector('.dollar-total');
const customTip = document.getElementById('custom');
const numberOfPeople = document.getElementById('people-value');
const numberOfPeopleError = document.getElementById('number-people-error')

resetBtn.classList.add('reset-btn-disabled');

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

    if (numberOfPeople.value === "0") {
      numberOfPeopleError.textContent = `Can't be zero`
      numberOfPeopleError.classList.add('errorMsg')
      numberOfPeople.style.border = '2px solid red';


    } else {
      let newTip = tip / Math.floor(numberOfPeople.value);
    let newTotalBill = totalBill / Math.floor(numberOfPeople.value);
    dollarTip.textContent = `$${newTip.toFixed(2)}`;
    dollarTotal.textContent = `$${newTotalBill.toFixed(2)}`;

      if (numberOfPeopleError) {
        numberOfPeopleError.textContent = "";
        numberOfPeople.style.border = 'none';
      }
    }
  });
}

customTip.addEventListener('keyup', (event) => {
  calculate(event);
});

resetBtn.addEventListener('click', () => {
  //manually resetting these values for firefox
  billValue.value = '';
  numberOfPeople.value = '';
  customTip.value = '';

  window.location.reload()

  //resetting without refreshing
  // dollarTip.textContent = '$0.00';
  // dollarTotal.textContent = '$0.00';
  
  
  // numberOfPeopleError.textContent = "";
  // numberOfPeople.style.border = 'none';
  // for (const button of buttons) {
  //   button.style.backgroundColor = 'hsl(183, 100%, 15%)';
  // }
  // resetBtn.classList.add('reset-btn-disabled');
});
