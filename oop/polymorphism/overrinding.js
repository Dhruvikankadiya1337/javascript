class School {
    name;
    year;
    
    setSchoolDetails(name, year) {
        this.name = name;
        this.year = year;
    }
    
    display() {
        document.writeln(`School Name: ${this.name}, Established Year: ${this.year}`);
    }
}

class Student extends School {
    studentName;
    std;
    
    setStudentDetails(studentName, std, schoolName, year) {
        this.studentName = studentName;
        this.std = std;
        this.setSchoolDetails(schoolName, year);
    }
    
    display() {
        document.writeln(`Student Name: ${this.studentName}, Standard: ${this.std}, School: ${this.name}, Established Year: ${this.year}`);
    }
}

const student1 = new Student();
student1.setStudentDetails("Rahul", "10th", "Greenwood High", 1995 + "<br>");

const student2 = new Student();
student2.setStudentDetails("Priya", "12th", "Sunrise Public School", 2000);

student1.display();
student2.display();

