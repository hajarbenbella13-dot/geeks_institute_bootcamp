// ===== Exercise 1
 //1-Create a function call displayNumbersDivisible() that takes no parameter.
  function displayNumbersDivisible() {

 }

 //2-In the function, loop through numbers 0 to 500.

 function displayNumbers() {
    for (let i = 1; i <= 500; i++) {
        console.log(i);
    }
 }

 //3-Console.log all the numbers divisible by 23.

 function displayNumbers() {
    for (let i = 1; i <= 500; i++) {
        if (i % 23 === 0) {
            console.log(i);
        }

    }
 }


 //4-At the end, console.log the sum of all numbers that are divisible by 23.
 function displayNumbersDivisible1() {
    let sum = 0;
    let result = "";

    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0) {
            result += i + " ";
            sum += i;
        }
    }

    console.log("Outcome :", result.trim());
    console.log("Sum :", sum);
 };
 
 displayNumbersDivisible1();

 //5-Bonus: Add a parameter divisor to the function.
 function displayNumbersDivisible(divisor) {
    let sum = 0;
    let result = "";

    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            result += i + " ";
            sum += i;
        }
    }

    console.log("All numbers divisible by:", divisor);
    console.log("Sum:", sum);
 }

 displayNumbersDivisible(8);


 // ===== Exercise 2

 //1-Add the stock and prices objects to your js file.
 const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
 }

 const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
 }
 //2-Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
 let shoppingList = ["banana", "orange", "apple"];
 console.log(shoppingList);
 for (let items of shoppingList) {
    if (stock[items] > 0) {
        console.log(items + " is available");
    } else {
        console.log(items + " is out of stock");
    }
 }

 //3-Create a function called myBill() that takes no parameters.
 function myBill() { }
 //4-The function should return the total price of your shoppingList. In order to do this you must follow these rules:
 //The item must be in stock. (Hint : check out if .. in)
 function myBill() {
    let total = 0;
    for (let items of shoppingList) {
        if (stock[items] > 0) {
            total += prices[items];
            stock[items]--;
        }
    }
    return total;
 }
 //If the item is in stock find out the price in the prices object.
 console.log("Total price: " + myBill());
 //5-Call the myBill() function.

 console.log(myBill())
 //6-Bonus: If the item is in stock, decrease the item’s stock by 1
 console.log(stock);

 // ===== Exercise 3

 //1-Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
 function changeEnough(itemPrice, amountOfChange) {

 }

 //2-The first argument is a number (itemPrice) representing the price of the item.
 function changeEnough(itemPrice, amountOfChange) {
    if (itemPrice <= 0) {
        return false;
    } else {
        return true;
    }
}
 //3-The second argument is an array (amountOfChange) representing the amount of change in your pocket.
 function changeEnough(itemPrice, amountOfChange) {
    const [quarters, dimes, nickels, pennies] = amountOfChange;
    const totalChange = (quarters * 0.25) + (dimes * 0.10) + (nickels * 0.05) + (pennies * 0.01);
    return totalChange >= itemPrice;

 }
 //4-To illustrate:
 console.log(changeEnough(4.25, [25, 20, 5, 0])); // true



 // ===== Exercise 4
 //1-Create a function named hotelCost() that returns the total cost of the hotel stay.
 function hotelCost() {
    let number_nights;

    do {
        number_nights = prompt("How many nights would you like to stay in the hotel?");


        if (number_nights === null || number_nights.trim() === "" || isNaN(number_nights) || Number(number_nights) <= 0) {
            alert("Please enter a valid number of nights!");
        }
    } while (number_nights === null || number_nights.trim() === "" || isNaN(number_nights) || Number(number_nights) <= 0);

    number_nights = Number(number_nights);

    const cost_per_night = 140;
    const totalCost = number_nights * cost_per_night;

    return totalCost;
 }

 console.log("The total price of the hotel: $" + hotelCost());

 //2-Define a function called planeRideCost().
 function planeRideCost() {
    let destination;
    do {
        destination = prompt("What is your destination?");
        if (destination === null || destination.trim() === "" || !isNaN(destination)) {
            alert("Please enter a valid destination!");
        }
    } while (destination === null || destination.trim() === "" || !isNaN(destination)); {
        destination = destination.toLowerCase();
        let cost;
        switch (destination) {
            case "london":
                cost = 183;
                break;
            case "paris":
                cost = 220;
                break;
            default:
                cost = 300;
        }
        return cost;
    }

 }
 console.log("The price of the plane ride: $" + planeRideCost());

 //3-Create a function named rentalCarCost().
 function rentalCarCost() {
    let rent_car;
    do {
        rent_car = prompt("What is number of days they would like to rent the car?");

        if (rent_car === null || rent_car.trim() === "" || isNaN(rent_car) || Number(rent_car) <= 0) {
            alert("Please enter a valid number of days they would like to rent the car!");
        }
    } while (rent_car === null || rent_car.trim() === "" || isNaN(rent_car) || Number(rent_car) <= 0);

    rent_car = Number(rent_car);
    const cost_per_day = 40;
    if (rent_car > 10) {
        totalCost = (rent_car * cost_per_day) * 0.95;
    } else {
        totalCost = rent_car * cost_per_day;
    }
    return totalCost;
 }
 console.log("The price of the rental car: $" + rentalCarCost());

 //4-Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
 function totalVacationCost() {
    $
    const carCost = rentalCarCost();
    const hotelStayCost = hotelCost();
    const planeTicketsCost = planeRideCost();
    const totalCost = carCost + hotelStayCost + planeTicketsCost;
    return totalCost;
 }
 console.log("The total vacation cost: $" + totalVacationCost());


// ===== Exercise 5
  //view exercise5.html file
// ===== Exercise 6
   //view exercise6.html file
// ===== Exercise 7
   //view exercise7.html file







