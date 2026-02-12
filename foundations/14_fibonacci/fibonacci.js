const fibonacci = function(num) {
    num = Number(num);

    if(num < 0) return "OOPS";
    if(num === 0) return 0;

    first = 1;
    second = 1;
    counter = 2;
    while(counter < num){
        second += first;
        first = second - first;
        counter++;
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
