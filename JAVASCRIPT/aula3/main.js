//Metodos Strings
// Operador Urario so precisa de um valor o typeof e um exemplo 


let nome = `le`;
let idade = 23;
let matriculaAtv = true;

console.log( typeof nome);
console.log(typeof idade);
console.log(typeof matriculaAtv);

let res = idade >= 15 ? `Pode fazer o curso` : `Não pode fazer o curso`
console.log(`O aluno ${res}`)// Opradores ternario ? sim - :Não

let aluno = `sim`;
let matricula = aluno == `sim` ? `O aluno esta matriculado` : `O aluno não esta matriculado`;
console.log(matricula); // podemos nega a variavle (!)  no caso o aluno