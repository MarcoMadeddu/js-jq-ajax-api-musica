$(document).ready(function() {

	// V A R I A B I L I //
	var myApi = "https://flynn.boolean.careers/exercises/api/array/music";
	var container = $(".cds-container");
	var source = $("#template").html();
	var template = Handlebars.compile(source);

	// C H I A M A T A  A P I //
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

	// R I C E R C A  I N  B A S E  A L  G E N E R E //
	var search = $(".button");
	var select = $("#music-gen");

	search.click(function(){
		var selected = select.children("option:selected").val();
		var cds = $(".cd");
		cds.hide();
		
		cds.each(function(){
			if($(this).find(".gen").text() == selected){
				$(this).show();
			}
		})
	})
});