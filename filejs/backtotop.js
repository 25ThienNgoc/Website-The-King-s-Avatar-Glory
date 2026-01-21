const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btn.classList.add("show");
    btn.style.display = "block";
  } else {
    btn.classList.remove("show");
    setTimeout(() => {
      if (!btn.classList.contains("show")) btn.style.display = "none";
    }, 1000);
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
