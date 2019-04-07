$("#").on("change", function (event) {
    event.preventDefault();

    var teamSelected = $("#####").val();

    var queryURL = "https://api.mysportsfeeds.com/v1.2/pull/mlb/2019-regular/full_game_schedule.json?date=until-10-days-from-now&team=" + teamSelected;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            var results = response.fullgameschedule;

            for (var i = 0; i < results.length; i++) {
                var date = results.gameentry.date;
                var awayTeam = results.gameentry.awayTeam.Name;
                var homeTeam = results.gameentry.homeTeam.Name;
                var location = results.gameentry.homeTeam.City;

                var newROw = $("<tr>").append(
                    $("<td>").text(awayTeam),
                    $("<td>").text(homeTeam),
                    $("<td>").text(location),
                );

                $("#tableID > tbody").append(newROw);
            }
        }
        )
});