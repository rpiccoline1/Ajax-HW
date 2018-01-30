$(document).ready(function () {

$("#query-submit").on("click", function() {

  var gaming = $(this).attr("data-games");

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  gaming + "&api_key=g6i89HQLv8ODlH7pBUiXeESbck2NhhFR&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })

    .done(function(response) {
      console.log(queryURL);
      console.log(response);

      var results = response.data;

      for (var i = 0; i < results.length; i++) {

        var gameDiv = $("<div>");

        var p = $("<p>").text("Rating: " + results[i].rating);

        var gameGif = $("<img>");

        gameGif.attr("src", results[i].images.fixed_height.url);

        gameDiv.append(p);
        gameDiv.append(gameGif);

        $("#container").prepend(gameDiv);
      }
    });
  }); 
});