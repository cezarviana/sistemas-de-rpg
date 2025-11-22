let responseContainer = document.querySelector('.response-container'); // Seleciona o elemento HTML onde os cards serão exibidos.
let searchField = document.querySelector('.search input'); // Seleciona o campo de input da busca.
let rpgSystems = []; // Inicializa um array vazio para armazenar os dados carregados do JSON.

async function searchSystem() { // Define uma função assíncrona para buscar e filtrar os dados.
    // Se o array 'dados' estiver vazio, significa que os dados ainda não foram carregados.
    if (rpgSystems.length === 0) { // Verifica se os dados já foram carregados.
        try { // Inicia um bloco try...catch para tratar possíveis erros na requisição.
            let response = await fetch('js/data.json'); // Faz uma requisição para buscar o arquivo data.json.
            rpgSystems = await response.json(); // Converte a resposta em formato JSON e armazena no array 'dados'.
        } catch (error) { // Se ocorrer um erro na busca (ex: arquivo não encontrado).
            console.error("Erro ao buscar Sistema de RPG:", error); // Exibe o erro no console do navegador.
            responseContainer.innerHTML = "<p>Não foi possível carregar os Sistemas de RPG. Tente novamente mais tarde.</p>"; // Mostra uma mensagem de erro para o usuário.
            return; // Interrompe a execução da função.
        }
    }

    const searchedTerm = searchField.value.toLowerCase(); // Pega o valor digitado no campo de busca e converte para minúsculas.

    // Filtra o array 'dados' para encontrar itens que correspondam ao termo buscado.
    const results = dados.filter(data => // O método filter cria um novo array com os elementos que passam no teste.
        dado.nome.toLowerCase().includes(termoBuscado) || // Verifica se o nome do item inclui o termo buscado.
        dado.tipo.toLowerCase().includes(termoBuscado) || // Verifica se o tipo do item inclui o termo buscado.
        dado.caracteristicas.some(c => c.toLowerCase().includes(termoBuscado)) || // Verifica se alguma das características inclui o termo buscado.
        dado.usos.some(u => u.toLowerCase().includes(termoBuscado)) // Verifica se algum dos usos inclui o termo buscado.
    );

    renderizarCards(results); // Chama a função para exibir os cards com os resultados filtrados.
}

function renderizarCards(dadosParaRenderizar) { // Define a função que cria e exibe os cards na tela.
    cardContainer.innerHTML = ''; // Limpa o conteúdo atual do container de cards para exibir os novos resultados.

    if (dadosParaRenderizar.length === 0) { // Se o array de dados para renderizar estiver vazio...
        cardContainer.innerHTML = '<p class="card">Nenhum resultado encontrado para sua busca.</p>'; // ...exibe uma mensagem de "nenhum resultado".
        return; // Interrompe a execução da função.
    }

    for (let dado of dadosParaRenderizar) { // Itera sobre cada item do array de dados a ser renderizado.
        let article = document.createElement('article'); // Cria um novo elemento <article> para o card.
        article.classList.add('card'); // Adiciona a classe CSS 'card' ao novo elemento.
        article.innerHTML = ` // Define o conteúdo HTML do card usando os dados do item atual.
            <h2>${dado.nome}</h2>
            <p><strong>Tipo:</strong> ${dado.tipo}</p>
            <p><strong>Usos:</strong> ${dado.usos.join(', ')}</p>
            <p><strong>Criador(es):</strong> ${dado.criadores.join(', ')}</p>
            <p><strong>Ano de Criação:</strong> ${dado.anoDeCriacao}</p>
            <a href="${dado.link}" target="_blank">Saiba mais</a>
        `;
        cardContainer.appendChild(article); // Adiciona o card recém-criado ao container na página.
    }
}

// Chama a função 'iniciarPesquisa' quando o script é carregado.
// Como o campo de busca estará vazio, isso fará com que todos os dados sejam carregados e exibidos inicialmente.
iniciarPesquisa(); 