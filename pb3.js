//Problem 3

function oilPrice(diesel, petrol, octane) {
    if(typeof diesel !== 'number' || typeof petrol !== 'number' || typeof octane !== 'number'){
        return 'please enter number'
    }
    else{
        //oil per litter price
        let dieselPerLitter = 114;
        let petrolPerLitter = 130;
        let octanePerLitter = 135;

        let dieselPrice = diesel * dieselPerLitter;
        let petrolPrice = petrol * petrolPerLitter;
        let octanePrice = octane * octanePerLitter;

        //Calculate Total price
        let totalPrice = dieselPrice + petrolPrice + octanePrice;
        return totalPrice;
    }
    
    
}

let price = oilPrice(0,2,3);
console.log(price);

