// DEPOSIT BUTTON EVENT HANDLER
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function() {

   const depositNumber = getInputNumber("depositAmount");

   updateSpanText("currentDeposit", depositNumber);
   updateSpanText("currentBalance", depositNumber);
})



// WITHDRAW BUTTON EVENT HANDLER
const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function() {

   const withdrawNumber = getInputNumber("withdrawAmount");

   updateSpanText("currentWithdraw", withdrawNumber);
   updateSpanText("currentBalance", withdrawNumber * -1);
})


// GET INPUT NUMBER FUNCTION HERE
function getInputNumber(id) {
   const amount = document.getElementById(id).value;
   const number = parseFloat(amount);
   document.getElementById(id).value = "";
   return number;
}


// UPDATE SPAN TEXT FUNCTION
function updateSpanText(id, depositNumber) {
   const current = document.getElementById(id).innerText;
   const currentNumber = parseFloat(current);
   const total = depositNumber + currentNumber

   document.getElementById(id).innerText = total;
}
