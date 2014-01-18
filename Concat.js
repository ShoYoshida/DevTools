$(function(){

　$('#target1').each(function(){
		$(this).bind("keyup",execute(this));
	});


　$('#target2').each(function(){
		$(this).bind("keyup",execute(this));
	});


　$('#target3').each(function(){
$(this).bind("keyup",execute(this));
	});

	//Dialog
	$("#dialog").dialog({
		autoOpen: false,
		resizable: false,
		height: 330,
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
	$("#btnConcat").addClass("menubutton_hover");

	$(".menubutton").hover(
		function(){
    	$("#btnConcat").removeClass("menubutton_hover");
			$(this).addClass("menubutton_hover");
		},
		function(){
    	$(this).removeClass("menubutton_hover");
			$("#btnConcat").addClass("menubutton_hover");
		}
	);

});

function lineArray(lines){
	var cnt = 0;
	var array = [];
	$.each(lines,function(i,line){
		array[i] = line;
	});

	return array;
}

function execute(elm){

	var v,old = elm.value;

	return function(){
		if (old != (v=elm.value)){
			old = v;

			var text01 = $('#target1').val().replace(/\r\n|\r/g, "\n");
			var lines01 = text01.split('\n');

			var text02 = $('#target2').val().replace(/\r\n|\r/g, "\n");
			var lines02 = text02.split('\n');

			var text03 = $('#target3').val().replace(/\r\n|\r/g, "\n");
			var lines03 = text03.split('\n');



			var lineArray01 = lineArray(lines01);
			//console.log('txt1の行数：' + lineArray01.length);

			var lineArray02 = lineArray(lines02);
			//console.log('txt2の行数：' + lineArray02.length);

			var lineArray03 = lineArray(lines03);
			//console.log('txt3の行数：' + lineArray01.length);

			var maxLineCnt = lineArray01.length;
			if (maxLineCnt < lineArray02.length){
				maxLineCnt = lineArray02.length;
			}
			if (maxLineCnt < lineArray03.length){
				maxLineCnt = lineArray03.length;
			}

			//console.log('最大行数：' + maxLineCnt);

			var text2 = '';

			for (var j=0; j<maxLineCnt; j++){
				var s1 = lineArray01[j];
				if (!s1) { s1 = "";}
				var s2 = lineArray02[j];
				if (!s2) { s2 = "";}
				var s3 = lineArray03[j];
				if (!s3) { s3 = "";}
				//console.log("[" + j + "]" + s1 + s2 + s3);
				text2 += s1 + s2 + s3 + '\n';
			}

			$('#result').val(text2);

		}

	}

}