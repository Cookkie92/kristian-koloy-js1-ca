// var axios = require("axios").default;

// var options = {
//   method: "GET",
//   url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
//   params: {
//     platform: "browser",
//     category: "mmorpg",
//     "sort-by": "release-date",
//   },
//   headers: {
//     "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
//     "x-rapidapi-key": "a80672ee60msh8679bffac93f402p1f8093jsnd8eb05bce674",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

const url =
  "https://www.freetogame.com/api/games?platform=browser&category=mmorpg&sort-by=release-date&key=a80672ee60msh8679bffac93f402p1f8093jsnd8eb05bce674";

const resultContainer = document.querySelector(".result");

async function getApi() {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
}

getApi();
