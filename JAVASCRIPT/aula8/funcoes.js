// function calcularMedia (nota1 =0, nota2 =0)//Podemos estipular o valor assim ele vai sempre ler o numero e não string 
// {

//     let media = (nota1 + nota2 )/2 
//     console.log(`A media do aluno: ${media}`);
// }

// calcularMedia(8,10)


// Função para converter euros para reais
function converterEuroParaReal(euros, taxaDeCambio) {
    return euros * taxaDeCambio;
}

// Exemplo de uso
const euros = 100; // valor em euros
const taxaDeCambio = 5.5; // exemplo de taxa de câmbio (1 euro = 5,5 reais)

const reais = converterEuroParaReal(euros, taxaDeCambio);
console.log(`${euros} euros são ${reais.toFixed(2)} reais.`);