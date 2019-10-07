$(document).ready(function(){
    
});
$(window).scroll(function(){
    var wScroll = $(window).scrollTop();
    height= $('.slide').height();
    $('.navbar').css('background-color','rgba(255,255,255,'+wScroll/height+')');
    
        $('.s10').css('background-size',(100+(((wScroll-$('.s10').offset().top)/height)*50))+'% '+(100+(((wScroll-$('.s10').offset().top)/height)*50))+'% ')
   
});
