const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar indicada', options)
    .command('crear', 'Crea el archivo con la tabla de multiplicar indicada', options)
    .help()
    .argv;

module.exports = {
    argv
}