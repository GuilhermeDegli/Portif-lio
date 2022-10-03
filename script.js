$("#button").click(function() {
    $('html, body').animate({
      scrollTop: $("#anchor").offset().top
    }, 1000);
  });

  $("#button2").click(function() {
    $('html, body').animate({
      scrollTop: $("#anchor2").offset().top
    }, 1000);
  });
