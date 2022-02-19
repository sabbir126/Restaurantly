$("[data-fancybox]").fancybox({
  // Options will go here
  buttons: ["close"],
  wheel: false,
  transitionEffect: "slide",
  // thumbs          : false,
  // hash            : false,
  loop: true,
  // keyboard        : true,
  toolbar: false,
  // animationEffect : false,
  // arrows          : true,
  clickContent: false,
});

// ---------- aos ------------

AOS.init();

// mixitup for filtering
$(function () {
  $("#Container").mixItUp({
    load: {
      filter: ".category-1",
    },
  });
});

// slick
// /buttons
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
