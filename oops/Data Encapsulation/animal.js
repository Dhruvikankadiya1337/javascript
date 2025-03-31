class Animal {

    #name;
    #type;
    #gender;
    #age;
    
  
    constructor(name, type, gender, age) {
        this.#name = name;
        this.#type = type;
        this.#gender = gender;
        this.#age = age;
    }
    
    Info() {
        document.writeln(this.#name);
        document.writeln(this.#type);
        document.writeln(this.#gender);
        document.writeln(this.#age);
    }
}


const animal1 = new Animal("Leo", "Lion", "Male", 5 + "<br>");
const animal2 = new Animal("Bella", "Elephant", "Female", 10 + "<br>");
const animal3 = new Animal("Rocky", "Dog", "Male", 3);

animal1.Info();
animal2.Info();
animal3.Info();

