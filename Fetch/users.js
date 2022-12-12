fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users =>{
    console.log(users) 
    displayUsers(users)
})

function displayUsers(users){
  const div = document.querySelector("#users")
  
  div.innerHTML = '<table class="container table"><tr><td>NOM</td> <td>Prénom</td> <td>Ville, Rue: Numéro</td></tr>'
  users.forEach(user => {
    console.log(user)
    const userUl = document.createElement('tr')
    userUl.innerHTML =  `<tr><td>${user.name.toUpperCase()}</td> <td>${user.username}</td> <td>${user.address.city}, ${user.address.street}: ${user.address.suite}</td></tr>`
    div.appendChild(userUl)
  })
  div.innerHTML = `</table>`
}