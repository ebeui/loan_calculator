window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 100;
  document.getElementById("loan-years").value = 100;
  document.getElementById("loan-rate").value = 100;

  let values = {
    loanAmount: document.getElementById("loan-amount").value,
    loanYears: document.getElementById("loan-years").value,
    loanRate: document.getElementById("loan-rate").value,
  };

  calculateMonthlyPayment(values);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = {
    loanAmount: document.getElementById("loan-amount").value,
    loanYears: document.getElementById("loan-years").value,
    loanRate: document.getElementById("loan-rate").value,
  };

    let monthlyString = calculateMonthlyPayment(values);
    

    updateMonthly(monthlyString);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyRate = (values.loanRate / 12) / 100;

  let totalMonths = values.loanYears * 12;

  let monthlyPayment =
    (values.loanAmount * monthlyRate) / (1 -
    Math.pow(1 + monthlyRate, -totalMonths));

  let monthlyString = monthlyPayment.toFixed(2);
    return monthlyString;
  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerHTML = monthly;
}
