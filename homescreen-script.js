let slideIndex = 0;
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slideIndex = index;
    slides.style.transform = `translateX(-${index * 100}vw)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % 4; // Wrap around to the first slide after the last one
    showSlide(slideIndex);
}

// Set up automatic slide transition every 5 seconds
setInterval(nextSlide, 3000);

// Allow manual control for dots
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
});

// Initialize the first slide as active
showSlide(0);
