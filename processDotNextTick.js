console.log('Main');
const fs = require('fs');
fs.readFile('./clouser.js', function (data) {
    setTimeout(function () {
        console.log("set timeout")
    }, 0);
    setImmediate(function () {
        console.log("set immediate")
    });
    process.nextTick(function () {
        console.log("nextTick")
    })
})