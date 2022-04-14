const triggers = document.querySelectorAll('.cool > li')
const background = document.querySelector('.dropdownbackground')
const nav = document.querySelector('.top')

function handleEnter(event) {
  this.classList.add('trigger-enter')
  setTimeout(() => {
    this.classList.add('trigger-enter-active')
  }, 150);
}

function handleLeave(event) {
  this.classList.remove('trigger-enter')
  setTimeout(() => {
    this.classList.remove('trigger-enter-active')
  }, 150);
}

triggers.forEach(trigger => {
  trigger.addEventListener('mouseenter', handleEnter)
  trigger.addEventListener('mouseleave', handleLeave)
})