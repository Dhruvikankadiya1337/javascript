class Person {
 
    #roll_no;
    #name;
    #age;
    #std;
    #percentage;
    
    constructor(roll_no, name, age, std, percentage) {
        this.#roll_no = roll_no;
        this.#name = name;
        this.#age = age;
        this.#std = std;
        this.#percentage = percentage;
    }

    Info() {
        document.writeln(this.#roll_no);
        document.writeln(this.#name);
        document.writeln(this.#age);
        document.writeln(this.#std);
        document.writeln(this.#percentage);
    }
}

const student1 = new Person(1, "riya", 10, "10th", 85.5 + "<br>");
const student2 = new Person(2, "priya", 12, "11th", 89.3 + "<br>");
const student3 = new Person(3, "Kanika", 14, "9th", 94.7 + "<br");

student1.Info();
student2.Info();
student3.Info();    
