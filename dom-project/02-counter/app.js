//my solution
// const value = document.getElementById('value')
// const decrease = document.querySelector('.decrease')
// const reset = document.querySelector('.reset')
// const increase = document.querySelector('.increase')

// decrease.addEventListener('click', function () {
//   count -= 1
//   value.textContent = count
//   span.body.style.color = 'red'
// })

// reset.addEventListener('click', function () {
//   count = 0
//   value.textContent = count
// })

// increase.addEventListener('click', function () {
//   count += 1
//   value.textContent = count
//   span.body.style.color = 'green'
// })

//teacher solution
let count = 0

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList

    if (styles.contains('decrease')) {
      count--
    } else if (styles.contains('increase')) {
      count++
    } else {
      count = 0
    }

    if (count > 0) {
      value.style.color = 'green'
    }
    if (count < 0) {
      value.style.color = 'red'
    }
    if (count === 0) {
      value.style.color = 'black'
    }

    value.textContent = count
  })
})
