const navlinks = document.querySelectorAll('.nav-link')

function activeNav() {
    navlinks.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
}

navlinks.forEach(l=> l.addEventListener('click', activeNav))

activeNav()