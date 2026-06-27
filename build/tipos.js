/** Algo essencial no desenvolvimento de typescript é saber definir o tipo  de uma variável , método, função , objeto ou alguma expressão.
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
// Quando colocamos o sinal de interrogação (?) antes dos dois pontos, estamos dizendo que a variavel é opcional.
// Mas so pode definir parametros opcionais quando eles forem os ultimos
function saudacao(nome, idade) {
    return "Nome: " + nome + "Idade: " + idade;
}
saudacao("Peterson", 23);
// inferencia de variavel, o typescript ja identifica os tipos das variaveis mesmo nao declarando.
const animal = {
    name: "Garfield",
    age: 2,
};
// TYPE GUARD
const numeros = [1, 2, 3, 4, 54, 6];
const filter = (value) => value < 0;
numeros.filter(filter);
export {};
