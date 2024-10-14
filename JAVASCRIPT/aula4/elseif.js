
let nota1, nota2, media, faltas
nota1 = 9
nota2 = 7
faltas = 5

media = (nota1 + nota2)/2
if (media >= 7 && faltas <= 5) {
    console.log(`Aprovado`)
   
} else if (media >=6.5 && faltas <5) {
    console.log(`Aprovado Conselho`) 

}else if (media >6  && faltas <5) {

    console.log(`Atividade ${media}`)
    media += 0.5
    console.log(media)  
}else{
    console.log(`Reprovado`)    
}

// podemos usar assim, porem o codigo pode ficar um pouco bagunçado as veze e bom ver se não podemos usar outra função

     /**
      * &&
      * v + f = f
      * f + v = f
      * v + v = v
      * f + f = f
      */

     /**
      * ||
      * v + f = v
      * f + v = v
      * v + v = v
      * so precisa ser  vdd
      */