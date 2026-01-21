let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (slides.length === 0) return;
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
  currentIndex = index;
}

function moveSlide(direction) {
  showSlide(currentIndex + direction);
}

setInterval(() => {
  moveSlide(1);
}, 3000);

// Hiển thị slide đầu tiên khi tải trang
document.addEventListener("DOMContentLoaded", function() {
  showSlide(0);
});