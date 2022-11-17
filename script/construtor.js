let formulario = document.querySelector("form")

let campoTitulo = document.querySelector(".inputGroup1")

let Construtor = function construtor(titulo,descricao,linkDaImagem){
    this.titulo = titulo,
    this.descricao = descricao,
    this.linkDaImagem = linkDaImagem
}

listaInputs = {
    inputs : [],
    adicionarInputs : function (input){
        this.inputs.push(input)
}
}

/* formulario.addEventListener("submit", function(e){
    e.preventDefault()
    listaInputs.adicionarInputs(new Construtor(title.value, description.value, link.value))
})
 */
