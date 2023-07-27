// Função para animar o cachorro
function animateDog() {
    var dog = document.getElementById("dog");
    var position = -dog.clientWidth; // Posição inicial fora da janela à esquerda
    var direction = 1;
    var maxWidth = document.documentElement.scrollWidth; // Largura total da página

    // Função de animação
    function frame() {
        // Atualiza a posição do cachorro
        position += direction * 5; // Aumenta a quantidade de pixels para mover o cachorro

        // Verifica se o cachorro ultrapassou as bordas da página
        if (position >= maxWidth || position <= -dog.clientWidth) {
            // Vira o cachorro
            dog.style.transform = direction === 1 ? "scaleX(-1)" : "scaleX(1)";

            // Inverte a direção
            direction *= -1;
        }

        dog.style.left = position + "px";

        // Chama a próxima animação
        requestAnimationFrame(frame);
    }

    // Inicia a animação
    frame();
}

// Chama a função de animação quando a página carrega
window.onload = animateDog;