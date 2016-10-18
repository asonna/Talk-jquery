$(function() {
  $("span#clickable1").click(function() {
    $("span.hidden").fadeToggle();
      $("span#clickable1").hide();
    $("span#clickable2").show();
  });
  $("span#clickable2").click(function() {
    $("span.hidden").fadeToggle();
    $("span#clickable2").hide();
    $("span#clickable1").show();
  });
});
