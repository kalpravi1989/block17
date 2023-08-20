// Before you begin coding, be sure that you:
// a. Cleaned up the coffee_data.js file
// b. Connect the coffee_data.js file to this index.js file.
const coffeeData=require("./coffee_data_starter");

// Prompt 2:
// Print an array of all the drinks.
console.log(coffeeData);
console.table(coffeeData);
const allDrinkname=coffeeData.map(items=>items.name);  //to get all drink name
console.log(allDrinkname);                 //print all drink name


// Prompt 3
// Print an array of drinks that cost 5 and under.

const drinkCostUnder5=coffeeData.filter(items=>items.price<=5);
console.table(drinkCostUnder5);
const drinknameCostUnder5=drinkCostUnder5.map(items=>items.name); //to get drink name that cost under or equal to 5
console.log(drinknameCostUnder5);


// Prompt 4
// Print an array of drinks that are priced at an even number.
const evenDrinkCost=coffeeData.filter(items=>items.price%2==0);
console.table(evenDrinkCost);
const evenDrinkname=evenDrinkCost.map(items=>items.name);
console.log(evenDrinkname);



// Prompt 5
// Print the total if you were to order one of every drink.
const drinkprice=coffeeData.map(items=>items.price);
const price=drinkprice.reduce((accumulator,currentvalue)=>accumulator+currentvalue);
console.log(price);



// Prompt 6
// Print an array with all the drinks that are seasonal.
const seasonalDrink=coffeeData.reduce((season,items)=>{
    if(items.seasonal===true){
          season.push(items.name);
    }
    return season;
},[]);
console.log(seasonalDrink);


// Prompt 7
// Print all the seasonal drinks with the words "with imported beans" after the item name.
// For example: "affogato with imported beans"

const ma=seasonalDrink.map(items=>items.concat(" with imported beans"));
console.log(ma);

const seasonalDrinknamewithSuffix=coffeeData.reduce((season,items)=>{
    if(items.seasonal===true){
         items.name=items.name.concat(" with imported beans");
          season.push(items);
    }else{
        season.push(items);
    }
    return season;
},[]);
console.table(seasonalDrinknamewithSuffix);