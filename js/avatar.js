function salvarAvatar() {
    const avatarSelecionado = document.querySelector('input[name="avatar"]:checked');
    
    if (avatarSelecionado) {
        // a URL do gif do avatar selecionado
        const avatarUrl = avatarSelecionado.nextElementSibling.src;

        // Atualiza a imagem do cachorro no jogo com o avatar selecionado
        document.getElementById('dog').querySelector('img').src = avatarUrl;   
    }
}
