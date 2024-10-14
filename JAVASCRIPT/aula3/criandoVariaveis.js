// 1- Criando variaveis

// Criei um programa que declare duas variaveis do tipo int e exiba o resultado na tela da soma

let num1 = 2
let num2 = 2

console.log(num1 + num2)

// criei um programa que declare uma variavel do tipo string  e exiba seu conteudo na tela

let letra = `String na tela`
console.log (`Estou na tela: ${letra}`)

// criei um programa que declare uma variavel do tipo boolean e  atribua a ela o valor "true". Em seguida, exiba o valor na tela

let numero1 = true
console.log (numero1)

// criei um programa que declare uma variavel do tipo numerica e atibua a ela um valor 3.1415 e exiba a variavel na tela 
let numero2 = 3.1415
console.log(`Numero exibido na tela: ${numero2}`)

// 2-Ultilizando os conceitos apresentados, pergunte ao usuario.
 //- nome - idade - onde mora 
let nome = prompt(`Qual seu nome?`)
let idade = prompt (`Qual a sua idade?`)
let Bairro = prompt (`Em qual bairro voce mora?`)

//passe o nome do usuario para todas as letras maiusculas

let maiusculaNome = nome.toUpperCase()
// Crie um programa que solicite ao usuario que digite dois numeros int e exiba a soma dos dois na tela
let primeiroN = Number(prompt(`Escreva um numero de 1 a 5?`))
let segundoN = Number(prompt(`Escreva um numero de 6 a 9`))
let res = (primeiroN + segundoN)
alert (`Resultado: ${res}`)

// 3- Aplicando métodos
//Crie uma variavel com seu nome

let nomeTodo = `Leticia Santos de Macedo`

// Depois use o metodo replace para troca o nome do meio pelo ultimo

let nomeTroca = nomeTodo.replace (`Santos`, ` de Macedo`)
// Crie uma estringue que apresente na tela
console.log(`Resultado: ${nomeTroca}`) 

//4 - Criei uma variavel e atribua valor numerico e 
//depois faça uma variavel desconto com o valor de 0.2 depois calcule

let valor1 = 50
let desconto = 0.2
let precoFinal = (valor1 - desconto)
console.log(precoFinal)

// 5 Pergunte ao usuário os valores da primeira prova (N1) e da segunda prova (N2).
let nota1 = Number(prompt(`Qual o valor da seu primeira nota ?`))
let nota2 = Number(prompt(`Qual o valor da sua segunda nota ?`))

/**Calcule a média do aluno.
 Utilize o operador ternário para informar se o aluno está aprovado ou reprovado,
considerando que a nota mínima para aprovação é 6 */

let media = (nota1 + nota2)/2
let resposta = media >= 6 ? `Passou` : `Reprovou`
console.log(`Sua nota foi: ${resposta}`)

//6 Crie um array contendo 5 dos seus jogos favoritos. Em seguida, acesse o segundo elemento
//desse array e converta esse valor para maiúsculas,

let array = [`Rayman`, `Crash`, `Mario`, `jogo1`, `jogo2`]
let segundoElemento = array.toUpperCase()[1]

console.log(`${segundoElemento}`)

//7  Criei uma variavel que armazene seu nome e sobrenome.
 let nomeP = `Leticia`
 let nomeS = `Santos`

 // depoois use essa variavel para criar um array

 let arrayGuarda = nomeS.split(` `)
 // use o console para apresentar seu soobrnome
 console.log(`Meu sobrenome é [1]`)



















