const person = {
    name: "zaman",
    age: 30,
    greeting: function () { //inplicit
        console.log(`welcome ${this.name} in bangladesh`);
    },
    address: {
        road: "1",
        block: "C",
        method: function () {
            console.log(`zaman address is road-${this.road}, block-${this.block} at kolpolok residential area`); //this is mentioning immediate parent object variable impllicitly;
        }
    }
};


person.greeting()
person.address.method()


function greeting(obj1, obj2) {
    console.log(`welcome Mr ${this.name},may be from ${obj1} or ${obj2}`);
}

const personTwo = {
    name: "saddam"
};
const personThree = {
    name: "jewel"
};


//greeting.call(personTwo, "Chittagong");//here this is used as explicit call by call method
//greeting.call(personTwo, ["Chittagong", "Dhaka"]);//here this is used as explicit call by apply method
const result = greeting.bind(personThree, "chittagong", "Dhaka");//here this is used as explicit call by bind method
result()