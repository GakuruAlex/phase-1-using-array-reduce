const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries;

function reducer(){

totalBatteries=batteryBatches.reduce(arraySummation,0)

//Debug :console.log(totalBatteries);

return totalBatteries;
}

const arraySummation =(sum,currentValue)=>{
//Debug :console.log(`Sum is ${sum} and current value is ${currentValue}`);
sum += currentValue;

return sum;

}
reducer();