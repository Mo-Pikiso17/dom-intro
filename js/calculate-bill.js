
var calculateBtn = document.querySelector('.calculateBtn');

var billTotalElement = document.querySelector('.billTotal');

var billStringField = document.querySelector('.billString')


var calInsta = calculateBill();

function calculateBtnClicked() { 


billTotalElement.innerHTML = calInsta.calBill(billStringField.value);
billTotalElement.classList.remove("warning")
billTotalElement.classList.remove("danger")
billTotalElement.classList.add(calInsta.calClassName())


}
calculateBtn.addEventListener('click', calculateBtnClicked);
