// example 1
function calculate(a, b, operation) {
    return operation(a, b);
};


function multiply(a, b) {
    return a * b
};

console.log(calculate(4, 5, multiply))

// example 2

function addition(x) {
    return (y) => {
        return y + x
    }
};

const sum = addition(10);
const result = sum(5);
console.log(result)