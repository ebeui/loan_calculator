it("should calculate the monthly rate correctly", function () {
  let values = {
    loanAmount: 15000,
    loanYears: 3,
    loanRate: 5,
  };
  expect((calculateMonthlyPayment(values))).toEqual("449.56");
});

it("should return a result with 2 decimal places", function () {
  let values = {
    loanAmount: 30000,
    loanYears: 10,
    loanRate: 7,
  };
  expect((calculateMonthlyPayment(values))).toEqual("348.33");
});

/// etc
