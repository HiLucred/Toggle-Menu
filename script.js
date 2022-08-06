const toggle = document.querySelectorAll('.toggle')
const nav = document.querySelector('nav')

for(const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show-menu')
  })
}