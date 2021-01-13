// click freccia sinistra
$('.prev').click(function(){
  if($('img.active').hasClass('first')){
    $('img.first').removeClass('active');
    $('img.last').addClass('active');
  }else{
   $('img.active').removeClass('active').prev().addClass('active');
 }
});

// click freccia destra
$('.next').click(function(){
  if($('img.active').hasClass('last')){
    $('img.last').removeClass('active');
    $('img.first').addClass('active');
  }else{
   $('img.active').removeClass('active').next().addClass('active');
 }
});

// scorro con freccia sinistra
$(document).keydown(function(t) {
  if(t.keyCode == 37) {
    if($('img.active').hasClass('first')){
      $('img.first').removeClass('active');
      $('img.last').addClass('active');
    }else{
     $('img.active').removeClass('active').prev().addClass('active');
    }
  }/*scorro con freccia destra*/else if(t.keyCode == 39){
    if($('img.active').hasClass('last')){
      $('img.last').removeClass('active');
      $('img.first').addClass('active');
    }else{
     $('img.active').removeClass('active').next().addClass('active');
    }
  }
});

// al click su pallini cambio immagine
$('.nav > i:first-child').click(function() {
  $('img, i').removeClass('active');
  $('img:first-child, .nav > i:first-child').addClass('active');
})

$('.nav > i:nth-child(2)').click(function() {
  $('img, i').removeClass('active');
  $('img:nth-child(2), .nav > i:nth-child(2)').addClass('active');
})

$('.nav > i:nth-child(3)').click(function() {
  $('img, i').removeClass('active');
  $('img:nth-child(3), .nav > i:nth-child(3)').addClass('active');
})

$('.nav i:last-child').click(function() {
  $('img, i').removeClass('active');
  $('img:last-child, .nav i:last-child').addClass('active');
})
