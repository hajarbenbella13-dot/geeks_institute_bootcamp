const inputNoun = document.getElementById("noun");
const inputadjective = document.getElementById("adjective");
const inputperson = document.getElementById("person");
const inputverb = document.getElementById("verb");
const inputplace = document.getElementById("place");  
const story = document.getElementById("story");
const form = document.getElementById("libform");
form.addEventListener("submit", function (e) {
 e.preventDefault();
    if (
        inputNoun.value === "" ||
        inputadjective.value === "" ||
        inputperson.value === "" ||
        inputverb.value === "" ||
        inputplace.value === ""
    ) {
        alert("Please fill in all the fields.");
        return;
    }

    story.textContent = `One day, ${inputperson.value} was walking through the ${inputplace.value}
    when they saw a ${inputadjective.value} ${inputNoun.value}.
    Excitedly, they decided to ${inputverb.value} it!`;

    inputnoun.value = "";
    inputadjective.value = "";
    inputperson.value = "";
    inputverb.value = "";
    inputplace.value = "";
});
