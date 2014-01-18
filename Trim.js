$(function(){

  $('#target').each(function(){
    $(this).bind("keyup",execute(this));
  });

	//Dialog
	$("#dialog").dialog({
		autoOpen: false,
		resizable: false,
		height: 260,
		width: 400,
		modal: true,
		position: "center",
		open: function (event, ui) {

		},
		buttons: {
			"OK": function () {
				$(this).dialog("close");
			}
		}
	});

	//button
	$("#usage").button({
		icons: {primary:"ui-icon-comment"}
	}).click(function(){
		$("#dialog").dialog("open");
	});

	//メニュー
	$("#btnTrim").addClass("menubutton_hover");

	$(".menubutton").hover(
		function(){
    	$("#btnTrim").removeClass("menubutton_hover");
			$(this).addClass("menubutton_hover");
		},
		function(){
    	$(this).removeClass("menubutton_hover");
			$("#btnTrim").addClass("menubutton_hover");
		}
	);

});

function execute(elm){

  var v,old = elm.value;

  return function(){
    if (old != (v=elm.value)){
      old = v;

  		var text = $('#target').val().replace(/\r\n|\r/g, "\n");
  		var lines = text.split('\n');

  		var text2 = '';

  		$.each(lines,function(i,line){
  			if (line != ''){
  				//console.log('[' + i + ']' + line);

  				if (i === 0){
  					text2 += $.trim(line);
  				}else{
  					text2 += '\n' + $.trim(line);
  				}
  				
  			}
  		});

  		$('#result').val(text2);

    }

  }

}