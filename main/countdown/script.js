function startCountdown() {
    const input = document.getElementById("numberInput");
    const display = document.getElementById("countdownDisplay");
  
    let count = parseInt(input.value);
  
    if (isNaN(count) || count < 0) {
      display.textContent = "Enter a valid number!";
      display.style.fontSize = "20px";
      display.style.textShadow = "none";
      return;
    }
  
    display.style.fontSize = "60px";
  
    display.textContent = count;
  
    const interval = setInterval(() => {
      count--;
      display.textContent = count;
      display.classList.remove("countdown");
      void display.offsetWidth;
      display.classList.add("countdown");
  
      if (count <= 0) {
        clearInterval(interval);
      }
    }, 1000);
  }
  