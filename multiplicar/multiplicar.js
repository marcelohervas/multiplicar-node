const fs = require('fs'); /*LIBRERIA PROPIA DE NODE*/
//const fs = require('express'); /*PAQUETE NO NATIVO DE NODE*/
//const fs = require('./archivo'); /*ARCHIVO QUE HEMOS CREADO NOSOTROS*/
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base [${base}] no es un numero`.red);
        } else {
            for (let i = 0; i <= limite; i++) {
                console.log(`${i} * ${base} = ${i * base}`.green);
            }
            resolve(`Tabla visualizada`.yellow);
        }
    });
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base [${base}] no es un numero`);
        } else {
            let data = '';
            for (let i = 0; i <= limite; i++) {
                data += `${base} * ${i} = ${base * i}\n`;
            }
            fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
                if (err) reject(err);
                else resolve(`tablas/tabla-${base}-al-${limite}.txt`);
            });
        }
    });
}

//Primera forma de exportar una función
module.exports = {
    crearArchivo,
    listarTabla
}