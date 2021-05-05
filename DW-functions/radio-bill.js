function radioBillsBtn(){

var radioCallTotal= 0;
var radioSmsTotal = 0;

function radioBillTotals(checkedRadioBtn) {
    
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn
        
        if (billItemType === 'call') {
            radioCallTotal += 2.75;
        }

        else if (billItemType === 'sms') {
            radioSmsTotal  += 0.75;
        }

    }

}


function getRadioCallsCost(){
    return radioCallTotal;
}


function getRadioSmsCost(){
    return radioSmsTotal;
}


function getRadioTotalCost(){
    return radioCallTotal + radioSmsTotal;
}


function radioClassname(){
    if (getRadioTotalCost() >= 30 &&  getRadioTotalCost() < 50){
        return "warning";
    }

    if (getRadioTotalCost() >= 50 ){
        return "danger";
    }
}




    return{
        getRadioCallsCost,
        getRadioSmsCost,
        getRadioTotalCost,
        radioClassname,
        radioBillTotals
    }
    
}

