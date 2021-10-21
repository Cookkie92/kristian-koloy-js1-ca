const resaultContainer = document.querySelector(".result");

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
    resaultContainer.innerHTML = "";
    for (let i = 0; i < games.length; i++) {
      if (i === 100) {
        break;
      }

      resaultContainer.innerHTML += `
      <div class ="result">
      <div class = "inner-result">
        <h3 class="logo">${games[i].title}</h3>
        <img class="image" src="${games[i].thumbnail}"  alt="thumbnail">
         <p>${games[i].short_description}</p>
         ${games[i].genre}|---|${games[i].release_date}
         <a href="${games[i].game_url}> </a>
         </div>
      </div>
      `;
    }
  })
  .catch((err) => {
    console.error(err);
  });
