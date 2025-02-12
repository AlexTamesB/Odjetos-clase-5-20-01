console.log("Funcionando")


// vamos a crear un adjeto
let Personaje1 = {

    nombre: "goku",
    contestura: "muculoso",
    edad: "35",
    raza: "saya",
    personlidad: "alegre",
    imagen: "https://static.wikia.nocookie.net/dragonball/images/c/c0/Son_Goku_en_Super_Hero.png/revision/latest?cb=20220302091733&path-prefix=es"

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
        <img class="card-img-top" src="holder.js/100x180/" alt="">
        <div class="card-body">
            <h4 class="card-title">Title</h4>
            <p class="card-text">Text</p>
        </div>
    </div>

`;