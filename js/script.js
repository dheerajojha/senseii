let bars = document.querySelector(".fa-bars");
let myul = document.querySelector(".myul");
bars.addEventListener("click", function () {
  myul.classList.contains("active")
    ? myul.classList.remove("active")
    : myul.classList.add("active");
});

// header sticky
let header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", scrollY > 0);
});

// input flag

var input = document.querySelector("#phone");
if(typeof intlTelInput !== "undefined"){

intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: function (success, failure) {
    $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
      var countryCode = resp && resp.country ? resp.country : "us";
      success(countryCode);
    });
  },
})};

// counter

let counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerText = "0";
  const updatecounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 250;
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updatecounter, 150);
    } else {
      counter.innerText = target;
    }
  };
  updatecounter();
});
