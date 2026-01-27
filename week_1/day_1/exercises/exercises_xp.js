// ===== Exercise 1
const people = ["Greg", "Mary", "Devon", "James"];
 //1-Write code to remove “Greg” from the people array.
 people.shift()

 //2-Write code to replace “James” to “Jason”.
 people.splice(2,1,"Jason")

 //3-/Write code to add your name to the end of the people array.
 people.push("hajar")
 console.log(people)
 //4-Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
 let indexMary= people.indexOf("Mary")
 console.log("Index Marry is :",indexMary);
 //5-Write code to make a copy of the people array using the slice method.
let slice_name= people.slice(1,3)
 console.log(slice_name);
 //6-Write code that gives the index of “Foo”. Why does it return -1 ?
 let indexFoo= people.indexOf("Foo")
 console.log("Index Foo is :",indexFoo);
 //7-1-Create a variable called last which value is the last element of the array.
 const last=people[people.length-1]
 console.log("last element of the array :",last)
 //7-2What is the relationship between the index of the last element in the array and the length of the array?
    //Array indexes start at 0
    // Length counts elements starting from 1
    //Last element index = array length − 1
      // **********************//
 //Part II - Loops
 // Using a loop, iterate through the people array and console.log each person.
  for(peoples of people){
    console.log(peoples);
  }    
//Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
//Hint: take a look at the break statement in the lesson.
for(peoples of people){
    
    console.log("exit the loop after Devon :",peoples);
    if(peoples==="Devon"){

        break;
    }
  }  

                 /**************************************************************************** */
// ===== Exercise 2
 //Create an array called colors where the value is a list of your five favorite colors
 const colorsF =["Gren","Red","Yellow","Black","Orange"];
 //Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
 let count=1;
 for(colors of colorsF){
    console.log("My #",count, "choice is:",colors);
    count++;
 }

 //Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
 const suffixes = ["st", "nd", "rd", "th"]
 for(colors of colorsF ){
    let suffix = suffixes[count - 1] || "th";
    console.log("My #",count, suffix, "choice is:",colors);
    count++;
 }

                  /**************************************************************************** */

// ===== Exercise 3
 //Prompt the user for a number.
 let userInput = prompt("Please enter a number:");
 let number = Number(userInput);
 console.log("le numero entrer", number, "Type:", typeof number);
 //While the number is smaller than 10 continue asking the user for a new numbe
while (number < 10) {
    number = Number(prompt("Number is too small! Please enter a new number:"));
}

console.log("You entered:", number);


               /**************************************************************************** */


// ===== Exercise 4

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
//Console.log the number of floors in the building
 console.log(building.numberOfFloors)
 //Console.log how many apartments are on the floors 1 and 3.
 console.log(
    "Apartments on floor 1:", building.numberOfAptByFloor.firstFloor,
    "and floor 3:", building.numberOfAptByFloor.thirdFloor
  );
  
 //Console.log the name of the second tenant and the number of rooms he has in his apartment.
 console.log("name of the second tenant :",building.nameOfTenants[1],
       "and the number of rooms :",building.numberOfRoomsAndRent.dan[0]);
 //Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
 const sarahRent = building.numberOfRoomsAndRent.sarah[1];
 const danRent = building.numberOfRoomsAndRent.dan[1];
 const davidRent = building.numberOfRoomsAndRent.david[1];
 if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200; 
  }
  console.log("Dan's rent is now:", building.numberOfRoomsAndRent.dan[1]);
 
                 /**************************************************************************** */

 // ===== Exercise 5 

 //Create an object called family with a few key value pairs.

 const family={
    father: "abdel",
    mother: "fatima",
    son: "wassim",
    daughter: "chocho"
};
 

 //Using a for in loop, console.log the keys of the object.

 for(const Key in family){
    console.log(Key);
 };

 
 //Using a for in loop, console.log the values of the object.
 for(const Key in family){
    console.log(family[Key]);
 };

               /**************************************************************************** */

// ===== Exercise 6

 //Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
 const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  }
  let sentence = "";

for (const key in details) {
  
  sentence += `${key} ${details[key]} `;
}

console.log(sentence.trim());

 /**************************************************************************** */

// ===== Exercise 7
 //A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.

 const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

 const firstLetters = names.map(name => name[0]);
 firstLetters.sort();
 //Console.log the name of their secret society. The output should be “ABJKPS”

 const societyName = firstLetters.join("");

 console.log(societyName);
