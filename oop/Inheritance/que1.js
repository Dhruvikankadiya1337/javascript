class Indian {
    adharNo;
    birthPlace;

    setIndianDetails(adharNo, birthPlace) {
        this.adharNo = adharNo;
        this.birthPlace = birthPlace;
    }

    getIndianDetails() {
        console.log(`Adhar No: ${this.adharNo}`);
        console.log(`Birth Place: ${this.birthPlace}`);
    }
}

class Person extends Indian {
    name;
    age;
    gender;

    setPersonDetails(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getPersonDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
    }
}


class Employee extends Person {
    id;
    salary;
    role;

    setEmployeeDetails(id, salary, role) {
        this.id = id;
        this.salary = salary;
        this.role = role;
    }

    getEmployeeDetails() {
        console.log(`Employee ID: ${this.id}`);
        console.log(`Salary: ₹${this.salary}`);
        console.log(`Role: ${this.role}`);
    }


    showAllDetails() {
        this.getIndianDetails();
        this.getPersonDetails();
        this.getEmployeeDetails();
        console.log("");
    }
}


const emp1 = new Employee();
emp1.setIndianDetails("1234-5678-9012", "Delhi");
emp1.setPersonDetails("Rahul", 28, "Male");
emp1.setEmployeeDetails("EMP001", 50000, "Developer");


emp1.showAllDetails();

const emp2 = new Employee();
emp2.setIndianDetails("9999-8888-7777", "Ahmadabad");
emp2.setPersonDetails("Neha", 30, "Female");
emp2.setEmployeeDetails("EMP002", 60000, "Manager");

emp2.showAllDetails();
