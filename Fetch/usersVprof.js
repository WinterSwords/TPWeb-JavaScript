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
                    html += displayHeaders(users[0])         
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

    //Si l'objet contient un objet
    if(user[prop] instanceof Object){
      let ob = user[prop]
      html += "<td>"

      //On affiche chaque élement du sous objet
      for(const prop in ob) {
        html += ob[prop] + " "
      }

      html += "</td>"
    }else{
      html += `<td>${user[prop]}</td>`
    } 
  }
  html +="</tr>"
  return html
}

function displayHeaders(user){
  let html=''
  for(const prop in user){
    html+= `<th>${prop}</th>`
  } 
  return html
}