const sectionOQueERpg = document.querySelector('.o-que-e-rpg'); // Seleciona a seção "O que é RPG?" do HTML.
let responseContainer = document.querySelector('.response-container'); // Seleciona o elemento HTML onde os cards serão exibidos.
let searchField = document.querySelector('.search input'); // Seleciona o campo de input da busca.
const searchButton = document.querySelector('.search button'); // Seleciona o botão de busca.
let rpgSystems = []; // Inicializa um array vazio para armazenar os dados carregados do JSON.

async function searchSystem() { // Define uma função assíncrona para buscar e filtrar os dados.
    // Se o array 'dados' estiver vazio, significa que os dados ainda não foram carregados.
    if (rpgSystems.length === 0) { // Verifica se os dados já foram carregados.
        try { // Inicia um bloco try...catch para tratar possíveis erros na requisição.            
            let response = await fetch('src/js/data.json'); // Faz uma requisição para buscar o arquivo data.json.
            rpgSystems = await response.json(); // Converte a resposta em formato JSON e armazena no array 'dados'.
        } catch (error) { // Se ocorrer um erro na busca (ex: arquivo não encontrado).
            console.error("Erro ao buscar Sistema de RPG:", error); // Exibe o erro no console do navegador.
            responseContainer.innerHTML = "<p>Não foi possível carregar os Sistemas de RPG. Tente novamente mais tarde.</p>"; // Mostra uma mensagem de erro para o usuário.
            return; // Interrompe a execução da função.
        }
    }    

    const searchedTerm = searchField.value.toLowerCase(); // Pega o valor digitado no campo de busca e converte para minúsculas.

    // Filtra o array 'dados' para encontrar itens que correspondam ao termo buscado.
    const results = rpgSystems.filter(data => // O método filter cria um novo array com os elementos que passam no teste.
        data.nome.toLowerCase().includes(searchedTerm) ||
        data.descricao.toLowerCase().includes(searchedTerm) ||
        data.data_criacao.toLowerCase().includes(searchedTerm) ||
        data.editora.toLowerCase().includes(searchedTerm) ||
        data.tipo_de_sistema.toLowerCase().includes(searchedTerm) ||
        data.genero.toLowerCase().includes(searchedTerm) ||
        data.foco_narrativo.toLowerCase().includes(searchedTerm) ||
        data.tags.some(tag => tag.toLowerCase().includes(searchedTerm)) // Verifica se alguma das tags inclui o termo buscado.
    );

    sectionOQueERpg.style.display = 'none'; // Oculta a seção "O que é RPG?" quando uma busca é realizada.

    renderSystems(results); // Chama a função para exibir os cards com os resultados filtrados.
}

function renderSystems(systemToRender) { // Define a função que cria e exibe os cards na tela.
    responseContainer.innerHTML = ''; // Limpa o conteúdo atual do container de cards para exibir os novos resultados.

    if (systemToRender.length === 0) { // Se o array de dados para renderizar estiver vazio...
        responseContainer.innerHTML = '<p class="card">Nenhum resultado encontrado para sua busca.</p>'; // ...exibe uma mensagem de "nenhum resultado".
        return; // Interrompe a execução da função.
    }

    systemToRender.forEach(system => { // Itera sobre cada item do array de dados a ser renderizado.
        let article = document.createElement('article'); // Cria um novo elemento <article> para o card.
        article.classList.add('card'); // Adiciona a classe CSS 'card' ao novo elemento.
        article.innerHTML = `
            <h2>${system.nome}</h2>
            <p><strong>Descrição:</strong> ${system.descricao}</p>
            <p><strong>Data de Criação:</strong> ${system.data_criacao}</p>
            <p><strong>Data do ultimo lançamento:</strong> ${system.data_ultimo_update}</p>
            <p><strong>Editora:</strong> ${system.editora}</p>
            <p><strong>Tipo de Sistema:</strong> ${system.tipo_de_sistema}</p>
            <p><strong>Gênero:</strong> ${system.genero}</p>
            <p><strong>Foco Narrativo:</strong> ${system.foco_narrativo}</p>
            <a href="${system.link}" target="_blank">Saiba mais</a>
            <p><strong>Tags:</strong> ${system.tags.join(', ')}</p>
        `;
        responseContainer.appendChild(article); // Adiciona o card recém-criado ao container na página.
    });
}

async function loadInitialData() {
    if (rpgSystems.length === 0) {
        let response = await fetch('src/js/data.json');
        rpgSystems = await response.json();
    }
}

searchField.addEventListener('onclick', searchButton.onclick = searchSystem); // Adiciona um listener ao botão de busca para chamar a função searchSystem quando clicado.
loadInitialData();