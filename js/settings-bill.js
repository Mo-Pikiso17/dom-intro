// get a reference to the sms or call radio buttons
var checkedRadioBtn = document.querySelector('.billItemTypeWithSettings');

//get reference for total settings
var callTotalSet = document.querySelector('.callTotalSettings')
var smsTotalSet = document.querySelector('.smsTotalSettings')
var totalSet = document.querySelector('.totalSettings')

// get refences to all the settings fields
var callCostField = document.querySelector('.callCostSetting')
var smsCostField = document.querySelector('.smsCostSetting')
var warningLevelField = document.querySelector('.warningLevelSetting')
var criticalLevelField = document.querySelector('.criticalLevelSetting')

//get a reference to the add button
var addButtonSa = document.querySelector('.settingsBtn');

//get a reference to the 'Update settings' button
var updateSetBtn = document.querySelector('.updateSettings')

// create variables that will keep track of all the settings
var callTotalSets = 0;
var smsTotalSets = 0;
var warningLevelSet = 0;
var criticalLevelSet = 0;

// create variables that will keep track of all three totals.
var callsTotals = 0;
var smsesTotals = 0;
var totalCosts = 0;

//add an event listener for when the 'Update settings' button is pressed
//add an event listener for when the add button is pressed

// updateSetBtn.addEventListener('click', updateSettingsTotal);
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

function updateSettingsTotal () {
    callTotalSets = Number(callCostField.value);
    smsTotalSets = Number(smsCostField.value);
    warningLevelSet = Number(warningLevelField.value);
    criticalLevelSet = Number(criticalLevelField.value);

    updateClassList()
}
updateSetBtn.addEventListener('click', updateSettingsTotal);


function radioBillSettings() {
    // var radioBtns = document.querySelector("input[name='billItemTypeTwo']:checked");
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn){
        if(totalCosts < criticalLevelSet) {
        // billItemType will be 'call' or 'sms'
        if (checkedRadioBtn.value === 'call') {
            callsTotals += callTotalSets;
            totalCosts += callTotalSets;
        }

        else if (checkedRadioBtn.value === 'sms') {
            smsesTotals += smsTotalSets;
            totalCosts += smsTotalSets;
        }

    }
}

callTotalSet.innerHTML = callsTotals.toFixed(2);
smsTotalSet.innerHTML = smsesTotals.toFixed(2);
//totalCosts = callsTotals + smsesTotals;
totalSet.innerHTML = totalCosts.toFixed(2);

updateClassList()

}




function updateClassList(){
    if (totalCosts >= criticalLevelSet){
        // adding the danger class will make the text red
        totalSet.classList.add("danger");
        totalSet.classList.remove("warning");
    }
    else if (totalCosts >= warningLevelSet){
        totalSet.classList.add("warning");
        totalSet.classList.remove("danger");
    }
    
    if (totalCosts < criticalLevelSet) {
        totalSet.classList.remove("danger");
        // totalSet.classList.remove("warning");
        
    }
}

addButtonSa.addEventListener('click', radioBillSettings);