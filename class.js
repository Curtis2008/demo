
class Person {
    name;
    age;

    constructor (name, age) {
        this.name = name
        this.age = age
//you could remove the constructor and do person.name = "Tim" and assign via dot.name
    }

    sayHi () {
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old.`)
    }
}

const person = new Person("Tim", 10);
person.sayHi();

class Top {
    name2;
    #age2;
    constructor(name2, age2) {
        this.name2 = name2;
        this.#age2 = age2;
    }
}
const todd = new Top("Todd", 23);
console.log(todd.age2);