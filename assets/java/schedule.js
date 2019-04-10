$("#search").on("change", function (event) {
    event.preventDefault();

    var teamSelected = "KansasCity-Royals";
    var apiKey = '57ba7705-1adc-4f64-8748-e619a5';
    var password = 'Hergins1';
    var queryURL = "https://api.mysportsfeeds.com/v1.2/pull/mlb/2019-regular/full_game_schedule.json?date=until-5-days-from-now&team=" + teamSelected;

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
            "Authorization": "Basic " + btoa(apiKey + ":" + password)
        },
    })
        .then(function (response) {
            console.log(response);
            var games = response.fullgameschedule;

            var weatherReqs = games.map(function (game) {
                return $.ajax(); // get game weather
            });

            Promise.all(weatherReqs).then(function (weather) {
                // each index is mapped to the same index as the games array
                // games[0] -> weather[0]
                for (var i = 0; i < games.length; i++) {
                    var date = games.gameentry.date;
                    var awayTeam = results.gameentry.awayTeam.Name;
                    var homeTeam = results.gameentry.homeTeam.Name;
                    var location = results.gameentry.homeTeam.City;

                    var newRow = $("<tr>").append(
                        $("<td>").text(awayTeam),
                        $("<td>").text(homeTeam),
                        $("<td>").text(location),
                        $("#tableID > tbody").append(newRow)
                    );
                }
            });
        })
}
);
