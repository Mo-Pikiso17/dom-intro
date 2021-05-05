function calculateBill(){
var types;

function calBill(billItem) { 
    //split the string
    var billItems = billItem.split(",");
    types = billItem;
    var billTotal = 0;

    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItemString = billItems[i].trim();
        if (billItemString === "call"){
            billTotal += 2.75;
        }
        else if (billItemString === "sms"){
            billTotal += 0.75;
        }

    }
    return billTotal;
    }
    

    function calClassName(){

        if (calBill(types) >= 20 && calBill(types) < 30) {
            return 'warning';
            
        }
    
        else if (calBill(types) >= 30) {
            return 'danger';
        }

        return calBill(types);
    }

    return {
        calBill,
        calClassName
    }

}
