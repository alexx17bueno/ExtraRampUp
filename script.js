/*Ejercicio 1*/
const personas = [
    { nombre: "Marta", edad: 25 },
    { nombre: "Pedro", edad: 16 },
    { nombre: "Alejandro", edad: 18 },
    { nombre: "Antonio", edad: 31 },
    { nombre: "Laura", edad: 12 }
];

let menoresDeEdad = [];
let mayoresDeEdad = [];

for (let i = 0; i < personas.length; i++) {
    if (personas[i].edad < 18) {
        menoresDeEdad.push(personas[i].nombre);
    } else {
        mayoresDeEdad.push(personas[i].nombre);
    }
}

console.log("Personas menores de edad:", menoresDeEdad.join(", "));
console.log("Personas mayores de edad:", mayoresDeEdad.join(", "));


/*Ejercicio 2*/
const verduras = ["Brócoli", "Calabacín", "Guisantes", "Tomates"];

const comidas = [
    { nombres: "Tofu", vegano: true },
    { nombres: "Pollo", vegano: false },
    { nombres: "Queso", vegano: false },
    { nombres: "Manzana", vegano: true },
    { nombres: "Patata", vegano: true },
    { nombres: "Huevos", vegano: false }
];

for (let i = 0; i < comidas.length; i++) {
    if (!comidas[i].vegano) {
        comidas[i].nombres = verduras[i % verduras.length];
    }
}

console.log(comidas);

/*Ejercicio 3*/
const peliculas = [
    { titulo: "El Rey León", minutos: 88 },
    { titulo: "Jurassic Park", minutos: 127 },
    { titulo: "Matrix", minutos: 136 },
    { titulo: "Regreso al Futuro", minutos: 116 },
    { titulo: "Frozen", minutos: 102 },
    { titulo: "Lo que en viento se llevó", minutos: 238 }
];

let peliculasCortas = [];
let peliculasMedias = [];
let peliculasLargas = [];

for (let i = 0; i < peliculas.length; i++) {
    if (peliculas[i].minutos < 100) {
        peliculasCortas.push(peliculas[i].titulo);
    } else if (peliculas[i].minutos >= 100 && peliculas[i].minutos <= 200) {
        peliculasMedias.push(peliculas[i].titulo);
    } else {
        peliculasLargas.push(peliculas[i].titulo);
    }
}

console.log("Películas cortas:", peliculasCortas);
console.log("Películas medias:", peliculasMedias);
console.log("Películas largas:", peliculasLargas);