// 2
const autor = {
    nombre: 'Soda Stereo',
    integrantes: ['Gustavo Cerati', 'Zeta Bosio', 'Charly Alberti']
};

// 3
const cancion1 = {
    nombre: 'En el septimo día',
    duracion: 345
};

// 4
const cancion2 = {
    nombre: 'Canción Animal',
    duracion: 260
};

// 5
const cancion3 = {
    nombre: 'Té para 3',
    duracion: 180
};

// 6
const disco = {
    nombre: 'Canción Animal',
    autor: autor,
    canciones: [cancion1, cancion2, cancion3]
};

// 7
console.log('Nombre del disco: ', disco.nombre);
console.log('Nombre del autor: ', disco.autor.nombre);

const integrantes = disco.autor.integrantes;
console.log('Integrantes: ', integrantes[0], integrantes[1], integrantes[2]);

const canciones = disco.canciones;
console.log('Canciones: ', canciones[0], canciones[1], canciones[2]);
