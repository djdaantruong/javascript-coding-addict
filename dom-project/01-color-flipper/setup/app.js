// simple
// TODO:
// find btn, color element
// add click event to btn
// update value
// create func get random color

const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
  const randomColor = getRandomColor()
  document.body.style.backgroundColor = colors[randomColor]
  color.textContent = colors[randomColor]
})

function getRandomColor() {
  return Math.floor(Math.random() * colors.length)
}
