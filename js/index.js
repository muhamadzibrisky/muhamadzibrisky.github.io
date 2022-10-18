(function($) {
	"use strict";

	$(function() {
		/* Animate On Scroll */
		AOS.init({
			once: true
		});
		$(window).bind('load', AOS.refresh);

    	var includes = $('[data-include]');
    	jQuery.each(includes, function() {
        	var file = $(this).data('include') + '.html';
        	alert(file)
            $(this).load(file);
    	});

		var navbarIsHide = true;
		var navbar = $('.navbar-scroll');
		if($(window).scrollTop() >= 20) navbar.addClass('navbar-light bg-light').removeClass('navbar-dark bg-transparent');
		else navbar.addClass('navbar-dark').removeClass('navbar-light bg-light');
		$(window).scroll(function() {
			if(navbarIsHide) {
				if($(window).scrollTop() >= 20) {
					navbar.addClass('navbar-light bg-light').removeClass('navbar-dark bg-transparent');
					$('.start-navbar').removeClass('start-style').addClass('scroll-on');
				} else {
					navbar.addClass('navbar-dark').removeClass('navbar-light bg-light');
					$('.start-navbar').removeClass('scroll-on').addClass('start-style');
				}
			}
		});

		navbar.find('.collapse').on('show.bs.collapse', function() {
			navbar.addClass('navbar-light bg-light').removeClass('navbar-dark bg-transparent');
			navbarIsHide = false;
	    });

		navbar.find('.collapse').on('hide.bs.collapse', function() {
	        if($(window).scrollTop() >= 20) navbar.addClass('navbar-light bg-light').removeClass('navbar-dark bg-transparent');
			else navbar.addClass('navbar-dark').removeClass('navbar-light bg-light');
			navbarIsHide = true;
	    });

		$('body').on('mouseclick', '.nav-item', function(e) {
	        if ($(window).width() > 767) {
	            var n = $(e.target).closest('.nav-item');
	            n.addClass('show');
				$(location).attr('href', n.find('.nav-link').attr('href'));
	            setTimeout(function() {
	                n[n.is(':hover') ? 'addClass' : 'removeClass']('show')
	            }, 1)
	        }
	    })

    	const topBtn = $(".back-to-top-btn");
		$(window).scroll(function() {
            if ($(window).scrollTop() >= 20) {
                topBtn.css('display', 'block');
            } else {
                topBtn.css('display', 'none');
            }
        })

        topBtn.click((e) => {
			$(window).scrollTop(0);
			e.preventDefault();
		})
    });
})(jQuery);
