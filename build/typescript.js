// Aula 03. Typescript === Javascript
// Sabemos que os parametros estão retornando. Ex.: o date é do tipo date com o objeto da classe Date
function showInfo(date, options = {}) {
    console.log(date.toLocaleDateString());
    if (options.displayDay) {
        console.log("Dia", date.getDate());
    }
    if (options.displayMonth) {
        console.log("Mês", date.getMonth());
    }
    if (options.displayYear) {
        console.log("Ano", date.getFullYear());
    }
}
// se eu nao passar nada o proprio editor ja avisa que esta errado.
showInfo(new Date(), {
    displayDay: true,
    displayMonth: true,
    displayYear: false,
});
export {};
