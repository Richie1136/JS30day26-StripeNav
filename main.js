const triggers = document.querySelectorAll('.cool > li')
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top')

function handleEnter(event) {
  this.classList.add('trigger-enter')
  setTimeout(() => {
    this.classList.add('trigger-enter-active')
  }, 150);
  background.classList.add('open')

  const dropdown = this.querySelector('.dropdown')
  console.log(dropdown)
  const Navcoords = nav.getBoundingClientRect()
  const coords = dropdown.getBoundingClientRect()
  console.log(Navcoords)
  console.log(coords)
}

function handleLeave(event) {
  this.classList.remove('trigger-enter')
  setTimeout(() => {
    this.classList.remove('trigger-enter-active')
  }, 150);
  background.classList.remove('open')

}

triggers.forEach(trigger => {
  trigger.addEventListener('mouseenter', handleEnter)
  trigger.addEventListener('mouseleave', handleLeave)
})