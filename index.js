//scrolling mechanism of the navbar
let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.transition = "0.25s";
  } else {
    document.getElementById("navbar").style.top = "-800px";
    document.getElementById("navbar").style.transition = "0.25s";
  }
  prevScrollPos = currentScrollPos;
};
