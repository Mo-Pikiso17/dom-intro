
// var checkedRadioBtn = document.querySelector('.billItemTypeRadio');

var radioBillAddBtnElem = document.querySelector('.radioBillAddBtn')


var callTotalTwoElem = document.querySelector('.callTotalTwo')
var smsTotalTwoElem = document.querySelector('.smsTotalTwo')
var twoTotalElem = document.querySelector('.totalTwo')

var callsTotalTwo = 0;
var smsesTotalTwo = 0;
// var totalCostTwo = 0;


var radioInsta = radioBillsBtn();

function radioBillTotal() {

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

    // var checkedRadioBtns = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        radioInsta.radioBillTotals(checkedRadioBtn.value);
    }

//update the totals that is displayed on the screen.

// totalCostTwo = callsTotalTwo + smsesTotalTwo;
//console.log(totalCostTwo);

callTotalTwoElem.innerHTML = radioInsta.getRadioCallsCost().toFixed(2);
smsTotalTwoElem.innerHTML = radioInsta.getRadioSmsCost().toFixed(2);
twoTotalElem.innerHTML = radioInsta.getRadioTotalCost().toFixed(2);

twoTotalElem.classList.remove("warning")
twoTotalElem.classList.remove("danger")
twoTotalElem.classList.add(radioInsta.radioClassname())

}
radioBillAddBtnElem.addEventListener('click', radioBillTotal);