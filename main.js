//const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//the above would be used toward making the hard mode
//this first function makes add and has it grab the two values entered and put them toward the "answer" inside of the html.
//the functions following it do the same, but for subtraction, multiplication, and division.
function add(e) {
  e.preventDefault()
  const nums1 = document.querySelector("#nums1").value
  const nums2 = document.querySelector("#nums2").value
  let answer = document.querySelector("#answer")
  return (answer.innerHTML = Number(num1) + Number(num2))
}
document.querySelector("#add").addEventListener("click", add)
function subtract(e) {
  e.preventDefault()
  const num1 = document.querySelector("#num1").value
  const num2 = document.querySelector("#num2").value
  let answer = document.querySelector("#answer")
  return (answer.innerHTML = Number(num1) - Number(num2))
}
document.querySelector("#sub").addEventListener("click", subtract)
function multiply(e) {
  e.preventDefault()
  const num1 = document.querySelector("#num1").value
  const num2 = document.querySelector("#num2").value
  let answer = document.querySelector("#answer")
  return (answer.innerHTML = Number(num1) * Number(num2))
}
document.querySelector("#mult").addEventListener("click", multiply)
function divide(e) {
  e.preventDefault()
  const num1 = document.querySelector("#num1").value
  const num2 = document.querySelector("#num2").value
  let answer = document.querySelector("#answer")
  return (answer.innerHTML = Number(num1) / Number(num2))
}
document.querySelector("#divi").addEventListener("click", divide)
