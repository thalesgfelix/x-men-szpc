// Atalho: Selecionar o texto que deseja comentar e utilizar o "ctrl + ;"
const personagens = document.querySelectorAll('.personagem')

// passo 2: adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth' })
        }
        
        // passo 3: verificar se já existe personagem selecionado, se já, devemos remover a seleção dele.
        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');
        
        alterarImagemPersonagemSelecionado(personagem);

        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descPersonagem = document.getElementById('descricao-personagem');

        descPersonagem.innerText = personagem.getAttribute('data-description');
    });
}) // forEach = "para cada"




function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    console.log(imagemPersonagemGrande);
    const idPersonagem = personagem.attributes.id.value;
    console.log(idPersonagem);
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
// 01:48:37