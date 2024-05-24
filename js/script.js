const foto = document.getElementById('foto')
function trocaFoto(value) {
    let novaFoto = "assets/" + value + ".webp"
    let tagAlt = value
    foto.src = novaFoto
    foto.alt = tagAlt
}