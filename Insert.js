$(function(){

　$('#prefix').each(function(){
		$(this).bind("keyup",execute(this));
	});

　$('#suffix').each(function(){
		$(this).bind("keyup",execute(this));
	});

　$('#target').each(function(){
		$(this).bind("keyup",execute(this));
	});

	//Dialog
	$("#dialog").dialog({
		autoOpen: false,
		resizable: false,
		height: 380,
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
	$("#btnInsert").addClass("menubutton_hover");

	$(".menubutton").hover(
		function(){
    	$("#btnInsert").removeClass("menubutton_hover");
			$(this).addClass("menubutton_hover");
		},
		function(){
    	$(this).removeClass("menubutton_hover");
			$("#btnInsert").addClass("menubutton_hover");
		}
	);

});

function execute(elm){
	var v,old = elm.value;

	return function(){
		if (old != (v=elm.value)){
			old = v;

			var f = $('#prefix').val();
			var e = $('#suffix').val();
			//console.log(f + ":" + e);

			var text = $('#target').val().replace(/\r\n|\r/g, "\n");
			var lines = text.split('\n');

			var text2 = '';

			$.each(lines,function(i,line){
				if (line != ''){
					//console.log('[' + i + ']' + line);

					text2 += f + line + e + '\n';
				}
			});

			$('#result').val(text2);

		}
	}

}