// making the copyright year dynamic
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// making a button that downloads a button
function downloadResume() {
  const resumeFile = "nathnael_chilot_cv.pdf";

  const file = new File([resumeFile], "nathnael_chilot_cv.pdf", {
    type: "application/pdf",
  });

  const url = URL.createObjectURL(file);

  const link = document.createElement("a");
  link.href = url;

  link.download = "nathnael_chilot_cv.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// animating the h1 element
const homeSection = document.querySelector("#home");
const homePage = document.querySelector(".homePage");
const h1Element = homePage.querySelector("h1");

function fadeIn(element, duration) {
  let opacity = 0;
  const interval = 10;
  const gap = interval / duration;

  function animate() {
    opacity += gap;
    element.style.opacity = opacity;

    if (opacity >= 1) {
      clearInterval(fadeInterval);
      setTimeout(() => {
        fadeOut(element, duration);
      }, 1000);
    }
  }

  const fadeInterval = setInterval(animate, interval);
}

function fadeOut(element, duration) {
  let opacity = 1;
  const interval = 10;
  const gap = interval / duration;

  function animate() {
    opacity -= gap;

    element.style.opacity = opacity;

    if (opacity <= 0) {
      clearInterval(fadeInterval);
      setTimeout(() => {
        fadeIn(element, duration);
      }, 1000);
    }
  }

  const fadeInterval = setInterval(animate, interval);
}

window.addEventListener("load", () => {
  fadeIn(h1Element, 2000);
});
