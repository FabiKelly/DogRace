function salvarAvatar() {
    const avatarSelecionado = document.querySelector('input[name="avatar"]:checked');

    if (avatarSelecionado) {
        const avatarValue = avatarSelecionado.value;

        // Salvar a escolha do usuário usando cookies
        document.cookie = `avatar=${avatarValue}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    }
}
