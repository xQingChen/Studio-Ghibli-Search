let input = document.querySelector('input');
let poster = document.getElementById('filmPoster');
let filmInfo = document.getElementById('film');
let userInputFilmTitle  = '';
let description = document.getElementById('filmDescription');
let directorInfo = document.getElementById('filmDirector');
let yearInfo = document.getElementById('filmYear');
let titleInfo = document.getElementById('filmTitle');

input.addEventListener("keypress", updateValue);

function updateValue(e) {
  if (e.key === "Enter") {
    console.log(e.target.value);
    userInputFilmTitle = e.target.value;
    fetchFunction();
  }
}


function fetchFunction() {
  fetch (`https://ghibliapi.vercel.app/films/`)
  .then (response => response.json())
  .then(data => {
    for (i = 0; i < data.length; i++){
      console.log(data[i].title)
      if (data[i].title == userInputFilmTitle) {
        console.log(data[i]);

        // This is used to show the images.
        let img = document.createElement("img");
        img.src = data[i].image
        
        console.log("banana");
        poster.appendChild(img);

        //Directer Info
        let directorPlaceholder = data[i].director;
        directorInfo.innerHTML = `Director: ${directorPlaceholder}`;
        console.log(directorInfo);
        
        // This part is used to show information for the film.
        let filmDescription = data[i].description;
        description.innerHTML = filmDescription;
        console.log("papaya");
        console.log(description);

        //Year Info
        let yearPlaceholder = data[i].release_date;
        yearInfo.innerHTML = `Release Year: ${yearPlaceholder}`  
 ;
        console.log(yearInfo);

        //Title Info
        let titlePlaceholder = data[i].title;
        titleInfo.innerHTML = titlePlaceholder;
        console.log(titleInfo);
        
        // filmPosterImage.appendChild(data[i].image)
        break;
      }
    }
  });
}

// let filmPosterImage = document.getElementById("filmPoster");
