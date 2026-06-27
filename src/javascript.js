// Passamos os parametros das funcoes , mas nao sabemos os tipos que elas estao recebendo. Ex.: o parametro date é um objeto, ou um array?

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

// se eu nao passar nenhum parametro , está sem problemas. Não tem seguranca nenhuma
showInfo(new Date(), {})
