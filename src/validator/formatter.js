function trim(str) {
    let string = str.trim();
    console.log("Hardcoded string: " + string);
    console.log("Lowercase string: " + string.toLowerCase());
    console.log("Uppercase string: " + string.toUpperCase());
}
module.exports.trim = trim;
