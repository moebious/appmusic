import { App } from './app';

async function main() {
    const app = new App(5300);
    await app.listen();
}

main();

module.exports = {
    App
}