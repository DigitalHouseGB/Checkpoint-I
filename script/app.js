let enviar = document.querySelector("#enviar")

let title = document.getElementById("titulo")

let description = document.getElementById("descricao")

let link = document.getElementById("link")

let validacaoLetras = document.querySelectorAll(".numerosLetras")

let regexURL = /(https?:\/\/[^\s]+)/g



function validaCampos() {
    title.addEventListener("focus", function () {
        if (title.value.length < 5) {
            title.style.borderColor = "red"
        }
    })
    title.addEventListener('blur', function () {
        title.style.borderColor = "#373636"
        validacaoLetras[0].style.display = "none"
    })
    title.addEventListener('keydown', function () {
        if (title.value.length > 2) {
            title.style.border = "solid 2px rgb(0, 255, 64)"
            validacaoLetras[0].style.display = "none"
        } else {
            title.value.length <= 4
            title.style.border = "solid 2px red"
            validacaoLetras[0].style.display = "block"
        }
    })


    description.addEventListener("focus", function () {
        if (description.value.length < 5) {
            description.style.borderColor = "red"
        }
    })
    description.addEventListener('blur', function () {
        description.style.borderColor = "#373636"
        validacaoLetras[1].style.display = "none"
    })
    description.addEventListener('keydown', function () {
        if (description.value.length < 3) {
            description.style.border = "solid 2px red"
            validacaoLetras[1].style.display = "block"
        } else {
            description.style.border = "solid 2px rgb(0, 255, 64)"
            validacaoLetras[1].style.display = "none"
        }
    })

    if (title.value.length && description.value.length < 4 || description.value.length && title.value.length < 4) {
        console.log("Insira mais de 4 caracteres")
    }
    else {

        enviar.setAttribute("disabled", true)
    }
}
function validaTodos() {

    if (title.value.length > 3 && description.value.length > 3 && regexURL.test(link.value)) {
        enviar.addEventListener("mouseover",function(){
            enviar.style.backgroundColor = "#00ff40"
        })
        enviar.addEventListener("mouseout",function(){
            enviar.style.backgroundColor = "rgb(36, 34, 34)"
        })

        link.style.border = "solid 2px rgb(0, 255, 64)"
        validacaoLetras[2].style.display = "none"
        enviar.removeAttribute("disabled")


    }
    else {
        link.style.borderColor = "red"

    }

    link.addEventListener('keydown', function () {
        validacaoLetras[2].style.display = "block"
    })
    link.addEventListener('blur', function () {
        link.style.borderColor = "#373636"
        validacaoLetras[2].style.display = "none"
    })

}















