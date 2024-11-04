// function calcularMadia(n1 = 0, n2 = 0){
//     let valorMedia = (n1 + n2)/2
//     return valorMedia
// }

// console.log(`A media e: ${calcularMedia(9,7)}`);

const Calcular = () => {
    let alturaa = Number(document.querySelector(`#alturaa`).value)
    let peso = Number(document.querySelector(`#peso`).value)
    let res = document.querySelector(`p`)

    let imc = peso / (alturaa * alturaa)
    res.innerHTML = (`Seu imc: ${imc.toFixed(2)}`)}
