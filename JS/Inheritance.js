const { prototype } = require("module");

class ClassA {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    display() {
        console.log(`ID: ${this.id} and Name:${this.name}`);
    }
}

class ClassB extends ClassA {
    constructor(id, name, city) {
        super(id, name);
        this.city = "BLR";
    }

    display() {
        console.log(`ID: ${this.id} and Name: ${this.name} and City ${this.city}`);
    }
}

let obj1 = new ClassA(101, "Sanjay");
obj1.display();

console.log(obj1.id, obj1.name);

console.log("==========");

let obj2 = new ClassB(102, "SSG", "KWR");
obj2.display();



