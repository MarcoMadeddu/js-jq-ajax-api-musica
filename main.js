$(document).ready(function() {
	var myApi = "https://flynn.boolean.careers/exercises/api/array/music";
	var container = $(".cds-container");
	var source = $("#template").html();
	var template = Handlebars.compile(source);

	$.ajax({
		url: myApi,
		method: "GET",

		success: function(data){
			var songDesc = data.response;

			for(var i = 0; i< songDesc.length; i++){
				var generateSong={
					Img: songDesc[i].poster,
					title: songDesc[i].title,
					author: songDesc[i].author,
					year: songDesc[i].year,
					gen: songDesc[i].genre
				}

				var set = template(generateSong);
				container.append(set);

				
			}
			
		},

		error: function(){
			console.log("oh no:(");
			
		},
	})
	
});