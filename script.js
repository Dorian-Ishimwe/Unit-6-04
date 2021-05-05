let a = 0
let b = 0
let h = 0
let number = 0

document.getElementById('button').addEventListener('click', Area)

function Area () {
  a = document.getElementById('input-a').value
  b = document.getElementById('input-b').value
  h = document.getElementById('input-h').value
  number = parseInt(h)

  number = (a * b / 2) + h
  alert(number)
}