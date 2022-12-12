const boutonRecherche = document.querySelector("#btnRech");

boutonRecherche.addEventListener('click',(e) => {
    e.preventDefault();
    let rech=document.querySelector("#recher").value;
    console.log(rech);
    fetch('http://www.omdbapi.com/?&apikey=de846841&s="'+rech+'"')
        .then(response => response.json())
        .then(films =>{
            console.log(films)
            displayFilm(films)
        })
    //fetch("req.json").then(response => response.json()).then(users => displayUsers(users));
})

function displayFilm (data){
    const div=document.querySelector("#films")
    let html = ''

    data.Search.forEach(film => {
        html+= `<li class='listeFilms'><a href='film.html?film=${film.Title}'><h2>${film.Title}</h2>`
        html+= `<img src='${film.Poster}' alt='Affiche du film : "${film.Title}"'>`
        html+= "</a></li>"
        console.log(film)
    });

    html+='</table>'
    div.innerHTML=html
}