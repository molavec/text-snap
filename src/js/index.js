$(document).ready(function(){
  
  // The farther from the center the smaller it is
  
  $(window).on('scroll', function(){
    var windowHeight = $(this).height();
    var center = Math.floor(windowHeight / 2);
    var initialSize = 2;
    
    // Check how far is it away from the center
    $('.line').each(function(e){
      // calcula el valor del h1 - el lugar donde está el top de la barra scroll
      var howFar = $(this).offset().top - $(window).scrollTop();
      /*
      if (howFar < windowHeight && howFar >= 0) {
        var finalPercentage = Math.abs(( (Math.abs(howFar) / center) * 100 ));
        var setSize = finalPercentage * initialSize / 2 ;
        $(this).css({'fontSize': setSize});
      }
      */ 
      
      if (howFar < windowHeight && howFar >= 0) {
        if ( Math.abs(howFar - center) < 150 ) {
          $(this).css({
              "fontSize": "2.2em",
              "color": "#FFFFFF"
            });
        }
        else {
          $(this).css({
              "fontSize": "1.2em",
              "color": "#FFFFFF44"
            });
        }
      }
      else {
        $(this).css({
              "fontSize": "1.2em",
              "color": "#FFFFFF44"
            });
      }
      
    });
    
  });
  
  
});