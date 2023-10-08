var sorteados = [];
var valorMaximo = 500;

function criarUnico(inicio, fim) {
    var sugestao;

    do {
        sugestao = Math.ceil(Math.random() * valorMaximo);
    } while (sugestao < inicio || sugestao > fim || sorteados.includes(sugestao));

    sorteados.push(sugestao);
    return sugestao;
}

var time = document.querySelector('.time');
var sortearNovo = document.getElementById('sortearNovo');
sortearNovo.addEventListener('click', function () {
    var inicio = parseInt(document.getElementById('inicio').value) || 1;
    var fim = parseInt(document.getElementById('fim').value) || valorMaximo;

    if (inicio > fim) {
        alert("O valor inicial deve ser menor ou igual ao valor final.");
        return;
    }

    novoNumero.innerHTML = "";
    time.style.display = "block";
    novoNumero.className = "vencedor animando";
    
    setTimeout(function () {
        novoNumero.className = "vencedor";
    }, 3000);

    // Adicionamos um intervalo para mostrar os números rapidamente antes de parar
    var intervalo = 100;
    var contador = 0;
    var intervaloID = setInterval(function () {
        novoNumero.innerHTML = criarUnico(inicio, fim);
        contador += intervalo;
        if (contador >= 3000) {
            clearInterval(intervaloID);
            time.style.display = "none";
            sorteados = []; // Resetamos a variável após cada sorteio
        }
    }, intervalo);
});

var novoNumero = document.getElementById('novoNumero');
