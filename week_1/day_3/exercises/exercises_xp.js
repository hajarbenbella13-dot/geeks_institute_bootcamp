// ===== Exercise 1
//1-Using a DOM property, retrieve the h1 and console.log it.
const article = document.querySelector('article');
const h1 = article.firstElementChild;
console.log(h1);
//2-Using DOM methods, remove the last paragraph in the <article> tag.
article.lastElementChild.remove();
//3-Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const h2 = article.querySelector('h2');
h2.addEventListener('click', function() {
    h2.style.backgroundColor = 'red';});
//4-Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const h3 = article.querySelector('h3');
h3.addEventListener('click', function() {
    h3.style.display = 'none';});
    //5-Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const button = document.createElement('button');
button.textContent = 'Make Text Bold';
article.appendChild(button);
button.addEventListener('click', function() {
    const paragraphs = article.querySelectorAll('p');
    paragraphs.forEach(function(p) {        
        p.style.fontWeight = 'bold';
    });
});

  //When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
 
h1.addEventListener('mouseover', function() {

const sizeh1=Math.floor(Math.random()*100);
    h1.style.fontSize = sizeh1 + 'px';
article.appendChild(sizeh1);
});

//When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

 const p = article.querySelectorAll('p');
 p[1].addEventListener('mouseover', function() {
    p[1].style.opacity = "0";
 });
 
 p[1].addEventListener('mouseout', function () {
    p[1].style.opacity = "1";
});


// ===== Exercise 2

//view exercise2_xp.html file

// ===== Exercise 3
//view exercise3_xp.html file
// ===== Exercise 4
//view exercise4_xp.html file
// ===== Exercise ...