$(document).ready(function() {

  $(document).scroll(function() {
    var pos = $(document).scrollTop();
    const pos1=($("#one").offset().top+$("#two").offset().top)/2;
    if (pos > $("#one").offset().top) {
      $("nav").addClass("jqnav");
    } else {
      $("nav").removeClass("jqnav");
    }
    if (pos >= pos1) {
        
      $("#two h2").addClass("animated fadeInUp delay-0.5s");
      $("#two i").addClass("animated fadeInUp delay-0.5s");
    }
  });
});
