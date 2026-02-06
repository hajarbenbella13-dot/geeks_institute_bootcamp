const input = document.getElementById("lettersOnly");

input.addEventListener("input", () => {
    // Replace any character that is NOT a letter with an empty string
    input.value = input.value.replace(/[^a-zA-Z]/g, "");
});
