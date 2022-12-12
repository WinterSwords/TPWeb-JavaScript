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
    html+= "<td>"
    //Si l'objet contient un objet
    if(user[prop] instanceof Object){
      html+= displayObj(user[prop])
    }else{
      html+= `${user[prop]}`
    }
    html+= "</td>"
  }
  html +="</tr>"
  return html
}

function displayObj(obj) {
  let html=""
  for(const prop in obj){
    if(obj[prop] instanceof Object){
      html+= displayObj(obj[prop])
    }else{
      html+= obj[prop] + "\n "
    }
  }
  return html
}

function displayHeaders(user){
  let html=''
  for(const prop in user){html+= `<th>${prop}</th>`} 
  return html
}