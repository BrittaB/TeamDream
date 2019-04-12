
$("#search").on("change", function (event) {
    event.preventDefault();

    var teamSelected = $("#search").val().trim();
    var apiKey = '57ba7705-1adc-4f64-8748-e619a5';
    var password = 'Hergins1';
    var games;
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
            games = response.fullgameschedule.gameentry;
            console.log(games);
            // var queryURL = "api.openweathermap.org/data/2.5/forecast?q={city name},us&appid=57742b48d96448fdbe3c30d3f4a55702";
            // for (var i = 0; i < games.length; i++) {
            //     var date = games.gameentry.date;
            //     var awayTeam = results.gameentry.awayTeam.Name;
            //     var homeTeam = results.gameentry.homeTeam.Name;
            //     var location = results.gameentry.homeTeam.City;

            var weatherReqs = games.map(function (game) {
                console.log(game);
                var awayTeam = game.awayTeam.Name;
                var homeTeam = game.homeTeam.Name;
                var location = game.homeTeam.City;
                var date = game.date;
                var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + location + ",us&appid=57742b48d96448fdbe3c30d3f4a55702&units=imperial";

                return $.ajax({
                    url: queryURL,
                    method: "GET"
                }); // get game weather
            });

            Promise.all(weatherReqs).then(function (weather) {
                console.log(weather);
                // each index is mapped to the same index as the games array
                // games[0] -> weather[0]

                console.log(weather)
                for (var i = 0; i < weather.length; i++) {
                    var date = games[i].date;
                    var awayTeam = games[i].awayTeam.Name;
                    var homeTeam = games[i].homeTeam.Name;
                    var location = games[i].homeTeam.City;
                    var weatherInCity = weather[i].list[0].main.temp;

                    var newRow = $("<tr>").append(
                        $("<td>").text(awayTeam),
                        $("<td>").text(homeTeam),
                        $("<td>").text(location),
                        $("<td>").text(weatherInCity));

                    $("#tableID > tbody").append(newRow)
                    // console.log(i);



                }
                // );
                console.log(weather);

            });
        })
    }   
);
