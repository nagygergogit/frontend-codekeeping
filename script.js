function genreView(genreList) {
  let toReturn = "";
  
  for (const genreEach of genreList) {
    toReturn += `
     <li>${genreEach}</li>
    `;
  }
  
  return toReturn;
}
  
function movieView(mov, index) {
  return `
    <div data-index="${index+1}" class="movie-card light">
      <h2>${mov.title}</h2>
      <div class="year">${mov.year}</div>
      <div class="rate">${mov.rate}</div>
      <ul class="genre">
        ${genreView(mov.genre)}
      </ul>
    </div>
  `;
}

function insertThenSelectByID(content, parent, where, id) {
  parent.insertAdjacentHTML(where, content);
  return document.getElementById(id);
}
  
function changeTheme() {
  const list = document.querySelectorAll(".movie-card");
  
  for (const el of list) {
    el.classList.toggle("light");
    el.classList.toggle("dark");
  }
}
  
function loadEvent() {
  const rootElement = document.getElementById("root");
  const buttonID = "change";
  const buttonEl = insertThenSelectByID(`<button id="${buttonID}">Change theme</button>`, rootElement, "beforebegin", buttonID);
  
  console.log(buttonEl);
  
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    rootElement.insertAdjacentHTML("beforeend", movieView(movie, i));
  }
  
  buttonEl.addEventListener("click", changeTheme);
  
}
  
window.addEventListener("load", loadEvent);