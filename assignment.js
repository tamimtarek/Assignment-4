

// function calculateMoney(ticketSale){
//     if(ticketSale < 0){
//         return "Ticket amount must be positive number";
//     }
//     else{
//         totalTicketAmount = ticketSale * 120;
//         housekeeper = 1 * 500;
//         lunch = 8 * 50;
//         totalCost = housekeeper + lunch;;
//         remainingAmount = totalTicketAmount - totalCost;
//         return remainingAmount;
//     }
    
// }




// function checkName(name){
//     if(typeof name !=="string" ){
//         return "invalid";
//     }
//     else{
//         if(name.endsWith("a") || name.endsWith("y") || name.endsWith("i") || name.endsWith("e") || name.endsWith("o") || name.endsWith("u") || name.endsWith("w")){
//             return "Good Name";
//         }
//         else if(name.endsWith("A") || name.endsWith("Y") || name.endsWith("I") || name.endsWith("E") || name.endsWith("O") || name.endsWith("U") || name.endsWith("W")){
//             return "Good Name";
//         }
//         else{
//             return "Bad Name";
//         }
//     }
// }




// function deleteInvalids(array){
//     if(!Array.isArray(array)){
//         return "Please provide an array";
//     }
//     const finalArray = [];
//     for(let i = 0; i <array.length; i++){
//         if(typeof array[i] === 'number' && !isNaN(array[i])){
//             finalArray.push(array[i]);
//         }
//     }
//     return finalArray;
// }



// function password(obj){
//     if(!obj.name || !obj.birthYear || !obj.siteName || !Number.isInteger(obj.birthYear) || obj.birthYear.toString().length !== 4){
//         return "Invalid";
//     }
//     const web = obj.siteName;
//     const websiteName = web.charAt(0).toUpperCase()+web.slice(1);
//     const userName = obj.name;
//     const birthYear = obj.birthYear;
//     const finalPassword = websiteName +"#"+userName+"@"+birthYear;
//     return finalPassword;
// }






function monthlySavings(arr , livingCost) {
    if(!Array.isArray(arr) || typeof livingCost !== "number"){
        return "invalid input ";
    }
    let income = 0;
    let tex = 0;
    let cost = 0;
    let savings = 0;
    for(const payment of arr){
        if(payment >= 3000){
            tex = payment - (payment*0.2);
        }
        else{
            income = income + payment;
        }
        
    }
    income = income + tex;
    cost = cost + livingCost;
    savings = income - cost;
    if(savings < 0){
        return "Earn More";
    }
    return savings;
}

console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400));
console.log(monthlySavings([ 1000 , 2000 , 3000, 3000 ] , 5400));
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
console.log(monthlySavings(100, [ 900 , 2700 , 3400]));