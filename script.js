// Recupera o nome do usuário do localStorage
const nomeUsuario = localStorage.getItem("Publicador");

// Exibe o nome do usuário na página
const nomeUsuarioElement = document.getElementById("Publicador");
if (nomeUsuarioElement) {
    nomeUsuarioElement.textContent = nomeUsuario;
}

// JavaScript para obter o mês atual e inserir no elemento 'mes-atual'
document.addEventListener('DOMContentLoaded', function() {
    var meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    var dataAtual = new Date();
    var mesAtual = meses[dataAtual.getMonth()];

    var mesAtualElement = document.getElementById('mes-atual');
    if (mesAtualElement) {
        mesAtualElement.textContent = mesAtual;
    }

    // Outras partes do seu código

    // Mostrar data do envio do relatorio
    function atualizarDataNaDiv() {
        var dataAtual = new Date();
        var dia = String(dataAtual.getDate()).padStart(2, "0");
        var mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
        var ano = dataAtual.getFullYear();

        const dataAtualSpan = document.getElementById("Datadia");
        if (dataAtualSpan) {
            dataAtualSpan.innerHTML = `Data: ${dia}/${mes}/${ano}`;
        }
    }

    atualizarDataNaDiv();
    setInterval(atualizarDataNaDiv, 1000);

    // Extrair os parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const nomeUsuario = urlParams.get('Publicador');

    // Exibir o nome do usuário na página
    const nomeUsuarioDisplay = document.getElementById('nomeUsuario');
    if (nomeUsuarioDisplay) {
        nomeUsuarioDisplay.innerText = nomeUsuario;
    }

    // Exibir a imagem do usuário na página
    const imagemUsuario = urlParams.get('Imagem');
    const imagemUsuarioElement = document.getElementById('imagemUsuario');
    if (imagemUsuarioElement) {
        imagemUsuarioElement.src = imagemUsuario;
    }
});
