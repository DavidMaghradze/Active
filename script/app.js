// Slider
const qoutes = document.querySelectorAll('.slider-text');
const images = document.querySelectorAll('.slider-images img')
const circles = document.querySelectorAll('.circles li');
var curent = 1;
qoutes[0].style.display='block';
images[0].style.display='block';
circles[0].style.backgroundColor='#fff';

circles.forEach((item, index)=>{
	circles[index].addEventListener('click', function(){
		for (var i=0; i<qoutes.length; i++) {
			qoutes[i].style.display='none';
			images[i].style.display='none';
			circles[i].style.backgroundColor='';
		}

		images[index].style.display='block';
		qoutes[index].style.display='block';
		circles[index].style.backgroundColor='#fff';
	})
});

// menu
$(document).ready(function(){
	$('.view-header-menu').click(function(){
		$('.header-menu').fadeToggle();
		$('.view-header-menu').toggleClass('shown');
	});

	$(window).on('scroll', function(){
		if ($(window).scrollTop()) {
			$('.header-nav').addClass('fixed');
		} else {
			$('.header-nav').removeClass('fixed');
		}
	});

	// Smooth scrolling
	var scrollLink = $('.scroll');
	var navbarHeight = $('.header-nav').height()-35;
	var headerHeight = $('#header').height();
	scrollLink.click(function(e){
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top - navbarHeight
		}, 1000)
	});

	// Active link switching
	$(window).scroll(function(){
		var scrollBarLocation = $(this).scrollTop()+120;

		scrollLink.each(function(){
			var sectionOffset = $(this.hash).offset().top

			if (sectionOffset <= scrollBarLocation) {
				$(this).addClass('active');
				$(this).parent().siblings().children().removeClass('active');
			} else {
				$('.scroll').children().removeClass('active');
			}
		})

		if (scrollBarLocation <= headerHeight) {
			$('.scroll').removeClass('active');
		}
	});

	// work animation
	$('.work').mouseover(function(){
		$(this).find('h3').css({"transform": "translate(0px, 0px)"});
	})

	$('.work').mouseout(function(){
		$(this).find('h3').css({"transform": "translate(0px, -50px)"});
	})

	$('.work').mouseover(function(){
		$(this).find('p').css({"transform": "translate(0px, 0px)"});
	})

	$('.work').mouseout(function(){
		$(this).find('p').css({"transform": "translate(0px, 50px)"});
	})
});