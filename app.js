const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { listarTabla, crearArchivo } = require('./multiplicar/multiplicar.js')

switch (argv._[0]) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(mensaje => console.log(colors.magenta(mensaje)))
            .catch(e => console.log(e));
        break;
    default:
        console.log(colors.red('Comando no reconocido'));

}