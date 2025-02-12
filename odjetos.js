console.log("Funcionando")


// vamos a crear un adjeto
let Personaje1 = {

    nombre: "goku",
    contestura: "muculoso",
    edad: "35",
    raza: "saya",
    personlidad: "alegre",
    imagen: "https://th.bing.com/th/id/R.99a41955f0f7b9cf6b770ca7acd68530?rik=9%2fz9ZsLTph%2fj%2fA&riu=http%3a%2f%2fwww.rincondelvago.com%2frevista%2fimage%2f2%2f4%2f124_5metodproyectos.jpg&ehk=rgsFuASlQyq5waOzKwWA2IhmOc%2bb3R3dmhwW5M3%2fYAI%3d&risl=&pid=ImgRaw&r=0"

}

console.log(Personaje1)//aqui se imprime an la consola

 
let mascota1 = {
    nombre: "momy",
    raza: "perro",
    Personalidad: "aburrido",
    foto: "https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg?crop=16:9&width=960&enable=upscale&quality=100"

}
console.log(mascota1)

document.getElementById("IDTarjeta1").innerHTML = `

 <div class="card">
        <img class="card-img-top" src="${Personaje1.imagen}" alt="">
        <div class="card-body">
            <h4 class="card-title">${Personaje1.nombre}</h4>
            <p class="card-text">${Personaje1.personlidad}</p>
        </div>
    </div>

`;

document.getElementById("IDJumbotron1").innerHTML =`

<div class="jumbotron">
        <h1 class="display-3">jumbo heading</h1>
        <p class="lead">Jumbo helper text</p>
        <hr class="my-2">
        <p>More info</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
        </p>
      </div>

`;

// el id en este caso simepre lleva ""
document.getElementById("IDNarbar").innerHTML =` 

<nav class="navbar navbar-expand-sm navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavId">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div class="dropdown-menu" aria-labelledby="dropdownId">
          <a class="dropdown-item" href="#">Action 1</a>
          <a class="dropdown-item" href="#">Action 2</a>
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
`;


let entrevista = {

nombre : "beto",
edad : "34" ,
disponibilidad : "inmediata",
estadoEmocional: "entusiasmado"


} 


document.getElementById("IDMicompa").innerHTML =`

<div class="jumbotron">
        <h1 class="display-3">${entrevista.disponibilidad}</h1>
        <p class="lead">${entrevista.nombre}</p>
        <hr class="my-2">
        <p>${entrevista.edad}</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button">${entrevista.estadoEmocional}</a>
        </p>
      </div>

`;