const triggers = document.querySelectorAll('.cool > li')
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top')

function handleEnter(event) {
  this.classList.add('trigger-enter')
  setTimeout(() => {
    if (this.classList.contains('trigger-enter')) {
      this.classList.add('trigger-enter-active')
    }
  }, 150);
  background.classList.add('open')

  const dropdown = this.querySelector('.dropdown')
  const Navcoords = nav.getBoundingClientRect()
  const coords = dropdown.getBoundingClientRect()
  const allCords = {
    height: coords.height,
    width: coords.width,
    top: coords.top - Navcoords.top,
    left: coords.left - Navcoords.left
  }
  background.style.setProperty('width', `${allCords.width}px`)
  background.style.setProperty('height', `${allCords.height}px`)
  background.style.setProperty('transform', `translate(${allCords.left}px, ${allCords.top}px)`)

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