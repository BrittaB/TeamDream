$(document).ready(function ()
{
   var teamlist = ["Arizona-Diamondbacks", "Atlanta Braves", "Baltimore Orioles", "Boston Red Sox",
       "Chicago White Sox",
       "Chicago Cubs", "Cincinnati Reds", "Cleveland Indians", "Colorado Rockies",
       "Detroit Tigers", "Houston Astros", "Kansas City Royals",
       "Los Angeles Angels", "Los Angeles Dodgers", "Miami Marlins", "Milwaukee Brewers",
       "Minnesota Twins", "New York Yankees",
       "New York Mets", "Oakland Athletics", "Philadelphia Phillies", "Pittsburgh Pirates",
       "San Diego Padres", "San Francisco Giants",
       "Seattle Mariners", "St. Louis Cardinals", "Tampa Bay Rays", "Texas Rangers",
       "Toronto Blue Jays", "Washington Nationals"
   ];

   $("#search").select2({
       data: teamlist
   });
});