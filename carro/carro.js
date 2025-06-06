const carros = ["Uno", "Fusca", "Civic", "Onix", "Mobi"];

// Adicionar elementos ao array
carros.push("Kwid"); // Final
carros.unshift("Vectra"); // Início
console.log(carros);

// Remover elementos do array
carros.pop(); // Último
carros.shift(); // Primeiro
console.log(carros);

// Remover um item do meio ("Fusca")
carros.splice(carros.indexOf("Fusca"), 1);
console.log(carros);

// Adicionar "Astra" no índice 2
carros.splice(2, 0, "Astra");
console.log(carros);

// Percorrer os elementos de maneira alternativa
console.log(carros.join(" | ")); // Usando `join`

// Outra forma de percorrer o array
for (const carro of carros) {
  console.log(`Carro: ${carro}`);
}
