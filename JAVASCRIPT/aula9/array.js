let nome = [`Letica`, `Luana`, `Laura`, `Lorena`]

console.log(nome[0]);
console.log(nome[1]);
console.log(nome[2]);
console.log(nome[3]);

// pop() = Remove o Ultimo elemento do array 
// push()= Adicionar um elemento ao array 
// shift() = Remove um elemento do meu primaieo array
// unshift() = Adicionar um elemento ao meu primeiro array 


let metodopop = nome.pop()
console.log(nome);
console.log(metodopop);

nome.push("Samuca")
console.log(nome);

let metodoshift = nome.shift()
console.log(nome);

let metounshift = nome.unshift()
console.log(nome);