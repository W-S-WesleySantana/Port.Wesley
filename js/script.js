

const projetos = [
    {
      nome: "Gw-Eletronico",
      modelo: "E-commerce Vanilla",
      imagem: "assets/imagens/logo projetos/Logo gw.jpg",
      descricao: "GW Eletrônico é uma aplicação web moderna e responsiva voltada para o comércio ou gerenciamento de produtos eletrônicos. Desenvolvido inteiramente com tecnologias web fundamentais (HTML, CSS e JavaScript), o projeto destaca-se pela interface intuitiva, carregamento rápido e foco na experiência do usuário (UX)."
    },
    {
      nome: "Gw-Eletronico",
      modelo: "E-commerce Vanilla",
      imagem: "assets/imagens/logo projetos/Logo gw.jpg",
      descricao: "GW Eletrônico é uma aplicação web moderna e responsiva voltada para o comércio ou gerenciamento de produtos eletrônicos. Desenvolvido inteiramente com tecnologias web fundamentais (HTML, CSS e JavaScript), o projeto destaca-se pela interface intuitiva, carregamento rápido e foco na experiência do usuário (UX)."
    },
    {
      nome: "Gw-Eletronico",
      modelo: "E-commerce Vanilla",
      imagem: "assets/imagens/logo projetos/Logo gw.jpg",
      descricao: "GW Eletrônico é uma aplicação web moderna e responsiva voltada para o comércio ou gerenciamento de produtos eletrônicos. Desenvolvido inteiramente com tecnologias web fundamentais (HTML, CSS e JavaScript), o projeto destaca-se pela interface intuitiva, carregamento rápido e foco na experiência do usuário (UX)."
    },
    {
      nome: "Gw-Eletronico",
      modelo: "E-commerce Vanilla",
      imagem: "assets/imagens/logo projetos/Logo gw.jpg",
      descricao: "GW Eletrônico é uma aplicação web moderna e responsiva voltada para o comércio ou gerenciamento de produtos eletrônicos. Desenvolvido inteiramente com tecnologias web fundamentais (HTML, CSS e JavaScript), o projeto destaca-se pela interface intuitiva, carregamento rápido e foco na experiência do usuário (UX)."
    }
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
  
        <a class="a-projeto" id="a-projeto1" href="#">Webflow</a>
        <a class="a-projeto" href="#">Figma</a>
        <a class="a-projeto" href="#">SEO</a>
        <br>
  
        <button class="bnt-projeto">GitHub</button>
        <button class="bnt-projeto2">Ver Online</button>
      `;
  
      listaHTML.appendChild(li);
    });
  }
  
  // 4. Executa a renderização
  renderizarProdutos();