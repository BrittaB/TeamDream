$("#").on("click", function (events) {

  var queryURL = "api.openweathermap.org/data/2.5/forecast?q={city name},us&appid57742b48d96448fdbe3c30d3f4a55702";
  //woid is just a placeholder for location pulled from other API"
  $.ajax({
    url: queryURL,
    method: "GET"
  })

    .then(function (gimme) {
      console.log(gimme);
      var yesGive=gimme.allWeather
  for (var i=0; i<yesGive.length; i++){

  }

}
)

});