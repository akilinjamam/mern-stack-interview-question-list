// Tokenization
// AST(Abstrack Syntax Tree)

// Global Execution Context(GEC): 1: Creation Phase(CP) 2: Execution Phase(EP)
// Creation Phase: 1:window -> global object, 2: this-> window(refer to window)
// Function Execution Context(FEC): 1.Creation Phase(CP), 2: Execution Phase(EP)


/* 
GEC
    CP
        a:undefined
        testme: f() in memory
    EP
        a:5
        testMe: Execute
        FEC( for testMe())
            CP
                b: undefined
                user: undefined
                testAgain: f() in memory
            EP
                b: 10
                user: {name: "akilinjamam"....}
                FEC(for testAgain())
                    CP
                    EP


*/

console.log("Inside Global Execution Context");
var a = 5;
function testMe() {
    console.log("Inside testMe execution context");
    var b = 10;
    var user = {
        name: "akil injamam",
        country: "Bangladesh"
    };
    function testAgain() {
        console.log("Inside testAgain execution context")
        console.log("Exiting testAgain execution context")
    };
    testAgain();
    console.log("Exiting testMe execution context")
};

testMe();
console.log("Exiting global execution context");

