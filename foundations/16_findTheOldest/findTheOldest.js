const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        if(!oldest["yearOfDeath"]) oldest["yearOfDeath"] = (new Date()).getFullYear();
        if(!person["yearOfDeath"]) person["yearOfDeath"] = (new Date()).getFullYear();
        console.log(oldest);
        console.log(person);
        let currAge = person["yearOfDeath"] - person["yearOfBirth"];
        let oldAge = oldest["yearOfDeath"] - oldest["yearOfBirth"];

        // if(currAge > oldAge) return person;
        // else return oldest;
        return currAge > oldAge ? person : oldest
    })
};

// Do not edit below this line
module.exports = findTheOldest;
