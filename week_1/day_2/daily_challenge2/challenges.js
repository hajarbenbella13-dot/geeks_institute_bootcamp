const userInput = prompt("several words");
const words = userInput.split(",").map(word => word.trim());

 
 let maxLength = 0;
 for (let word of words) {
     if (word.length > maxLength) {
         maxLength = word.length;
     }
 }
 console.log("*".repeat(maxLength + 4));

 for (let word of words) {
    const spaces = " ".repeat(maxLength - word.length);
    console.log(`* ${word}${spaces} *`);
}
console.log("*".repeat(maxLength + 4))

