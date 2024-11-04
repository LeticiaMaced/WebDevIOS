let valorNum = [2,4,6,8,10]

let valorTexto=valorNum.map ((num)=>{
 console.log(`valor texto ${num.toString()}`);
}) 

let arraytexto = valorNum.map((num)=>{
   return num.toString() // estou me comprometendo a dar um retorno ao resultado 

})

console.log(typeof arraytexto[2]); // vai me falar o tipo do dado  
console.log(arraytexto[2]); // monstra o array na posição 6


// vai passar uma vez por todos os elementos do array 
// so pecisa de um paramentro não e igual ao foreach que tem tres 
// map cria uma nova variavel
// o nome do parametro pode ser qualquer um ou seja não precisa ser igual a variavel criada EX: valorNum, pode ser qualuqer coisa pois ele vai ser referir ao nome dos meus array [2,4,6,8,10]

