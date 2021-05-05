var billTypeTextElem = document.querySelector('.billTypeText');
var addToBtnBill = document.querySelector('.addToBillBtn');

var callTotalOne = document.querySelector('.callTotalOne');
var smsTotalOne = document.querySelector('.smsTotalOne');
var totalOneElement = document.querySelector('.totalOne');

var textInsta = textBills();

function textBillTotal(){

    textInsta.textBillTotal2(billTypeTextElem.value);
  
    callTotalOne.innerHTML = textInsta.getTextCallTotal().toFixed(2);
    smsTotalOne.innerHTML = textInsta.getTextSmsTotal().toFixed(2);
    totalOneElement.innerHTML = textInsta.getTextTotalCost().toFixed(2);

    totalOneElement.classList.remove("warning")
    totalOneElement.classList.remove("danger")
    totalOneElement.classList.add(textInsta.textClassname())
}

addToBtnBill.addEventListener('click', textBillTotal);
