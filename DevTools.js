// JavaScript source code
$(function(){
	var userAgent = window.navigator.userAgent.toLowerCase();
	var appVersion = window.navigator.appVersion.toLowerCase();


  if (userAgent.indexOf('msie') != -1) {
    
	} else if (userAgent.indexOf('chrome') != -1){
		$('#caution').hide();
	}

	$(".menubutton").hover(
		function(){
			$(this).addClass("menubutton_hover");
		},
		function(){
    	$(this).removeClass("menubutton_hover");
		}
	);

});