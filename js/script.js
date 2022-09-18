let bars = document.querySelector(".fa-bars");
let myul = document.querySelector(".myul");
bars.addEventListener("click", function () {
  myul.classList.contains("active")
    ? myul.classList.remove("active")
    : myul.classList.add("active");
});

let header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", scrollY > 0);
});
