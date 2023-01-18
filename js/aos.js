// import AOS from "aos";
// AOS.init();
// Select all the elements with the class animate
const animateDivs = document.querySelectorAll(".aos");

// Check if the div is in the viewport
function checkInView() {
  animateDivs.forEach((animateDiv) => {
    const rect = animateDiv.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      animateDiv.classList.add("animation");
    }
  });
}

// Listen for the scroll event
window.addEventListener("scroll", checkInView);
