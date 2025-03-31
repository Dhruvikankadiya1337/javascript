class Calculator {
    sum(a, b) {
        document.writeln("Sum1 : ", a + b + "<br>");
    }
    sum3(a, b, c) {
        document.writeln("Sum2 : ", a + b + c + "<br>");
    }
    sum4(a, b, c, d) {
        document.writeln("Sum3 : ", a + b + c + d);
    }
}

const calc = new Calculator();
calc.sum(100, 90);     
calc.sum3(80, 70, 60);    
calc.sum4(50, 40, 30, 20); 

