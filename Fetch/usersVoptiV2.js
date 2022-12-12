//      Sur la base de Vprof
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    console.log(users)
    displayUsers(users)
})

function displayUsers(users) {
  const div = document.querySelector("#users")

  let html = `<table class="table table-striped table-hover">
                <thead>
                  <tr>`
                    html += displayHeaders(users[0])//Affiche l'entête du tableau
                    html +=`
                  </tr>
                </thead>`
  users.forEach(user => {
    html += displayUser(user)
  })

  html += `</table>`
  div.innerHTML = html
}

/**Display user
 * @param {*} user 
 * @returns string to put in HTML
 */
function displayUser(user) {
  let html = '<tr>'

  //Affiche le contenu d'une cellule
  for(const prop in user){
    html+= "<td>"+displayDonnee(user[prop])+"</td>"
  }
  html +="</tr>"
  return html
}

function displayDonnee(data) {
  let html=""
  if(data instanceof Object){
    for(const prop in data){html+= displayDonnee(data[prop])}
  }else{
    html+= data + "\n "
  }
  return html
}

function displayHeaders(user){
  let html=''
  for(const prop in user){html+= `<th>${prop}</th>`} 
  return html
}