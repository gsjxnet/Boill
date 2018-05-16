$(document).ready(function($){
	/*------------ Scroll Start ------------*/
    $("#nav_mobile_bt").click(function(){
	    $(".mobile_nav").slideToggle(600);
	    $(".header_mobile_bt1").toggleClass("header_mobile_bt11");
	    $(".header_mobile_bt2").toggleClass("header_mobile_bt22");
	    $(".header_mobile_bt3").toggleClass("header_mobile_bt33");
	    $("body").toggleClass("hidden_y");
    });


	var clientWidth = document.documentElement.clientWidth;
	jQuery('html').addClass("hidden-c");
	jQuery(document).ready(function ($) {
	  animationSlider();
	  $(window).scroll(function(){
	    animationSlider();
	  });
	  $(window).load(function(){
	    animationSlider();
	  });
	});

	function animationSlider() {
	  var wt = jQuery(window).scrollTop(),//gundongtiaodejuli
	    wh = wt + jQuery(window).height();
	  jQuery('.wowo:not(.animated)').each(function () {
	    var me = jQuery(this), eH = me.offset().top,
	      oH = eH + me.innerHeight();
	    if (wt <= eH && wh >= eH || wt <= oH && oH <= wh) {
	      me.addClass("animated");
	      // setTimeout(function () {
	      //   me.removeClass("animated wowo")
	      // }, 1500);
	    }
	  });
	}
    /*------------ banner Start ------------*/

    /*------------ banner End --------------*/

});

