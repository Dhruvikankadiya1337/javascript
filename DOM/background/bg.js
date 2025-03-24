const colorBtn = document.getElementById("btn");
const colorText = document.getElementById("number");

colorBtn.addEventListener('click', () => {
    generateColor();
});

function generateColor() {
    const randomNum = Math.floor(Math.random() * 16777215).toString(16);
    const newColor = "#" + randomNum;
    document.body.style.backgroundColor = newColor;
    colorText.innerText = newColor;
    console.log(newColor);
}

copyIcon.addEventListener('click', () => {
    navigator.clipboard.writeText(colorText.innerText);
});

generateColor();

