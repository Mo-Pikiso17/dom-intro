function billWithSettings(){

    // These variables start counting from zero
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;
    var callCostTotal = 0;
    var smsCostTotal = 0;

    //set
    function setCallCost(callCost){
        theCallCost = callCost;
    }

    //get and retun
    function getCallCost(){
        return theCallCost;
    }

    //set
    function setSmsCost(smsCost){
        theSmsCost = smsCost;
    }

    //get and return
    function getSmsCost(){
        return theSmsCost;
    }

    //set
    function setWarningLevel(warningLevel){
        theWarningLevel = warningLevel;
    }
    
    //get and return
    function getWarningLevel(){
        return theWarningLevel;
    }

    //set
    function setCriticalLevel(criticalLevel){
        theCriticalLevel = criticalLevel;
    }

    //get and return
    function getCriticalLevel(){
        return theCriticalLevel;
    }

    function makeCall(){

        if(!reachedCriticalLevel()){
        //when making a call it will increment total call cost.
        callCostTotal += theCallCost;
        }
    }

    function sendSms(){

        if(!reachedCriticalLevel()){
            smsCostTotal += theSmsCost;
        }
        
    }

    function getTotalCost(){
        return callCostTotal + smsCostTotal;

    }

    function getTotalCallCost(){
        // to get the total call cost just return the call cost.
        return callCostTotal;
    }

    function getTotalSmsCost(){
        return smsCostTotal;
    }

    function reachedCriticalLevel(){

        if(getTotalCost() >= getCriticalLevel()){

            return "critical";
        }
        
    }

    function totalClassName(){

        if(reachedCriticalLevel()){
            return "danger";
        }
        
        
        if (getTotalCost() >= getWarningLevel()){
        return "warning";
    }
}

function callAndSms (checkedRadioBtn){
   
        // billItemType will be 'call' or 'sms'
        if (checkedRadioBtn === 'call') {
            makeCall() 
        }

        else if (checkedRadioBtn === 'sms') {
            sendSms()
        }
}

    return{
        callAndSms,
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName,
        reachedCriticalLevel,
    }
}