const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const h1 = document.getElementById("counter");

let count = 0;


btn1.addEventListener("click", () => {
    count++;
    h1.innerHTML = count;
});

btn2.addEventListener("click", () => {
    if(count>0){

        count--;
    }
     h1.innerHTML = count;
});

btn3.addEventListener("click", () => {
    if(count>0)
        {
            count *=2;
        }
        else
        {
            document.writeln("can't multiply with 0");
        }
    h1.innerHTML = count;
});

btn4.addEventListener("click", () => {
    if(count>1)
        {
            count /=2;
        }
        else
        {
            document.writeln("This value can't divide");
        }
    h1.innerHTML = count;
});




