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
  const allCords = {
    height: coords.height,
    width: coords.width
  }
  background.style.setProperty('width', `${allCords.width}px`)
  background.style.setProperty('height', `${allCords.height}px`)

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