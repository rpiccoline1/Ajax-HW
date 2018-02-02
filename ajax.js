$(document).ready(function () {

  var games = ["Metroid", "Super Mario Bros", "Legend of Zelda"];

  function displayGames() {

    var nintendo = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=g6i89HQLv8ODlH7pBUiXeESbck2NhhFR&q=nintendo&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function (response) {
      
      var gameImageUrl = response.data[0].images.original.url
      var imageGif = $("<img>");

      imageGif.attr("src", gameImageUrl);
      imageGif.attr("alt", "game gif")
      
      $("#container").append(imageGif);

      genButtons();
      console.log(response);
    });
  }

  function genButtons() {
    
    $("#game-buttons").empty();

    for (var i = 0; i < games.length; i++) {

      var newButton = $("<button>");

      newButton.addClass("gamer");
      newButton.attr("data-name", games[i]);
      newButton.text(games[i]);

      $("#game-buttons").append(newButton);
    }
  }

  $("#add-game").on("click", function (event) {
    event.preventDefault();

    var gamingClick = $("#user-input").val().trim();

    games.push(gamingClick);
    console.log(games);

    genButtons();
  });

  $(document).on("click", ".gamer", displayGames);

  genButtons();
});