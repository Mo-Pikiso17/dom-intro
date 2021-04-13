// get a reference to the sms or call radio buttons
var radioBtns = document.querySelector('.billItemTypeWithSettings');
// get refences to all the settings fields
var callCostField = document.querySelector('.callCostSetting')
var smsCostField = document.querySelector('.smsCostSetting')
var warningLevelField = document.querySelector('.warningLevelSetting')
var criticalLevelField = document.querySelector('.criticalLevelSetting')
//get a reference to the add button
var addButton = document.querySelector('.button-primary');
// var radioBillAddBtnElems = document.querySelector('.radioBillAddBtn')

//get a reference to the 'Update settings' button
var updateSetBtn = document.querySelector('.updateSettings')

// create a variables that will keep track of all the settings
var callTotalSet = document.querySelector('callTotalSettings')
var smsTotalSet = document.querySelector('smsTotalSettings')
var totalSet = document.querySelector('.totalSettings')
// create a variables that will keep track of all three totals.
var callsTotals = 0;
var smsesTotals = 0;
var totalCosts = 0;
//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

function radioBillTotals() {
    var radioBtns = document.querySelector("input[name='billItemType']:checked");

    // var checkedRadioBtns = document.querySelector("input[name='billItemType']:checked");
    if (radioBtns){
        var billItemType = radioBtns.value;
        // billItemType will be 'call' or 'sms'
        if (billItemType === 'call') {
            callsTotals += 2.75;
            // totalCostTwo += 2.75;
        }

        else if (billItemType === 'sms') {
            smsesTotals += 0.75;
            // totalCostTwo += 0.75;
        }

    }

//update the totals that is displayed on the screen.

totalCosts = callsTotals + smsesTotals;
//console.log(totalCostTwo);

callTotalSet.innerHTML = callsTotals.toFixed(2);
smsTotalSet.innerHTML = smsesTotals.toFixed(2);
totalSet.innerHTML = totalCosts.toFixed(2);

// if (totalCosts >= 50){
//     // adding the danger class will make the text red
//     twoTotalElem.classList.add("danger");
// }
// else if (totalCosts >= 30){
//     twoTotalElem.classList.add("warning");
// }


}
addButton.addEventListener('click', radioBillTotals);