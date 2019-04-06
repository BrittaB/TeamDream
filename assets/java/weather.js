var queryURL = "https://www.metaweather.com/api/location/(woeid)/(min|max|the)_temp";

$.ajax({
  url: queryURL,
  method: "GET"
})
.then(function(response) {
    console.log(response);
    $("#weather-id").append(response);
)};
