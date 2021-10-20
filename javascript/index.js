const resaultContainer = document.querySelector(".result");
resaultContainer.innerHTML = "";
fetch(
  "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc",
  {
    method: "GET",
    headers: {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": "a80672ee60msh8679bffac93f402p1f8093jsnd8eb05bce674",
    },
  }
)
  .then((response) => response.json())
  .then((data) => {
    const games = data;
    console.log(games);
    for (let i = 0; i < games.length; i++) {
      if (i === 25) {
        break;
      }

      resaultContainer.innerHTML += `
      <div class ="result">Name: ${games[i].title}
       Genre: ${games[i].genre}
        Platform: ${games[i].platform}
         Description: ${games[i].short_description} </div>
      `;
    }
  })
  .catch((err) => {
    console.error(err);
  });
