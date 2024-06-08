//Pega a medida de largura do viewport
const viewPortW = window.innerWidth
//Pega a medida de altura do viewport
const viewPortH = window.innerHeight
//Troca a cor dos veículos
const foto = document.getElementById('foto')
function trocaFoto(value) {
    let novaFoto = "assets/" + value + ".webp"
    let tagAlt = value
    foto.src = novaFoto
    foto.alt = tagAlt
}

//Ajusta o FOOTER na parte inferior do viewport

//Pega o elemento footer
const footer = document.getElementsByTagName('footer')
//Pega as dimensões do elemento footer
let footerCoordinates = footer[0].getBoundingClientRect();
//Adiciona a classe "fixed-bottom" ao footer, se sua base estiver em uma posição menor do que a altura do viewport
if (footerCoordinates.bottom < viewPortH) {
    footer[0].setAttribute('class', 'fixed-bottom')
}

//Menu responsivo

//Pega o botão no HTML
const btn = document.getElementById('btnMenu')
//Pega o menu no HTML
const Menu = document.getElementById('mainMenu')
//Variável de controle de exibição do menu
let displayMenu = false
//Listener do evento click no botão
btn.addEventListener("click", animate)
//Função que altera a classe do botão e troca as classes no menu
function animate() {
    //altera a classe do botão a cada iteração
    btn.classList.toggle('active')

    if (displayMenu == false) {
        //remove a classe "oculta"
        Menu.removeAttribute('class', 'oculta')
        //adiciona a classe "mostra"
        Menu.setAttribute('class', 'mostra')
        //atualiza a variável de controle
        displayMenu = true
    } else {
        //remove a classe "mostra"
        Menu.removeAttribute('class', 'mostra')
        //adiciona a classe "oculta"
        Menu.setAttribute('class', 'oculta')
        //atualiza a variável de controle
        displayMenu = false
    }
}
