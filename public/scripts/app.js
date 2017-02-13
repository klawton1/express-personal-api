
$(document).ready(function(){
	var div = $(`
		<form class="col-xs-12 col-sm-12 col-md-12 col-lg-12 edits">
			<label>Name:</label><input class="form-control" type="text" name="name">
	        <label>Type:</label><input class="form-control" type="text" name="type">
	        <label>Location:</label><input class="form-control" type="text" name="location">
	        <select>
				<option>twitter</option>
				<option>facebook</option>
				<option>website</option>
				<option>phone</option>
			</select>
			<input type="text" id="socialMedia">
	        <input type="submit" value="update">
		</form>
	`)


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
					<h3 class="truck-name"><span>${truck.name}</span>    <small>${truck.type}</small></h3>
					<p hidden>${truck._id}</p>
					<button class="btn-default delete"></button>
					<button class="btn btn-default edit">Edit Info</button>
				</div>
			`);
		})

		$('.delete').on('click', function(){
			var pTag = $(this).siblings('p');
			var parent = $(this).parents('.truck');
			var id = pTag.text();
			$.ajax({
				method: "DELETE",
				url: `/api/trucks/${id}`,
				success: function(result){
					parent.remove();
				}
			})
		})

		$('.add-truck').on("click", function(){
			$('form').slideToggle(400, function(){
				if ($("#new-truck").css("display") === "block"){
					$('#add').text("Hide");
				}else{
					$('#add').text("Add a Truck");
				}
			});
		})

		$('.edit').on('click', function(event){
			var id = $(this).siblings("p").text();
			var title = $(this).parent().children('h3').children('span').text();
			$(".right-side").html(`
				<form class="col-xs-4 col-sm-4 col-md-4 col-lg-4 edits">
					<h3>${title}</h3>
					<label>Name:</label><input class="form-control" type="text" name="name">
			        <label>Type:</label><input class="form-control" type="text" name="type">
			        <label>Location:</label><input class="form-control" type="text" name="locations">
			        <select>
						<option>twitter</option>
						<option>facebook</option>
						<option>website</option>
						<option>phone</option>
					</select>
					<input type="text" id="socialMedia">
			        <input type="submit" value="update">
			        <br>
					<button class="btn btn-default">cancel</button>
				</form>
			`);
			$('.right-side button').on('click', function(event){
				event.preventDefault();
				$('.right-side').html("");
			})

			$('.right-side input:submit').on('click', function(event){
				event.preventDefault();
				var inputs = $('.right-side form').children("input");
				var name = inputs[0].value;
				var type = inputs[1].value;
				var locations = inputs[2].value;
				var contacts = inputs[3].value;
				var selected = $("option:selected").val();
				var socialAddress = $("#socialMedia").val();
				var data = {}
				if(name !== "" && name !== undefined){
					data.name = name;
				}
				if(type !== "" && type !== undefined){
					data.type = type;
				}
				if(locations !== "" && locations !== undefined){
					data.locations = locations;
				}
				if(contacts !== "" && contacts !== undefined){
					data.contacts = {}
					data.contacts[selected] = socialAddress
				}
				if(jQuery.isEmptyObject(data)){
					console.log("DONT DO THAT")
				}else{
					$.ajax({
						method: "PUT",
						url: `/api/trucks/${id}`,
						data: data,
						success: function(json){
							
							console.log(json);
						}
					})
				}
			})
		})

		$('#submit').on("click", function(event){
			event.preventDefault();
			var inputs = $('#new-truck').children("input");
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
				$('#new-truck').slideToggle(400);
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
						$(".trucks").append(`
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 truck">
								<div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
								<img src="${truck.image}" class="truck-pic">
								<div>
								<h3 class="truck-name">${truck.name}    <small>${truck.type}</small></h3>
								<p hidden>${truck._id}</p>
								<button class="btn-default delete"></button>
								<button class="btn btn-default edit">Edit Info</button>
								<select>
									<option>twitter</option>
									<option>facebook</option>
									<option>website</option>
									<option>phone</option>
								</select>
							</div>
						`);
						$('.delete').on('click', function(){
							var pTag = $(this).siblings('p');
							var parent = $(this).parents('.truck');
							var id = pTag.text();
							$.ajax({
								method: "DELETE",
								url: `/api/trucks/${id}`,
								success: function(result){
									parent.remove();
								}
							})
						})
					}
				})	
			}
		})
	}
});
