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










