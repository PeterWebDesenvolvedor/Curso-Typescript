/** Algo essencial no desenvoilviemnto de typescript é saber definir o tipo  de uma variável , método, função , objeto ou alguma expressão.
 * Para isso vamos usar as anotações de tipo: type-annotations
 */
// criando uma variavel
const name = "Peterson";
const idade = 23;
const gay = false;
const qualquerTipo = [23, "2314f"]; // Não é recomendado usar any nos programas, a menos quie seja muito necessário, porque senao perde o sentido de usar Typescript, use Javascript então
const naoEnumero = NaN;
const infinito = Infinity;
const indefinido = undefined;
console.log("Nome: " + name + "\n" + "Idade: " + idade + "\n" + "É Gay? " + gay);
console.log("Qualquer tipo: " + qualquerTipo);
// Estamos tipando os parametros e o retorno da funcao dessa forma
function soma(a, b) {
    return a + b;
}
export {};
