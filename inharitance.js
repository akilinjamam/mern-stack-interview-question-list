function Person(name, age, nationality) {
    this.name = name;
    this.age = age;
    this.nationality = nationality
};



Person.prototype.eat = function () {
    console.log(`person name is ${this.name}, his age is ${this.age} years, nationality is ${this.nationality}`);
};
Person.prototype.address = "chittagong";

const akil = new Person("akil", 30, "bangladeshi");
console.dir(akil)
akil.eat();
console.dir(akil.__proto__.__proto__.__proto__);

const cat = {
    name: "Bili",
    sounds: "Meow"
}
