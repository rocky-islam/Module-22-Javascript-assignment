//Problem 1

function radianToDegree(radian) {
  if (typeof radian !== "number") {
    return "please enter a number";
  } else {
    //Radian to Degree formula =radian*(180/PI)
    let pai = Math.PI;
    let calculateDegree = radian * (180 / pai);
    let degree = calculateDegree.toFixed(2);
    return degree;
  }
}

let degreeIs = radianToDegree(199);
console.log(degreeIs);


//Problem 2

function isJavaScriptFile(string){
    if(typeof string !== 'string'){
        return "please type string"
    }
    else{
        let filename = string;
        //Check File
        let result = filename.endsWith(".js");
        return result;
    }
    
}
let file=isJavaScriptFile('image.jpg.js');
console.log(file);



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


//Problem 5

function isBestFriend (object1, object2){
    if(typeof object1 !== "object" || typeof object2 !== "object"){
        return "Please enter object";
    }
    else{

        if(object1.name == object2.friend && object2.name== object1.friend){
                return true;
            }
            else{
                return false;
                
            }
    }
}

let result = isBestFriend({ name: "doe", friend: "alex" }, {name: 'john', friend: 'doe'});
console.log(result);

