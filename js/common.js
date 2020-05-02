var Common = {
	init: function() {;
        Common.menu();
        Common.main();
	},
    menu: function() {
        $('.mob_menu').on('click',function(e){
            $(this).toggleClass('open')
			$('nav').stop().slideToggle();
		});
		
		
    },
	main: function() {

        $('.input_tel').mask('(000) 000-00-00');
        
        $(".sw_in").twentytwenty({
            default_offset_pct: 0.3, 
            orientation: 'vertical'
        });
        
        $("nav a").click(function(e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: $(""+$(this).attr('href')).offset().top }, 500);
        });
        
        $(".send").on('click',function(e){
            e.preventDefault();
            
            if( $(this).parent('form').find('input[name="name"]').val() != 0 && $(this).parent('form').find('input.input_tel').val().length >= 15 ) {
                
                $.post("send.php", $(this).parents('form').serialize(),  function(response) {
                    $('.pop_up_cont').fadeOut(0);
                    $('#mess').fadeIn().find('.h1').html(response);
                    $('.pop_up_bg').fadeIn();
                });
            
            }else{
                
                $(this).parent('form').find('input').each(function(){
                    
                    if($(this).attr('name') == 'name' && $(this).val().length == 0 ) {
                        $(this).css({'border-color':'red'});
                    }
                    
                    if($(this).attr('name') == 'phone' && $(this).val().length <= 14  ) {
                        $(this).css({'border-color':'red'});
                    }
                    
                    setTimeout(function(){
                       $('form input').css({'border-color':'#ededed'}) 
                    },1000);
                });
            }
        })
        
        $('.pop_up_close , .pop_up_bg').on('click',function(e){
            e.preventDefault();
            $('.pop_up_bg, .pop_up_cont').fadeOut();
        });
        
        $('.pop_up_btn').on('click',function(e){
            e.preventDefault();
            $('.pop_up_bg, #two').fadeIn();
        });
    },
};

$(function() {
	Common.init();
});