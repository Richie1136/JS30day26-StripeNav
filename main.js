const triggers = document.querySelectorAll('.cool > li')
const background = document.querySelector('.dropdownbackground')
const nav = document.querySelector('.top')

function handleEnter(event) {
  console.log("Hello")
}

function handleLeave(event) {
  console.log("Leave")
}

triggers.forEach(trigger => {
  trigger.addEventListener('mouseenter', handleEnter)
  trigger.addEventListener('mouseleave', handleLeave)

})