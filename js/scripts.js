$(function() {
  $("span.clickable1").click(function() {
    $(this).slideUp();
    //shows the following span tag
    $(this).next().slideDown();

  });
  $("span.clickable2").click(function() {
    // $(this).hide();
    //
    // $(this).prev().show();
    $(this).slideUp();
    //shows the following span tag
    $(this).prev().slideDown();
  });

});
