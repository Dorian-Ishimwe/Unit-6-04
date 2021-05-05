var a = inputA
var b = inputB
let h = 0
let number = 0

document.getElementById('button').addEventListener('click', Area)

function Area () {
  a = document.getElementById('inputA').value
  b = document.getElementById('inputB').value
  h = document.getElementById('inputH').value
  number = parseInt(h)

  number = (a * b / 2) + h
  alert(number)
}