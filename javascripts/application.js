$(function(){

  //Menu fixo na tela quando rolar
  var nav    = $('nav');
  var navTop = nav.position().top * 1;
  $(window).scroll(function(){
    var view = $('html, body');
    var pageTop = view.position().top * 1;
    if (navTop + pageTop < 0) {
      nav.css({'position': 'fixed', 'top': 0});
    } else {
      nav.css({'position': 'relative'});
    }
  });
  
  //links com a classe scrollTo
  $('nav a.scrollTo').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({'scrollTop' : $(target).position().top}, 750);
    return false;
  });

  //QuickSand
  $('#filter li').click(function(){
    var value = $(this).attr('data-id');
    $('.portfolio').quicksand( $('.dic li.'+value), {
      adjustHeight: 'dynamic'
    });
  });

});

$(window).load(function(){
  //Album
  //$('#album li'      ).hide();
  $('#album li:first').show().addClass('active');
  $('#album').height($('#album li:first img').height());
  
  $('#control li').click(function(){
    var id = $(this).attr('id');
    var active = $('#album li.active');
    var main = $('#album');

    if (id == 'next') {
      main.slideUp('normal', function(){
        
        if (active.next().length == 0) {
          active.removeClass('active').hide();
          $('#main li:first').addClass('active').show();
        } else {
          active.removeClass('active').hide().next().addClass('active').show();
        }
        main.css('height', 'auto').slideDown();
        
      });
    } else {
      main.slideUp('normal', function(){
      
        if (active.prev().length == 0) {
          active.removeClass('active').hide();
          $('#main li:last').addClass('active').show();
        } else{
          active.removeClass('active').hide().prev().addClass('active').show();
        }
        main.css('height', 'auto').slideDown();
      });
    }
  });
  
});
