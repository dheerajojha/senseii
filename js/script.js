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
intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: function (success, failure) {
    $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
      var countryCode = resp && resp.country ? resp.country : "us";
      success(countryCode);
    });
  },
});

// let phone = document.querySelector("#phone").value;
// let length = phone.length;
// if (length > 1 && length > 10) {
//   console.log("not allowed");
// } else {
//   console.loglog("allowed");
// }

$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 40000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});
