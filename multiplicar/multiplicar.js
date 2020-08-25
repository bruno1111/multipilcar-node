//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('========================'.green);
    console.log(` tabla de ${ base } `.green);
    console.log('========================'.green);

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`"${base}", no es un numero `);
            return;
        }

        if (!Number(limite)) {
            reject(`"${limite}", no es un numero `);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            console.log(`${ base } * ${ i } = ${ base * i }`);
        }

    })
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`"${base}", no es un numero `);
            return;
        }

        let data = '';
        let archivo = `tablas/tabla-${ base }.txt `;
        // console.log(limite);
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(archivo, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${ base }.txt`)
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}