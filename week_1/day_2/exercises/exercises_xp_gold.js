// ===== Exercise 1
function isBlank(str) {
    return str.trim() === "";
  }
  
  // Tests
  console.log(isBlank(""));        // true
  console.log(isBlank("abc"));   // false
  
// ===== Exercise 2
function abbrevName(name) {
    const parts = name.split(" ");
    return parts[0] + " " + parts[1][0] + ".";
  }
  
  // Test
  console.log(abbrevName("Robin Singh")); // "Robin S."
  
// ===== Exercise 3
function isOmnipresent(array, value) {
    return array.every(subArr => subArr.includes(value));
}

// Example
const arr = [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]];

isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)// true
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) //false

// ===== Exercise 4

<script>
let table = document.body.firstElementChild; // the table

// loop through all rows
for (let i = 0; i < table.rows.length; i++) {
    // color the diagonal cell
    table.rows[i].cells[i].style.backgroundColor = "red";
}
</script>

// ===== Exercise ...