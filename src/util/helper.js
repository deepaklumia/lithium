function printDate() {
    let date = Date().split(" ");
    let dateString = date.slice(0, 4).join(" ");
    console.log("Today's date: " + dateString);
}
function printMonth() {
    let month = Date().split(" ");
    console.log("Month's of this year: " + month[1]);
}
function getBatchInfo() {
    console.log("Lithium, W3D3, the topic for today is Nodejs module system");
}
let detailsOfBatch = function () {
    printDate();
    printMonth();
    getBatchInfo();
};
module.exports.detailsOfBatch = detailsOfBatch;
