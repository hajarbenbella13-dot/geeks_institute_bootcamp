// ===== Exercise 1
// Part I
setTimeout(function () {
    alert("Hello World");
  }, 2000);
  
  // Part II
  setTimeout(function () {
    let container = document.getElementById("container");
    let p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);
  }, 2000);
  
  // Part III
  let container = document.getElementById("container");
  
  let interval = setInterval(function () {
    let p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);
  
    if (container.children.length === 5) {
      clearInterval(interval);
    }
  }, 2000);
  
  document.getElementById("clear").addEventListener("click", function () {
    clearInterval(interval);
  });
  
// ===== Exercise 2
function myMove() {
  let box = document.getElementById("animate");
  let pos = 0;

  let interval = setInterval(function () {
    if (pos >= 350) {
      clearInterval(interval);
    } else {
      pos++;
      box.style.left = pos + "px";
    }
  }, 1);
}


// ===== Exercise 3

// ===== Exercise 4

// ===== Exercise ...