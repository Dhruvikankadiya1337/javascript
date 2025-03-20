
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");


btn1.addEventListener("click", () => {

  let FirstNumber = parseInt(num1.value);
  let SecondNumber = parseInt(num2.value);
  let add = FirstNumber + SecondNumber;
    result.innerHTML = add;
 
});

btn2.addEventListener("click", () => {
    let FirstNumber = parseInt(num1.value);
    let SecondNumber = parseInt(num2.value);
    let sub = FirstNumber - SecondNumber;
    result.innerHTML = sub;
});

btn3.addEventListener("click", () => {
    let FirstNumber = parseInt(num1.value);
    let SecondNumber = parseInt(num2.value);
    let mul = FirstNumber * SecondNumber;
    result.innerHTML = mul;
});

btn4.addEventListener("click", () => {
    let FirstNumber = parseInt(num1.value);
    let SecondNumber = parseInt(num2.value);
    let div = FirstNumber / SecondNumber;
    result.innerHTML = div;
});

