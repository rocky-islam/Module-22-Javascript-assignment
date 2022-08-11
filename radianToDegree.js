//Problem 1

function radianToDegree(radian){
    if(typeof radian !=='number'){
        return 'please enter a number'
    }
    else{
        //Radian to Degree formula =radian*(180/PI)
        let pai = Math.PI;
        let calculateDegree = radian * (180 / pai);
        let degree = calculateDegree.toFixed(2);
        return degree;
    }
}

let degreeIs=radianToDegree(199);
console.log(degreeIs);
