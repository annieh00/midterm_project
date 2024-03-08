//Diana Nguyen
//dianan64@iastate.edu
//Feb 24, 2024

fetch("./data.json")
  .then((response) => response.json())
  .then((myData) => loadData(myData));

function loadData(myData){
    var container = document.getElementById("goodmovies");
    console.log(myMovies);
    for (let i = 0; i < myMovies.movies.length; i++){
        let title = myMovies.movies[i].title;
        let year = myMovies.movies[i].year;
        let url = myMovies.movies[i].url;
        
        console.log(title);
        //construct the HTML element
        let division = document.createElement("div");

        division.innerHTML = `
        <h3>${title}
        ${year}
        <img src=${url} />
        `;
        container.appendChild(division);
    }//end of for

}//end of function