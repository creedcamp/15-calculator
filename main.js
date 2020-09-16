//const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function add(event) {
  event.preventDefault()
  const nums1 = document.querySelector("#nums1").value
  const nums2 = document.querySelector("#nums2").value
  let answer = document.querySelector("#answer")
  return (answer.innerHTML = Number(num1) + Number(num2))
}
document.querySelector("#add").addEventListener("#click", add)
function subtract(e) {
  e.preventDefault()
  const num1 = document.querySelector("#num1").value
  const num2 = document.querySelector("#num2").value
  let answer = document.querySelector("#answer")
  return (answer.innerHTML = Number(num1) - Number(num2))
}
document.querySelector("#sub").addEventListener("#click", subtract)
function multiply(e) {
  e.preventDefault()
  const num1 = document.querySelector("#num1").value
  const num2 = document.querySelector("#num2").value
  let answer = document.querySelector("#answer")
  return (answer.innerHTML = Number(num1) * Number(num2))
}
document.querySelector("#mult").addEventListener("#click", multiply)
function divide(e) {
  e.preventDefault()
  const num1 = document.querySelector("#num1").value
  const num2 = document.querySelector("#num2").value
  let answer = document.querySelector("#answer")
  return (answer.innerHTML = Number(num1) / Number(num2))
}
document.querySelector("#divi").addEventListener("#click", divide)
