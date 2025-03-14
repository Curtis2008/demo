class Teacher {
    name;
    age;
    #salary;
    //this makes this private

    constructor(name, age, salary) {
        this.name = name
        this.age = age
        this.#salary = salary
    }

    getSalary() {
        return this.#salary;
    }

    setSalary(newSalary) {
        if (newSalary <= 0) {
            throw Error("Invalid salary, must be above 0")
        }
        this.#salary = newSalary
    }
}

const teacher = new Teacher("Joe", 24, 65000)
teacher.setSalary(70000);
console.log(teacher.getSalary());
teacher.getSalary();