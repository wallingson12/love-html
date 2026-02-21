/** Abre o arquivo index.html do projeto no navegador padrão */
const { exec } = require('child_process');
const path = require('path');

const indexPath = path.join(__dirname, 'templates', 'index.html');

let command;

switch (process.platform) {
    case 'win32':
        command = `start "" "${indexPath}"`;
        break;
    case 'darwin':
        command = `open "${indexPath}"`;
        break;
    case 'linux':
        command = `xdg-open "${indexPath}"`;
        break;
    default:
        console.error('Plataforma não suportada');
        process.exit(1);
}

exec(command, (err) => {
    if (err) {
        console.error('Não foi possível abrir o navegador:', err);
    } else {
        console.log('💖 Projec-crush iniciado!');
    }
});