$(document).ready(function(){
	console.log("Script included!");
	/*$(window).scroll(function(){
		var s = $(window).scrollTop();
		var d = $(document).height();
		var c = $(window).height();
		scrollPercent = (s / (d-c)) * 100;
		var position = scrollPercent;
		console.log(position);

     $(".vertical").attr("value", position);

	});*/

	$(".ingredients").click(function(){
	    $(this).toggleClass("crossout");

	});

	$("#hideshow").click(function(){
		$("img").toggle("slow");

	});
     
    $(".track").click(function(){
         $(this).addClass("checkmark"); 

     });



      		     
      

});
