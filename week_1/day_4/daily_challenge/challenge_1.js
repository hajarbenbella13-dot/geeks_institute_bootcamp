
let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

displayGroceries();

    
const cloneGroceries = () => {
    let user = client; // copy of client
    let shopping =groceries;
    roceries.other.paid = false;

    shopping.totalPrice = "35$";
    client = "Betty";

    
    console.log("groceries:", groceries);
    console.log("shopping:", shopping);
    console.log("client:", client);
    console.log("user:", user);
};
cloneGroceries();
/*let shopping = groceries;
 Modifier totalPrice à 35$
 Oui, la modification apparaît aussi dans shopping.

 Modifier paid à false
 Oui, la modification apparaît aussi dans shopping.*/