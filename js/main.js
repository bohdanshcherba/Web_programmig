
const menu = document.getElementById('nav_menu')

const toggleMenu = ()=>{
    if (menu.classList.contains('open')){
        menu.classList.remove('open')
    }else {
        menu.classList.add('open')
    }

}
