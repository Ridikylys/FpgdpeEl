"use strict"
//Burger
$('.icon-menu').click(function(event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});
//-------

//For img
function ibg(){

	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();
//-------

//Don't move when click on link
$(function () {
	$(document).click((e) => {
	  const {target} = e;
	  if(target.nodeName === 'A' && target.getAttribute('href') === '#') {
		e.preventDefault();
	  }
	});
  });

//Сharacteristics display or hidden
$('.bpvv-feature-link').click(function(event) {
	$('.bpvv-feature-title-imgRight').toggleClass('hidden');
	$('.bpvv-feature-title-imgDown').toggleClass('hidden');
	$('.iksweb').toggleClass('hidden');
});