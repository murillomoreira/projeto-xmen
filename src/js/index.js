/* 
    O que precisamos fazer??? - Qunado passar o mouse em cima de cada personagem da lista tem que adicionar a borda azul de seleção na imagem pequeno do personagem e mostrar a  imagem, o nome e a descrição do personagem que está selecionado

-- OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem devemos selecioná-lo 
    1 passo - pegar o personagem no JS para poder verificar quando o usuario passar o mouse nele

    2 passo - adicionar a classe selecionado no personagem que o usuario passar o cursos do mouse

    3 passo - verificar se já existia um personagem selecionado. se sim, tem de remover a seleção


-- OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
    1 passo - pegar o elemento do personagem grande pra adicionar as informações nele    
    2 passo - alterar imagem do personagem grande
    3 passo - alterar o nome do personagem grande
    4 passo - alterar a descrição do personagem grande

*/

// objetivo 1 

// passo 1 - pegar os pesonagens no JS para poder verificar qunado o usuario passar o mouse nele
const personagens = document.querySelectorAll('.personagem');


// passo 2 - adicionar a classe selecionado no personagem que o usuario passar o cursos do mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        
        //passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        alterarImagemPersonagemSelecionado(personagem);

        // passo 3 - alterar o nome do personagem grande
        alterarNomePersonagemSelecionado(personagem);

        // passo 4 - alterar a descrição do personagem grande
        alterarDescricaoPersonagem(personagem);

    })
})


function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    // passo 2 - alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}