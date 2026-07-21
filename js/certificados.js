const projetos = [
    {
        nome: "HTML",
        imagem: "assets/imagens/Certificados/Certificado - HTML - Front End Club.png",

    },
    {
        nome: "CSS",
        imagem: "assets/imagens/Certificados/css.png",

    },
    {
        nome: "JavaScript",
        imagem: "assets/imagens/Certificados/js.png",

    },
    {
        nome: "nodeJs",
        imagem: "assets/imagens/Certificados/Node js.png",

    },
    {
        nome: "ciencia de dados",
        imagem: "assets/imagens/Certificados/ciencia de dados.png",

    },
    {
        nome: "GIT & GitHub",
        imagem: "assets/imagens/Certificados/Certificado - Git & GitHub - Front End Club.png",

    },
  
    {
        nome: "EXCEL",
        imagem: "assets/imagens/Certificados/Excel-na-Prática.jpg",

    },
    {
        nome: "HARDWARE SOFTWARE",
        imagem: "assets/imagens/Certificados/Fundamentos-de-TI-Hardware-e-Software (1).jpg",

    },
    {
        nome: "LGPD",
        imagem: "assets/imagens/Certificados/Lei-Geral-de-Proteção-de-Dados-_LGPD_.jpg",

    },
    {
        nome: "SEG. DA TECNOLOGIA DA INFORMAÇÃO",
        imagem: "assets/imagens/Certificados/Segurança-em-Tecnologia-da-Informação.jpg",

    },

    {
        nome: "INGLES",
        imagem: "assets/imagens/Certificados/CERTIFICADO 1 inglês .jpg",

    },

]


const listaHTML = document.querySelector(".caixa-certificados");
  
  
  function renderizarProdutos() {
    listaHTML.innerHTML = ""; 
  
    
    projetos.forEach(item => { 
      
      
      const li = document.createElement("li"); 
      
     
      li.classList.add("projeto"); 
      li.classList.add("card-produto");
  
      li.innerHTML = `
        
        <ul class="caixa-certificados">

            <li class="certificados">

        <img class="img-certificado" src="${item.imagem}">

             </li>

        </ul>
      `;
  
      listaHTML.appendChild(li);
    });
  }
  
  // 4. Executa a renderização
  renderizarProdutos();