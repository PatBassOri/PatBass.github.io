/*
WhatAnimation('fadescroll');
WhatAnimation('moveleft');
WhatAnimation('moveright');

$(window).scroll(function(){
WhatAnimation('fadescroll');
WhatAnimation('moveleft');
WhatAnimation('moveright');
});

function WhatAnimation(name){
  $('.' + name).each(function(){
      switch (name){
        case 'fadescroll': AddClass(this, 'fade');
          break;
              case 'moveleft': AddClass(this, 'left');
                break;
                  case 'moveright': AddClass(this, 'right');
                    break;
    }
  });
};
*/


function scrollContent(href){
    $('.section').each(function(){
      if(!$(this).parent().is(href))
      $(this).removeClass('visible');
    });
    $('.section', href).delay(600).queue(function(next){
      $('.section', href).addClass('visible');
      next();
    });
}

$(function () {
  $(".main-nav a").on('click', function(){
    $('.main-nav a').each(function(){
      $(this).removeClass('active');
    });
      $(this).addClass('active');
      var href = $(this).attr('href');
      scrollContent(href);
    });

});
