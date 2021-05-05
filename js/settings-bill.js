
var checkedRadioBtn = document.querySelector('.billItemTypeWithSettings');


var callTotalSet = document.querySelector('.callTotalSettings')
var smsTotalSet = document.querySelector('.smsTotalSettings')
var totalSet = document.querySelector('.totalSettings')


var callCostField = document.querySelector('.callCostSetting')
var smsCostField = document.querySelector('.smsCostSetting')
var warningLevelField = document.querySelector('.warningLevelSetting')
var criticalLevelField = document.querySelector('.criticalLevelSetting')


var addButtonSa = document.querySelector('.settingsBtn');

var updateSetBtn = document.querySelector('.updateSettings')

var callTotalSets = 0;
var smsTotalSets = 0;
var warningLevelSet = 0;
var criticalLevelSet = 0;


var callsTotals = 0;
var smsesTotals = 0;
var totalCosts = 0;

var billWithSettingsInsta = billWithSettings ();

function updateSettingsTotal () {
    billWithSettingsInsta.setCallCost(Number(callCostField.value));
    billWithSettingsInsta.setSmsCost(Number(smsCostField.value));
    billWithSettingsInsta.setWarningLevel(Number(warningLevelField.value));
    billWithSettingsInsta.setCriticalLevel(Number(criticalLevelField.value));
    billWithSettingsInsta.reachedCriticalLevel();
}
updateSetBtn.addEventListener('click', updateSettingsTotal);




function radioBillSettings() {
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn){

        billWithSettingsInsta.callAndSms(checkedRadioBtn.value)
}

callTotalSet.innerHTML = billWithSettingsInsta.getTotalCallCost().toFixed(2);
smsTotalSet.innerHTML = billWithSettingsInsta.getTotalSmsCost().toFixed(2);
totalSet.innerHTML = billWithSettingsInsta.getTotalCost().toFixed(2);

totalSet.classList.remove("warning")
totalSet.classList.remove("danger")
totalSet.classList.add(billWithSettingsInsta.totalClassName())

// updateClassList()

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