// Code your solution in this file!
const arrayDrivers = ['Alex', 'Jim', 'Tony', 'Melissa']

const returnFirstTwoDrivers = function(arrayDrivers) {
    return (arrayDrivers.slice(0,2));
}
const returnLastTwoDrivers = function(arrayDrivers) {
    return (arrayDrivers.slice(-2));
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (fareMultiplier) {
    return function(value) {
        return fareMultiplier * value;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arraydrivers, func) {
    return func(arraydrivers);
}
