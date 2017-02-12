console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	$.ajax({
		method: "GET",
		url: "/api/trucks",
		success: onSuccess

	})
	function onSuccess(json){
		var trucks = json;
		trucks.forEach(function(truck){
			$(".trucks").append(`
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 truck">
					<div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
					<img src="${truck.image}" class="truck-pic">
					<div>
					<h3 class="truck-name">${truck.name}    <small>${truck.type}</small></h3>
					<p hidden>${truck._id}</p>
				</div>
			`);
			
		})

		$('.add-truck').on("click", function(){
			$('form').toggle(function(){
				
				$(this).css("display", "block");
			},function(){
				$(this).css("display", "hide")
			})
		})

		$('#submit').on("click", function(event){
			event.preventDefault();
			var info = $('form').serialize();
			var inputs = $('form').children("input");
			var data = {
				name: inputs[0].value,
				image: inputs[1].value,
				type: inputs[2].value,
				locations: [inputs[3].value]
			}
			$.ajax({
				method: "POST",
				url: "/api/trucks",
				data: data,
				success: function(json){
					var truck = json;
					$(".trucks").append(`
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 truck">
							<div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
							<img src="${truck.image}" class="truck-pic">
							<div>
							<h3 class="truck-name">${truck.name}    <small>${truck.type}</small></h3>
							<p hidden>${truck._id}</p>
						</div>
					`);
				}
			})
		})

	}

});
