// get a reference to the sms or call radio buttons
var checkedRadioBtn = document.querySelector('.billItemTypeRadio');
//get a reference to the add button
var radioBillAddBtnElem = document.querySelector('.radioBillAddBtn')

//get a reference to the sms and call totals
var callTotalTwoElem = document.querySelector('.callTotalTwo')
var smsTotalTwoElem = document.querySelector('.smsTotalTwo')
var twoTotalElem = document.querySelector('.totalTwo')
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

//create a variable that will keep track of the total bill
var callsTotalTwo = 0;
var smsesTotalTwo = 0;
var totalCostTwo = 0;


function radioBillTotal() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

    // var checkedRadioBtns = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value;
        // billItemType will be 'call' or 'sms'
        if (billItemType === 'call') {
            callsTotalTwo += 2.75;
            // totalCostTwo += 2.75;
        }

        else if (billItemType === 'sms') {
            smsesTotalTwo += 0.75;
            // totalCostTwo += 0.75;
        }

    }

//update the totals that is displayed on the screen.

totalCostTwo = callsTotalTwo + smsesTotalTwo;
//console.log(totalCostTwo);

callTotalTwoElem.innerHTML = callsTotalTwo.toFixed(2);
smsTotalTwoElem.innerHTML = smsesTotalTwo.toFixed(2);
twoTotalElem.innerHTML = totalCostTwo.toFixed(2);

if (totalCostTwo >= 50){
    // adding the danger class will make the text red
    twoTotalElem.classList.add("danger");
}
else if (totalCostTwo >= 30){
    twoTotalElem.classList.add("warning");
}




// if (totalCost >= 30 && totalCost < 50) {
//     totalOneElement.classList.add('warning');
//     // totalOneElement.classList.remove('danger'); 
// }

// else if (totalCost >= 50) {
//     totalOneElement.classList.add('danger');
//     // totalOneElement.classList.remove('warning'); 

// } if(totalCost < 30) {
//     totalOneElement.classList.remove('danger');
//     // totalOneElement.classList.remove('warning'); 
// }
}
radioBillAddBtnElem.addEventListener('click', radioBillTotal);