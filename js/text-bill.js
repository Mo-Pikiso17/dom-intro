// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector('.billTypeText');
//get a reference to the add button
var addToBtnBill = document.querySelector('.addToBillBtn');
//create a variable that will keep track of the total bill
var callTotalOne = document.querySelector('.callTotalOne');
var smsTotalOne = document.querySelector('.smsTotalOne');
var totalOneElement = document.querySelector('.totalOne');
//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

// var billTypeText = document.querySelector('.billyTypeEntered'); 
var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;

function textBillTotal(){

    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotal += 2.75;
        totalCost += 2.75;

    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
        totalCost += 0.75;
    }

  
    //update the totals that is displayed on the screen.
  
    var totalCost = callsTotal + smsTotal;
    console.log(totalCost);
    callTotalOne.innerHTML = callsTotal.toFixed(2);
    smsTotalOne.innerHTML = smsTotal.toFixed(2);
    totalOneElement.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 30 && totalCost < 50) {
        totalOneElement.classList.add('warning');
        totalOneElement.classList.remove('danger'); 
    }

    else if (totalCost >= 50) {
        totalOneElement.classList.add('danger');
        totalOneElement.classList.remove('warning'); 
        
    } if(totalCost < 30) {
        totalOneElement.classList.remove('danger');
        totalOneElement.classList.remove('warning'); 
    }
    
    
}

addToBtnBill.addEventListener('click', textBillTotal);
