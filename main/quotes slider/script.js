const quotes = [
    { text: "Dream big. Start small. Act now.", author: "Robin Sharma" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" }
  ];
  
  const gradients = [
    "linear-gradient(to right, #ffafbd, #ffc3a0)",
    "linear-gradient(to right, #2193b0, #6dd5ed)",
    "linear-gradient(to right, #cc2b5e, #753a88)",
    "linear-gradient(to right, #43cea2, #185a9d)",
    "linear-gradient(to right, #e96443, #904e95)"
  ];
  
  let currentIndex = 0;
  
  function showQuote(index) {
    const quoteBox = document.getElementById('quoteBox');
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');
    const container = document.querySelector('.quote-container');
  
    quoteText.textContent = quotes[index].text;
    quoteAuthor.textContent = `— ${quotes[index].author}`;
    container.style.background = gradients[index % gradients.length];
  
    // Animation trigger (re-add class)
    quoteBox.classList.remove('fade');
    void quoteBox.offsetWidth; // force reflow
    quoteBox.classList.add('fade');
  }
  
  setInterval(() => {
    currentIndex = (currentIndex + 1) % quotes.length;
    showQuote(currentIndex);
  }, 2000);
  
  // Initial load
  window.addEventListener("load", () => 
       showQuote(currentIndex

    ));
  