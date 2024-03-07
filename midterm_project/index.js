fetch("./data.json")
  .then((response) => response.json())
  .then((datesAvailable) => loadMovies(datesAvailable));

function loadDates(myMovies){
    var container = document.getElementById("goodmovies");
    // console.log(myMovies);
    for (let i = 0; i < myMovies.movies.length; i++){
        let date = myMovies.movies[i].date;
        let year = myMovies.movies[i].year;
        // let url = myMovies.movies[i].url;
        
        // console.log(title);
        //construct the HTML element
        let division = document.createElement("div");

        division.innerHTML = `
        <h3>${date}
        ${year}
        // <img src=${url} />
        `;
        container.appendChild(division);
    }//end of for

}//end of function