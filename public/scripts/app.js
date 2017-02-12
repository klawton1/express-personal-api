console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	$('button').on("click", function(){
		$('form').toggle(function(){
			$(this).css("display", "block");
		},function(){
			$(this).css("display", "hide")
		})
	})
// your code

});
