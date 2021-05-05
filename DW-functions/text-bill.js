
    function textBills(){
    var textCallTotal = 0;
    var textSmsTotal = 0;
    var textTotal = 0;
    
    function textBillTotal2(billTypeText){    

        var billTypeEntered = billTypeText.trim();
        
        if (billTypeEntered === "call"){
            textCallTotal += 2.75;
                textTotal += 2.75;
            }
            
        else if (billTypeEntered === "sms"){
            textSmsTotal += 0.75;
                textTotal += 0.75;
            }
        
    }


    // get and return
    function getTextCallTotal(){
        return textCallTotal;

    }

    function getTextSmsTotal(){
        return textSmsTotal;
    }

    function getTextTotalCost(){
        return textTotal;
    }


function textClassname(){
    if (getTextTotalCost() >= 30 && getTextTotalCost() < 50){
        return "warning";
    }

    if (getTextTotalCost() >= 50){
        return "danger";
    }
}


return{
    getTextCallTotal,
    getTextSmsTotal,
    textBillTotal2,
    textBills,
    getTextTotalCost,
    textClassname,
    
}

}