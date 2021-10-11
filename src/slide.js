export function hamburger() {
    const menuBtn = document.getElementById('menu-btn');
    const menuBar = document.getElementById('menu-bar')
    const closeBtn = document.getElementById('close-menu')


    // show the menu bar 
    menuBtn.addEventListener('click', () => {
        menuBar.classList.add('show')
        document.body.classList.add('dark')
    })

    // close the menu bar
    closeBtn.addEventListener('click', () => {
        menuBar.classList.remove('show')
        document.body.classList.remove('dark')
    })

}