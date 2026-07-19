

const projetos = [
    {
      nome: "Gw-Eletronico",
      modelo: "E-commerce Vanilla",
      imagem: "assets/imagens/logo projetos/Logo gw.jpg",
      descricao: "GW Eletrônico é uma aplicação web de comércio e gestão de eletrônicos feita com HTML, CSS e JavaScript. O projeto destaca-se pela interface intuitiva, carregamento rápido e foco na experiência do usuário."
    },
    {
      nome: "WS Burguer",
      modelo: "E-commerce",
      imagem: "assets/imagens/logo projetos/WS Burguer.png",
      descricao: "WS Burguer é uma aplicação de hamburgueria que otimiza a gestão de pedidos usando forEach, map e reduce no JavaScript. O projeto destaca-se pela manipulação dinâmica do cardápio e cálculo de totais em tempo real, focando na experiência do usuário."
    },
    {
      nome: "WS sorteio",
      modelo: "arquitetura baseada em eventos",
      imagem: "assets/imagens/logo projetos/Sorteio de numeros.png",
      descricao: "WS Sorteios é uma aplicação web de geração numérica automatizada desenvolvida com HTML, CSS e JavaScript. O projeto destaca-se pela distribuição aleatória transparente, processamento instantâneo de dados e foco na usabilidade prática do usuário"
    },
   
  
  ];
  
 
  const listaHTML = document.querySelector(".ul-projetos");
  
  
  function renderizarProdutos() {
    listaHTML.innerHTML = ""; 
  
    
    projetos.forEach(item => { 
      
      
      const li = document.createElement("li"); 
      
     
      li.classList.add("projeto"); 
      li.classList.add("card-produto");
  
      li.innerHTML = `
        <img class="img-projeto" src="${item.imagem}" alt="imagem de ${item.nome}" >
  
        <p class="p-projeto">${item.modelo}</p>
  
        <h2 class="h2-projeto">${item.nome}</h2>
  
        <p class="p-texto-projeto">${item.descricao}</p>
  
        <a class="a-projeto" id="a-projeto1" href="#">VS code</a>
        <a class="a-projeto" href="#">Figma</a>
        <a class="a-projeto" href="#">SEO</a>
        <br> <br> 
  

        <a href="https://github.com/W-S-WesleySantana" target="_blank" rel="noopener noreferrer" class="bnt-projeto">GitHub</a>

        <a href="https://w-s-wesleysantana.github.io/Eletronicos-GW/" target="_blank" rel="noopener noreferrer" class="bnt-projeto2">Ver Online</a>
      `;
  
      listaHTML.appendChild(li);
    });
  }
  
  // 4. Executa a renderização
  renderizarProdutos();