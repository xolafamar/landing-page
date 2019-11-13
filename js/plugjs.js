$(document).ready(function() {
  // هنا عملت ناف تظهر وتختفي من خلال زار
  $(".nav-icon").click(function() {
    $(".full-nav").addClass("open");
  });
  $(".nav-close").click(function() {
    $(".full-nav").removeClass("open");
  });
  // end nav click
  // هنا عملت الناف الاىساسية يضاف ليها كلاس اسمه استيكي ال هيخليها اسمووووث
  $(window).scroll(function() {
    var sc = $(window).scrollTop();
    if (sc > 100) {
      $(".nav").addClass("sticky");
    } else {
      $(".nav").removeClass("sticky");
    }
  });

  /* slider video */
  $(".bxsslider").bxSlider({
    mode: "horizontal",
    moveSliders: 1,
    slideMargin: 40,
    minSlides: 1,
    maxSlides: 1,
    speed: 1200,
    dots: true,
    infiniteLoop: true
  });
});
/*slider video*/
