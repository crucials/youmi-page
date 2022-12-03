const menu = document.querySelector('.navigation-menu')

export function openMenu() {
    menu?.classList.add('navigation-menu-opened')
}

export function closeMenu() {
    menu?.classList.remove('navigation-menu-opened')
}