const removeFromArray = function(arr) {
    const banned = Array.from(arguments).slice(1);
    for (let i = 0; i < arr.length; i++) {
        if(banned.includes(arr[i])){
            arr.splice(i, 1)
            i--;
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
