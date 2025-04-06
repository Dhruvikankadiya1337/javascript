const slider = document.querySelector('.list');
const images = document.querySelectorAll('.list .img');
const dots = document.querySelectorAll('.dots li');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;
const totalImages = images.length;

function updateSlider() {
    const imageWidth = images[0].clientWidth;
    slider.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1)  % totalImages; //  loop type
    updateSlider();  // call updateSlider
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // + and % means -1 ho jaye to last image pe le jaye
    updateSlider();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

window.addEventListener('load', updateSlider);







