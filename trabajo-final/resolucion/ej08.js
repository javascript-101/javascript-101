// 2
let autor = {
    nombre: 'Soda Stereo',
    integrantes: ['Gustavo Cerati', 'Zeta Bosio', 'Charly Alberti']
};

// 3
let cancion1 = {
    nombre: 'En el septimo día',
    duracion: 345
};

// 4
let cancion2 = {
    nombre: 'Canción Animal',
    duracion: 260
};

// 5
let cancion3 = {
    nombre: 'Té para 3',
    duracion: 180
};

// 6
let disco = {
    nombre: 'Canción Animal',
    autor: autor,
    canciones: [cancion1, cancion2, cancion3]
};

// 7
alert('Nombre del disco: ', disco.nombre);
alert('Nombre del autor: ', disco.autor.nombre);

let integrantes = disco.autor.integrantes;
alert('Integrantes: ', integrantes[0], integrantes[1], integrantes[2]);

let canciones = disco.canciones;
alert('Canciones: ', canciones[0], canciones[1], canciones[2]);
