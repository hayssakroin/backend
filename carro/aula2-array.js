// Função para calcular a média usando reduce()
const calcularMedia = (numeros) => {
    return numeros.reduce((acumulador, atual) => acumulador + atual, 0) / numeros.length;
};

const listaNumeros = [20, 50, 100, 10, 30];
console.log("Média da lista:", calcularMedia(listaNumeros));

// Ordenando a lista em ordem crescente
const listaOrdenada = [...listaNumeros].sort((a, b) => a - b);
console.log("Lista ordenada:", listaOrdenada);

// Removendo itens duplicados de uma lista
const listaDuplicados = [10, 20, 10, 30, 20, 50, 100];
const listaSemDuplicados = [...new Set(listaDuplicados)];
console.log("Lista sem duplicados:", listaSemDuplicados);

// Transformando números em strings formatadas
const listaFormatada = listaNumeros.map(num => `Número: ${num}`);
console.log("Lista formatada:", listaFormatada);

// Filtrando apenas números pares
