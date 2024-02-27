function calcularSaldoRankeadas(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Exemplo de uso da função
let vitorias = 20;
let derrotas = 10;
let saldoRankeadas = calcularSaldoRankeadas(vitorias, derrotas);
console.log("O saldo de Rankeadas é:", saldoRankeadas);