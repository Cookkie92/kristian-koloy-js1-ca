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
  })
  .catch((err) => {
    console.error(err);
  });

const form = document.querySelector("#contactForm");
const contactName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const contactSubject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const contactEmail = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const contactAdress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");
const contactSucess = document.querySelector("#sucess");

function validateForm() {
  event.preventDefault();

  if (checkLength(contactName.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
  if (checkLength(contactSubject.value, 9) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
  if (checkLength(contactAdress.value, 24) === true) {
    adressError.style.display = "none";
  } else {
    adressError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  console.log();
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
// contactSubject.len,
// contactAdress.len,
// email.value
// if (checkLength(value, len) || validateEmail(emails) === true) {
//   contactSucess.style.display = "none";
// } else {
//   contactSucess.style.display = "block";
// }
