var games = ["Metroid", "Super Mario Bros", "Legend of Zelda"];

  function genButtons() {

    $("#game-buttons").empty();

    for (var i = 0; i < games.length; i++) {

      var newButton = $("<button>");

      newButton.addClass("gamer");
      newButton.attr("data-name", games[i]);
      newButton.prepend(games[i]);
    
      $("#game-buttons").append(newButton);
    }
  }

  $("#add-game").on("click", function(event) {
    event.preventDefault();

    var gamingClick = $("#user-input").val().trim();

    games.push(gamingClick);
    console.log(games);
    
    genButtons();
  });

  genButtons();