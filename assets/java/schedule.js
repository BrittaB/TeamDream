$("#search").on("change", function (event) {
    event.preventDefault();

    var teamSelected = $("#search").val().trim();
    var apiKey = '57ba7705-1adc-4f64-8748-e619a5';
    var password = 'Hergins1';
    var queryURL = "https://api.mysportsfeeds.com/v1.2/pull/mlb/2019-regular/full_game_schedule.json?date=from-today-to-5-days-from-now&team=" + teamSelected;

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
            "Authorization": "Basic " + btoa(apiKey + ":" + password)
        },
    })
        .then(function (response) {
            var games = response.fullgameschedule.gameentry;
            var location;

            var weatherReqs = games.map(function (game) {

                location = game.homeTeam.City;

                var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + location + ",us&units=imperial&appid=57742b48d96448fdbe3c30d3f4a55702&cnt=5";

                return $.ajax({
                    url: queryURL,
                    method: "GET"
                }); // get game weather
            });

            Promise.all(weatherReqs).then(function (weather) {
                console.log(weather);
                // each index is mapped to the same index as the games array
                // games[0] -> weather[0]
                for (var i = 0; i < games.length; i++) {
                    var homeTeam = games[i].homeTeam.Name;
                    var awayTeam = games[i].awayTeam.Name;
                    // var temp = weather[i].list.main.temp;
                    var date = games[i].date;
                    location = games[i].homeTeam.City
                    // console.log(temp);
                    
                    var newRow = $("<tr>").append(
                        $("<td>").text(homeTeam),
                        $("<td>").text(awayTeam),
                        $("<td>").text(location),
                        $("<td>").text(date),
                        // $("<td>").text(temp),
                        );
                    $("#tableID > tbody").append(newRow)
                }
            })
        });
})        
