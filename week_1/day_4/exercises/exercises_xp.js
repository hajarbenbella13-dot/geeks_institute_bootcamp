// ===== Exercise 1

// #1.1 - (L'alerte affichera 3)=>inside the funcOne function 3/declares a local variable
// `const` signifie que la variable ne peut pas être réassignée.=> Réponse : Erreur, impossible de réassigner une constante.
/* #2.1 - funcThree()=>Alerte → dans la fonction funcThree 0/ funcTwo()=>Alerte → dans la fonction funcThree 5
Run funcThree() again:=>Alerte → dans la fonction funcThree 5
#2.2 - if const instead of let erreur lors de la réaffectation de la constante a.*/
/*#3.1 - funcFour()=>À présent, « a » existe globalement et équivaut à « hello ».
funcFive() =>inside the funcFive function hello*/
//4-1 - funcSix() => Alerte → inside the funcSix function test
//4-2 -with const instead of let => Alerte → inside the funcSix function test
//5-1 Alert → shows :in the if block 5 /utside of the if block 2
//5-2 with const instead of let => Alert → shows :in the if block 5 /utside of the if block 2


// ===== Exercise 2

 //1 Transform the winBattle() function to an arrow function.
 const winBattle = () => true;
//2 Create a variable called experiencePoints.
    let experiencePoints;
//3 Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
if (winBattle()){
    experiencePoints = 10;
} else {
    experiencePoints = 1;
}    
//4 Console.log the experiencePoints variable.
console.log(experiencePoints);
// ===== Exercise 3
const isString = (value) => typeof value === 'string';

// ===== Exercise 4

const sum = (a,b) => a + b;
sum(3,4);

// ===== Exercise 5

function prend_poids (poids){
    return poids *1000;

}
console.log("votre pois en gramme est: ",prend_poids(70),"g");

// ===== Exercise 6
 
const family = (num_children, partner_name, geographic, job) => 
    `You will be a ${job} in ${geographic}, and married to ${partner_name} with ${num_children} kids.`;

// Create a <p> and display
const p = document.createElement('p');
p.textContent = family(2, "Alice", "Paris", "Engineer");
document.body.appendChild(p);


// ===== Exercise 7
const nameInput = document.getElementById("name");
const btn = document.getElementById("btn");
const nav = document.getElementsByTagName("nav")[0];

btn.addEventListener("click", () => {
    const userName = nameInput.value.trim(); // remove extra spaces

    if(userName !== "") { // only greet if input is not empty
        const p = document.createElement("p");
        p.textContent = `Welcome ${userName} to our website!`;
        nav.appendChild(p);
    } else {
        alert("Please enter your name!");
    }
});



// ===== Exercise 8
function makeJuice(size) {
    // 1️⃣ Create an empty array to hold ingredients
    const ingredients = [];

    // 2️⃣ Inner function to add ingredients
    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3); // push ingredients into the array
    }

    // 3️⃣ Inner function to display the juice info
    function displayJuice() {
        const message = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
        const p = document.createElement("p");
        p.textContent = message;
        document.body.appendChild(p);
    }

    // 4️⃣ Add 6 ingredients by calling addIngredients twice
    addIngredients("apple", "banana", "orange");
    addIngredients("mango", "strawberry", "kiwi");

    // 5️⃣ Display the juice
    displayJuice();
}

// 6️⃣ Invoke the outer function in the global scope
makeJuice("large");
