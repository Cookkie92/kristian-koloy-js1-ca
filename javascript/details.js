const detailsContainer = document.querySelector(".details-result");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

fetch("https://free-to-play-games-database.p.rapidapi.com/api/game?id=" + id, {
  method: "GET",
  headers: {
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    "x-rapidapi-key": "a80672ee60msh8679bffac93f402p1f8093jsnd8eb05bce674",
  },
})
  .then((response) => response.json())

  .then((data) => {
    detailsContainer.innerHTML = "";
    const games = data;

    detailsContainer.innerHTML += `
      <div class="details-result">
      <div class="btn-container">
          <a href="index.html" class="start-btn"><--- Go Back</a>
      </div>
       <img class="details-image" src="${games.thumbnail}"  alt="thumbnail">
        <h3 class="logo">${games.title}</h3>
                    <h4>Description:</h4>
         <p>${games.short_description}</p>
         <p>Genre: ${games.genre}</p>
          Release: <time>${games.release_date}</time>

          <div class="btn-container">
          <a href="${games.game_url}" class="start-btn">Play It Now</a>
      </div>
      
         </div>
        
      
      `;

    console.log(games);
  })
  .catch((err) => {
    console.error(err);
  });
