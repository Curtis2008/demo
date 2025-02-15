const personPrototype2 = {
    greet() {
        console.log("hello")
    }
}

const tim2 = Object.create(personPrototype2)
tim2.greet();


const personPrototype = {
    greet() {
        console.log(this.name);
    },
};

const tim = Object.create(personPrototype);
tim.name = "Tim";
const joe = Object.create(personPrototype);
joe.name = "Joe";

tim.greet();
joe.greet();