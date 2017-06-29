jQuery(function () {
	jQuery('a.scrollto').not('a.nosrcoll').on('click', function (event) {
		event.preventDefault();
		var anchor = jQuery(this).attr('href');
		jQuery('body, html').stop().animate({scrollTop: jQuery(anchor).offset().top - 70}, 1000, function () {
		});
	});
	$('.carousel')
		.swiperight(function () {
			$(this).carousel('prev');
		})
		.swipeleft(function () {
			$(this).carousel('next');
		});


	jQuery('#toggle-send-message-form-button, .form_descripirion, .floating_send_messages').bind('click', function (event) {
		event.preventDefault();
		var parent = $(this).closest('.send-message-form');
		if (parent.hasClass('opened')) {
			if(jQuery(document).width()<991){
				parent.animate({
				'top': '61px',
			},function() {
				parent.removeClass('opened');
			  } );
			}else{
				parent.animate({
				'top': '21px',
			},function() {
				parent.removeClass('opened');
			  } );
			}


		} else {
			parent.addClass('opened');
			parent.animate({
				'top': '-230px',
			});
		}
	});
	var is_visible = false;
	jQuery(document).scroll(function () {
		if(jQuery(document).scrollTop()>350 ){
		    if(!is_visible)
                jQuery(".floating_send_messages").animate({
                    'left': '20px'
                });
		    is_visible = true;
		}else{
		    if(is_visible)
                jQuery(".floating_send_messages").animate({
                    'left': '-80px'
                });
		    is_visible = false;
		}
	});
	
	$('form').on('submit',function () {
		var form = $(this);
		$.ajax({
			type:"POST",
			url:'/send_message/',
			data:$(this).serialize(),
			success: function (data) {
				console.log(data);
				if (data.status == 'OK'){
					generateNotification('success','Ваше сообщение успешно отправлено.');
					if(form.attr('id') =='short_form'){
						$('#toggle-send-message-form-button').trigger('click');
					}
				}else{
					if (typeof data.errors == 'object'){
						for (var k in data.errors){
							for(var i = 0; i < data.errors[k].length; i++){
								generateNotification('error', capitalizeFirstLetter(k) +' ' + data.errors[k][i]);
							}

						}
					}
					else{
						generateNotification('error', data.errors);

					}

				}

            },

			error:function (xhr, status,error) {
				generateNotification('error', xhr+''+status+error);

            }
		});
		return false;
    });

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	function generateNotification(type, text){
        var n = noty({
            text        : text,
            type        : type,
            dismissQueue: true,
            timeout     : 10000,
            // closeWith   : ['click'],
            layout      : 'topRight',
            theme       : 'relax',
            maxVisible  : 10
        });
        console.log('html: ' + n.options.id);
    }

	function verticalAlignTextBlocks() {
		$('.text-block-black, .text-block-transparent').each(function () {
			if (parseInt($(this).css('margin-top')) !== '0') {
				var margin_top = -($(this).outerHeight() / 2);
				if ($(this).closest('section').prev().length === 0) {
					margin_top += 35;
				}
				$(this).css({
					'position': 'absolute',
					'top': (parseInt($(this).closest('section').outerHeight()) / 2) + 'px',
					'margin-top': margin_top + 'px'
				});
			}
		});
	}

	if (!Modernizr.flexbox) {
		verticalAlignTextBlocks();
		$(window).smartresize(function () {
			verticalAlignTextBlocks();
		});
	}

	if ($('.slick-slider').length){
		$('.slick-slider').slick({
			infinite: true,
			slidesToShow: 1,
			//slidesToScroll: 1,
			dots:false,
			//speed: 300,
			autoplay: true,
			autoplaySpeed: 4000,
			 fade: true,
			 arrows: false

		});
	}

});

function declOfNum(number, titles) {
	var cases = [2, 0, 1, 1, 1, 2];
	return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}
