const palindromes = function (word) {
    word = word.toLowerCase().replaceAll(" ", "").replaceAll(",","").replaceAll(".", "").replaceAll("!","");
    let reverse = word.split("").reverse().join("");
    return reverse === word;
};

// Do not edit below this line
module.exports = palindromes;
