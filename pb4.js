//problem 4

function publicBusFare(number){
    if(typeof number !== 'number'){
        return 'Please Enter a number'
    }
    else{
        //calculate total bus and passenger
        let ourBus = number % 50;
        // Total mini bus and passenger
        let ourMiniBus = ourBus % 11;
        //remaining passenger
        let publicBusPrice = ourMiniBus * 250;
        return publicBusPrice;
    }
    
}

let totalPrice = publicBusFare(365);
console.log(totalPrice);
