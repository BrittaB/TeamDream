$("#").on("change", function (events) {

  var queryURL = "https://www.metaweather.com/api/location/search/?query=woid";
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