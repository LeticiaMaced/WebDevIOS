
let nota1, nota2, media, faltas
nota1 = 7
nota2 = 6
faltas = 5

media = (nota1 + nota2)/2
if (media >= 7 && faltas <= 5) {
  console.log(`Voce esta aprovado com media ${media} e a quantidade ${faltas}`)  
} else {
    console.log(`Voce esta reprovado com media ${media} e ${faltas} de faltas`)
}