// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

const menuListaContato = document.querySelector(".menu-lista-contato")
const menuListaDownload = document.querySelector(".menu-lista-download")
const cardsMontadoras = document.querySelector(".cards-montadoras")
const montadoras = [...cardsMontadoras.children]

menuListaContato.addEventListener("click", function () {
    ga("send", "event", "menu", "entre_em_contato", "link_externo")
})

menuListaDownload.addEventListener("click", function () {
    ga("send", "event", "menu", "download_pdf", "download_pdf")
})

montadoras.forEach(function (montadora) {
    $(montadora).click(function () {
        const { name } = montadora.dataset
        ga("send", "event", "analise", "ver_mais", name)
    })
})
