// clouser
function clouserExmple() {
    let x = 10;
    return function (value) {
        console.log(x * value);
    }
};


const result = clouserExmple();

const calc = result(5);
console.log(calc)