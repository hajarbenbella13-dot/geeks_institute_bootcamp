// ====== Daily Challenge 1
const sentence = "The cake is not bad, I like it";
const wordNot= sentence.indexOf("not");
const wordBad = sentence.indexOf("bad");
console.log(sentence);
;
if (sentence ){
    console.log()
}
if (wordNot !== -1 && wordBad > wordNot) {
    const newSentence = sentence.replace(/not.*bad/, "good");
    console.log(newSentence);
}else{
    console.log(sentence);
}

// ====== Daily Challenge 2


const rows = 5; 

for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}


// ====== Daily Challenge 3
