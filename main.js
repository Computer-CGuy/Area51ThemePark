$(document).ready(function(){
    
});
$(window).scroll(function(){
    var wScroll = $(window).scrollTop();
    height= $('.slide').height();
    $('.box').css('transform','translateY(-'+wScroll/1+'px)')
    $('p.c').css('transform','translateY(-'+wScroll/1+'px)')	
    $('.navbar').css('background-color','rgba(255,255,255,'+wScroll/height+')');
    
    $('.s1').css('background-size',(100+(((wScroll-$('.s1').offset().top)/height)*50))+'% '+(100+(((wScroll-$('.s1').offset().top)/height)*50))+'% ')
        $('.s10').css('background-size',(100+(((wScroll-$('.s1').offset().top)/height)*50))+'% '+(100+(((wScroll-$('.s1').offset().top)/height)*50))+'% ')
   
});
