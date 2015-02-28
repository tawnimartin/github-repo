function icon(name) {
	return JST.icon({icon: name});//creating an object literal with key icon, value name
}

//function to load repos
$(function() {

	var url = "https://api.github.com/users/jisaacks/repos";

	$.ajax(url, {

		success: function(data) {
			//stargazers count
			
			var sorted = _.sortBy(data, "stargazers_count").reverse(); 
			console.log(sorted);
			window.sorted = sorted;
			var topFive = sorted.slice(0,5);

			_.each(topFive, function(data) {
				$(".repos").append( JST.repo(data) );
			});

		}

	});

});