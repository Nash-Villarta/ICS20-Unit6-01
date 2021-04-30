//  Setting the values of the variables
let base = 0
let height = 0
let basetwo = 0
const half = 0.5
let area = 0

document.getElementById('button').addEventListener('click', calculation)
//  Looking for the numbers within the input once clicked
function calculation () {
  base = document.getElementById('inputbase').value
  base = parseInt(base)
  height = document.getElementById('inputheight').value
  height = parseInt(height)
  basetwo = document.getElementById('inputbasetwo').value
  basetwo = parseInt(basetwo)
  //  Like with math, starting off with addition of the two base values, then divide them by two, and then following by multiplying them by the height to get the area of a trapezoid.
  area = base + basetwo
  area = area * half
  area = area * height
  document.getElementById('textbox').innerHTML = area
  alert(area)
}
