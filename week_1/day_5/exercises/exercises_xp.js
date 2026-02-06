// exircice 1
//I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
// exercise 2
function displayStudentInfo(objUser){
    const { first, last } = objUser;
    return `Your full name is ${first} ${last}`;
  }
  
  displayStudentInfo({ first: 'Elie', last: 'Schoppik' });
  // 'Your full name is Elie Schoppik'
//exercice 3
//using methods taught in class
const users = { user1: 18273, user2: 92833, user3: 90315 };
const usersArray = Object.entries(users);
console.log(usersArray);
// ➞ [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

//Modify the outcome of part 1
const updatedUsers = usersArray.map(([user, id]) => [user, id * 2]);
console.log(updatedUsers);
// ➞ [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

//exercise 4
/*class Person définit une classe new Person('John') crée une instance de cette classe.
typeof en JavaScript retourne :
"object" pour les objets et instances de classes
Même si Person est une classe, son instance member est un obje*/


//exercise 5
//option 1 : this est utilisé avant super() → interdit en ES6
 //La seule option correcte est :Option 2

class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

//option 3:name n’existe pas dans le constructeur (size seulement est passé)
//option 4 : this est utilisé avant super() → interdit

//exercise 6

/* 1---> [2] === [2]  // ❌ false  [2] et [2] sont deux tableaux différents en mémoire, donc false.
          {} === {}    // ❌ false {} et {} sont deux objets différents, donc false.*/


//2-What is, for each object below, the value of the property number and why?

//object1.number = 4 modifie l’objet référencé par object1, object2 et object3 object4 reste indépendant avec number = 5

console.log(object2.number) // 4
console.log(object3.number) // 4
console.log(object4.number) // 5

 //1- class Animal


 class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
  }

  //2- class Mamal
  class Mammal extends Animal {
    sound(animalSound) {
      return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
  }
  //3-  objet farmerCow

  const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
  console.log(farmerCow.sound('Moooo'));
// ➞ "Moooo I'm a cow, named Lily and I'm brown and white"




  
  
