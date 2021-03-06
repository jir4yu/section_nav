function checkScrollPosition(){
	var navBlock = $('.dot-navigation-block');
	var scrollPos = $(document).scrollTop();
	navBlock.find('a').each(function(){
		// If window was move over block positon
		var block = $( $(this).attr('href') );
		if ( (block.position().top) <= scrollPos+5 && (block.position().top) + block.height() > scrollPos+5 ) {
			// remove all active class and add active to the only one we want
			navBlock.find('li').removeClass('active');
			$(this).parent('li').addClass('active');
		}else{
			$(this).parent('li').removeClass('active');
		}
	});
}

$(document).ready(function(){
	var navBlock = $('.dot-navigation-block');
	navBlock.find('a').on('click', function(e){
		e.preventDefault();
		$(document).off('scroll');
		// Get block distance from top of browser
		var block = $(this).attr('href');
		var blockPosition = $(block).offset().top;
		// Animate window to that position
		$('html, body').animate({
			scrollTop: blockPosition
		}, 600, 'swing', function(){
			checkScrollPosition();
		});
	});
});

$(window).on('scroll', function(){
	checkScrollPosition();
});
