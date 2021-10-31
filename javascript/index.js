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
    try {
      const games = data;
      console.log(games);
      resaultContainer.innerHTML = "";
      for (let i = 0; i < games.length; i++) {
        if (i === 60) {
          break;
        }
        //fjerna noen details så details sidå kan verr litt bedre
        resaultContainer.innerHTML += `
        <div class ="result">
        <a href="details.html?id=${games[i].id}">
        <div class = "inner-result">
         
          <img class="image" src="${games[i].thumbnail}"  alt="thumbnail">
          <h3 class="logo">${games[i].title}</h3>
           </div>
           </a>
        </div>
        
        `;
      }
    } catch (error) {
      console.log("NONONONONON");
    }
  })
  .catch((err) => {
    console.error("Error has occured", err);
  });

// contactSubject.len,
// contactAdress.len,
// email.value
// if (checkLength(value, len) || validateEmail(emails) === true) {
//   contactSucess.style.display = "none";
// } else {
//   contactSucess.style.display = "block";
// }
