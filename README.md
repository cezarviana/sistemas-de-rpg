# 🎲 Sistemas de RPG

## 📝 Descrição do Projeto
**Sistemas de RPG** é um projeto front-end que funciona como uma enciclopédia interativa de sistemas de Role-Playing Game (RPG) de mesa. O site permite que os usuários busquem e filtrem uma vasta lista de RPGs, apresentando informações detalhadas sobre cada um, como gênero, editora e tipo de sistema.

O projeto foi desenvolvido para praticar a manipulação do DOM com JavaScript, o consumo de dados de um arquivo JSON local e a criação de uma interface responsiva e funcional.

Repositório do projeto: [Sistemas de RPG Repositório](https://github.com/cezarviana/sistemas-de-rpg)
Acesse o site aqui: [Sistemas de RPG](https://cezarviana.github.io/sistemas-de-rpg/)

## 🔎 Funcionalidades
- **Busca Dinâmica:** Permite que o usuário pesquise por nome, gênero, tags ou qualquer termo relacionado aos sistemas de RPG.
- **Renderização de Conteúdo:** Os resultados da busca são gerados dinamicamente com JavaScript e injetados na página, criando cartões de informação para cada sistema.
- **Base de Dados Local:** Todas as informações dos RPGs são carregadas a partir de um arquivo `data.json`, simulando o consumo de uma API.
- **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela, garantindo uma boa experiência em desktops e dispositivos móveis.
- **Links Sociais e Contato:** Rodapé com links para GitHub, LinkedIn e uma função para enviar e-mail.

## 🛠️ Ferramentas utilizadas
- **HTML5:** Estruturação semântica do conteúdo.
- **CSS3:** Estilização, layout com Flexbox e responsividade.
- **JavaScript (ES6+):** Manipulação do DOM, lógica de busca (`filter`, `map`, `includes`) e consumo de dados (`fetch`).
- **JSON:** Armazenamento dos dados dos sistemas de RPG.
- **Font Awesome:** Biblioteca de ícones utilizada no rodapé.
- **Git & GitHub:** Controle de versão e hospedagem do projeto.

## 🎨 Imagens do projeto
<div align="center">

**Visualização em Desktop**



<br>

**Visualização em Dispositivo Móvel**



</div>

## 💡 Decisões do projeto
1. **Fetch API para Dados Locais:** Foi utilizada a `Fetch API` para carregar os dados do arquivo `data.json`. Essa abordagem moderna simula uma requisição assíncrona a um servidor real e é uma prática padrão em desenvolvimento web para consumir APIs.

2. **Lógica de Busca Abrangente:** A função de busca foi projetada para ser flexível. Ela converte o termo de busca e os dados dos RPGs para letras minúsculas, permitindo uma comparação *case-insensitive*. A pesquisa verifica o nome, a descrição, o gênero e as tags de cada sistema, oferecendo resultados mais relevantes.
   ```javascript
   const filteredData = data.filter(system => {
       const searchTerm = input.toLowerCase();
       const tags = system.tags.join(' ').toLowerCase();
       // ... lógica de verificação
       return systemName.includes(searchTerm) || tags.includes(searchTerm) // ... etc
   });
   ```

3. **Criação Dinâmica de Elementos:** Em vez de ter HTML pré-escrito, os cartões de resultado são criados dinamicamente com JavaScript (`document.createElement`). Isso torna a aplicação mais flexível, pois a interface de resultados se adapta inteiramente aos dados recebidos, sem depender de uma estrutura fixa no `index.html`.

4. **Estrutura CSS Modular:** Assim como no projeto de referência, o CSS foi dividido em arquivos (`reset.css`, `variables.css`, `style.css`, `resposive.css`), o que facilita a manutenção e a organização dos estilos.

## 💦 Desafios e Aprendizados
- **Manipulação Assíncrona de Dados:** Lidar com a natureza assíncrona do `fetch` foi um aprendizado fundamental, garantindo que a lógica de busca e renderização só executasse após os dados serem completamente carregados.
- **Filtragem de Dados Complexos:** Desenvolver a lógica para filtrar os dados em múltiplos campos (nome, tags, etc.) foi um ótimo exercício para aprofundar o conhecimento em métodos de array como `filter`, `map` e `join`.
- **Performance na Renderização:** Para uma lista muito grande de resultados, a criação de muitos elementos no DOM pode impactar a performance. Embora não seja um problema neste projeto, ele serve como um ponto de partida para estudar técnicas de otimização, como virtualização de listas ou paginação.

## 💭 Possíveis atualizações futuras
- [ ] Adicionar filtros por categorias (ex: botões para "Fantasia", "Sci-Fi", "Terror").
- [ ] Implementar ordenação dos resultados (por nome, data de lançamento, etc.).
- [ ] Criar uma página de detalhes para cada sistema, acessível ao clicar em um cartão.
- [ ] Adicionar um indicador de "carregando" enquanto os dados são buscados.
- [ ] Implementar um "Modo Escuro" (Dark Mode).
- [ ] Otimizar a busca para destacar qual termo correspondeu ao resultado.

## 🚀 Como rodar o projeto
Este é um projeto estático de front-end, então você não precisa de um servidor complexo para executá-lo.

### Pré-requisitos
- **Navegador Web:** Qualquer navegador moderno como Chrome, Firefox ou Edge.
- **Git (Opcional):** Para clonar o repositório.

### Passos

1. **Clone o repositório (se estiver usando Git):**
   ```bash
   git clone https://github.com/cezarviana/sistemas-de-rpg.git
   ```
   Se não estiver usando Git, você pode baixar o projeto como um arquivo ZIP diretamente do GitHub.

2. **Navegue até a pasta do projeto:**
   ```bash
   cd sistemas-de-rpg
   ```

3. **Abra o arquivo `index.html`:**
   Abra o arquivo `index.html` diretamente no seu navegador de preferência para visualizar o site.

---