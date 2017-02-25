$(document).ready(function(){
	var fheights = [];
	var iheights = [];
	$(".item").each(function(){
		var temp = 0; // store heights of all contents
		$(this).children().each(function(){
			if ($(this).height() == 0){
				$(this).show();
				temp += $(this).height();
				$(this).hide();
			} else {
				temp += $(this).height();
			}
		});
		iheights.push($(this).height());
		fheights.push(temp);
	});
	$(".item").mouseenter(function(){
		$(this).css({
			transition : "background-color 0.5s ease-in-out",
			"background-color" : "grey"
		});
		var heightf = (2*(fheights[ parseInt($(this).attr('id')) - 1 ])).toString();
		$(this).animate({height:heightf}, 300);
		$(this).children(":nth-child(n + 2)").fadeIn(200);
		$(this).css("color", "white");
	});
	$(".item").mouseleave(function(){
		var iheight = (iheights[ parseInt($(this).attr('id')) - 1 ]).toString();
		$(this).css({
			transition : "background-color 0.5s ease-in-out",
			"background-color" : "white"
		})
		$(this).animate({height:iheight}, 300);
		$(this).css("color", "black");
		$(this).children(":nth-child(n + 2)").fadeOut(200);
	});
});