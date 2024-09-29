document.getElementById("menu-icon").addEventListener("click", function() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
});


document.addEventListener("DOMContentLoaded", function () {
    let camisaIndex = 0;
    let calcaIndex = 0;
    let tenisIndex = 0;

    // Seleciona todos os itens (camisas, calças, tênis)
    const camisas = document.querySelectorAll(".camisa-item");
    const calcas = document.querySelectorAll(".calca-item");
    const tenis = document.querySelectorAll(".tenis-item");

    // Função para atualizar a visibilidade dos itens
    function mostrarItem(itens, index) {
        // Esconde todos os itens
        itens.forEach(item => item.classList.remove("active"));
        // Mostra o item do índice atual
        itens[index].classList.add("active");
    }

    // Botões de navegação para camisas
    document.getElementById("nextCamisa").addEventListener("click", function () {
        camisaIndex = (camisaIndex + 1) % camisas.length;
        mostrarItem(camisas, camisaIndex);
    });

    document.getElementById("prevCamisa").addEventListener("click", function () {
        camisaIndex = (camisaIndex - 1 + camisas.length) % camisas.length;
        mostrarItem(camisas, camisaIndex);
    });

    // Botões de navegação para calças
    document.getElementById("nextCalca").addEventListener("click", function () {
        calcaIndex = (calcaIndex + 1) % calcas.length;
        mostrarItem(calcas, calcaIndex);
    });

    document.getElementById("prevCalca").addEventListener("click", function () {
        calcaIndex = (calcaIndex - 1 + calcas.length) % calcas.length;
        mostrarItem(calcas, calcaIndex);
    });

    // Botões de navegação para tênis
    document.getElementById("nextTenis").addEventListener("click", function () {
        tenisIndex = (tenisIndex + 1) % tenis.length;
        mostrarItem(tenis, tenisIndex);
    });

    document.getElementById("prevTenis").addEventListener("click", function () {
        tenisIndex = (tenisIndex - 1 + tenis.length) % tenis.length;
        mostrarItem(tenis, tenisIndex);
    });

    mostrarItem(camisas, camisaIndex);
    mostrarItem(calcas, calcaIndex);
    mostrarItem(tenis, tenisIndex);
});
