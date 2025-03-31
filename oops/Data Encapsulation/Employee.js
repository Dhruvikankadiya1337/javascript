class Employee {
    constructor(id, name, salary, role) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.role = role;
    }

    get() {
        document.writeln(this.id);
        document.writeln(this.name);
        document.writeln(this.salary);
        document.writeln(this.role);
    }
}

const p1 = new Employee(1, "Reza", 30000, "develper" + "<br>");
const p2 = new Employee(2, "Lux", 35000, "manager" + "<br>");
const p3 = new Employee(3, "Dax", 8000, "clark");

p1.get();
p2.get();
p3.get();
