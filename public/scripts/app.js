console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	$.ajax({
		method: "GET",
		url: "/api/trucks",
		success: onSuccess

	})

	function onSuccess(json){
		var trucks = json;
		$(".trucks").html("");
		trucks.forEach(function(truck){
			$(".trucks").append(`
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 truck">
					<div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
					<img src="${truck.image}" class="truck-pic">
					<div>
					<h3 class="truck-name">${truck.name}    <small>${truck.type}</small></h3>
					<p hidden>${truck._id}</p>
					<button class="btn btn-default edit">Edit Info</button>
					<button class="btn btn-default delete">Delete</button>
					<select>
						<option>twitter</option>
						<option>facebook</option>
						<option>website</option>
						<option>phone</option>
					</select>
				</div>
			`);
		})

		$('.delete').on('click', function(){
			var pTag = $(this).siblings('p');
			var parent = $(this).parents('.truck');
			var id = pTag.text();
			console.log(parent);
			$.ajax({
				method: "DELETE",
				url: `/api/trucks/${id}`,
				success: function(result){
					parent.remove();
				}
			})
		})

		$('.add-truck').on("click", function(){
			$('form').toggle(400, function(){
				if ($("#new-truck").css("display") === "block"){
					$('#add').text("Hide");
				}else{
					$('#add').text("Add a Truck");
				}
			});
		})

		$('#submit').on("click", function(event){
			event.preventDefault();
			var info = $('form').serialize();
			var inputs = $('form').children("input");
			var name = inputs[0].value;
			var image = inputs[1].value;
			var type = inputs[2].value;
			var locations = inputs[3].value;
			if(name == "" || image == "" || type == ""){
				$(".required").attr("placeholder", "Required")
				setTimeout(function(){
					$(".required").attr("placeholder", "");
				}, 2000)
			}else{
				$('form').toggle(400);
				$('#add').text("Add a Truck");
				var data = {
					name: name,
					image: image,
					type: type,
					locations: locations
				}
				$.ajax({
					method: "POST",
					url: "/api/trucks",
					data: data,
					success: function(json){
						var truck = json;
						console.log(truck.contacts._id);
						$(".trucks").append(`
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 truck">
								<div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
								<img src="${truck.image}" class="truck-pic">
								<div>
								<h3 class="truck-name">${truck.name}    <small>${truck.type}</small></h3>
								<p hidden>${truck._id}</p>
								<button class="btn btn-default edit">Edit Info</button>
								<button class="btn btn-default delete">Delete</button>
								<select>
									<option>twitter</option>
									<option>facebook</option>
									<option>website</option>
									<option>phone</option>
								</select>
							</div>
						`);
					}
				})	
			}
		})

	}

});
