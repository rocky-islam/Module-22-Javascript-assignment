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
