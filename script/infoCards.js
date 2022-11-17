let secao = document.querySelector("section")

let tituloCard = document.getElementById("nomeTitulo")
let descricaoCard = document.getElementById("descricao2")

title.addEventListener("blur", function () {
    if (title.value.length > 3) {
        tituloCard.innerHTML = title.value
        secao.style.display = "flex"
    } else {
        secao.style.display = "none"
    }
})

description.addEventListener("blur", function () {
    if (description.value.length > 3) {
        descricaoCard.innerHTML = description.value
        secao.style.display = "flex"
    } else {
        secao.style.display = "none"
    }
})

let div = document.querySelector("#imagemURL")


link.addEventListener("keyup", function () {
    div.innerHTML = `<img  src="${link.value}" alt="" width="100%" height="425px" id="imagemURL">`
})

