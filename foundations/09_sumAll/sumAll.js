const sumAll = function(start, end) {
    if(typeof start !== "number" || typeof end !== "number")return "ERROR";
    if(start < 0 || end < 0) return "ERROR";
    if(Math.floor(start) !== start || Math.floor(end) !== end) return "ERROR";

    if(end < start){
        start += end; // 14 + 13
        end = start - end; // 27 - 13 = 14
        start -= end; // 27 - 14 = 13
    }

    console.log("Start: " + start);
    console.log("End: " + end);

    let sum = 0;

    for(let i = start; i <= end; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
