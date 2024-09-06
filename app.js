function pesquisar() {
    // Seleciona a seção HTML com o ID "resultados-pesquisa" e armazena na variável "section"
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de alguma planta</p>"  
      return  
    }
    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
  
    // Itera sobre cada elemento "dado" dentro da lista de dados (assumindo que "dados" é um array)
    for (let dado of dados) {

      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()

      //se no dado.titulo.includes campoPesquisa....
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
      // Concatena HTML para criar um novo elemento de resultado
      resultados += `
      <div class="item-resultado">
        <h2><a href="https://pt.wikipedia.org/wiki/Alface" target="_blank">${dado.titulo}</a></h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Veja como plantar</a>
      </div>
      `;      
      }
    }

    if (!resultados) {
        resultados = "Nada foi encontrado"

    }
    // Atribui o HTML gerado para a propriedade innerHTML da seção, substituindo o conteúdo anterior
    section.innerHTML = resultados;
}