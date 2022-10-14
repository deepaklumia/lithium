// const { fromPairs } = require("lodash");
const lodash = require("lodash");
function monthOfYear() {
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let groupOfMonth = lodash.chunk(month, 4);
    console.log(groupOfMonth);
    const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    let allElementEceptFirst = lodash.tail(array);
    console.log(allElementEceptFirst);
    let array1 = [4, 5, 5, 4, 35, 6, 8, 4];
    let array2 = [5, 4, 36, 1, 31, 5, 4];
    let array3 = [5, 4, 6, 4, 61, 65, 4];
    let array4 = [64, 6, 8, 45, 4, 5];
    let array5 = [8, 95, 48, 9, 5, 46, 4];
    let unions = lodash.union(array1, array2, array3, array4, array5);
    console.log(unions);
    const keyValue = [
        ["horror", "The Shining"],
        ["drama", "Titanic"],
        ["thriller", "Shutter Island"],
        ["fantasy", "Pans Labyrinth"],
    ];
    let objects = lodash.fromPairs(keyValue);
    console.log(objects);
}
module.exports.monthOfYear = monthOfYear;
