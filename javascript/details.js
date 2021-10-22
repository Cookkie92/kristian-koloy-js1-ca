const resaultContainer = document.querySelector(".result");

fetch("https://free-to-play-games-database.p.rapidapi.com/api/game?id=452", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    "x-rapidapi-key": "a80672ee60msh8679bffac93f402p1f8093jsnd8eb05bce674",
  },
})
  .then((response) => response.json())
  .then((data) => {
    resaultContainer.innerHTML = "";
    const games = data;

    resaultContainer.innerHTML += `
      <div class ="result">
      <a href="details.html?id=${games.id}">
      <div class = "inner-result">
       
        <img class="image" src="${games.thumbnail}"  alt="thumbnail">
        <h3 class="logo">${games.title}</h3>
         <div><p>${games.short_description}</p></div>
         <div><p>Genre: ${games.genre}</p></div>
          Release: <time>${games.release_date}</time>
        
         </div>
         </a>
      </div>
      
      `;
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
