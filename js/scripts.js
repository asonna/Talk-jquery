$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").append("<li>Hello!</li>");
    $("ul#webpage").append("<li>Hello there!</li>");
    $("ul#user").children("li").click(function(){
      // $(this).remove();
    });
    $("ul#webpage").children("li").click(function(){
      $("li").remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").append("<li>Goodbye!</li>");
    $("ul#webpage").append("<li>Thank you, Goodbye!</li>");
    $("ul#user").children("li").click(function(){
      // $(this).remove();
    });
    $("ul#webpage").children("li").click(function(){
      // $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").append("<li>Stop copying me!</li>");
    $("ul#webpage").append("<li>No worry, I can find something better to do!</li>");
    $("ul#user").children("li").click(function(){
      // $(this).remove();
    });
    $("ul#webpage").children("li").click(function(){
      // $(this).remove();
    });
  });
});
