fetch("https://free-to-play-games-database.p.rapidapi.com/api/game?id=452", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    "x-rapidapi-key": "a80672ee60msh8679bffac93f402p1f8093jsnd8eb05bce674",
  },
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });

// const url =
//   "https://www.freetogame.com/api/games?platform=browser&category=mmorpg&sort-by=release-date&key=a80672ee60msh8679bffac93f402p1f8093jsnd8eb05bce674";

// const resultContainer = document.querySelector(".result");

// async function getApi() {
//   const response = await fetch(url);
//   const result = await response.json();
//   console.log(result);
// }

// getApi();
