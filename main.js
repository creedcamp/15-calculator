// and put them toward the "answer" inside of the html.
//the functions following it do the same, but for subtraction, multiplication, and division.
let add = document.querySelector("#add")
add.addEventListener("click", function (e) {
  e.preventDefault()
  const num1 = document.querySelector("#num1").value
  const num2 = document.querySelector("#num2").value
  let answer = document.querySelector("#answer")
  console.log(answer)
  return (answer.innerHTML = Number(num1) + Number(num2))
})

const subtract = document.querySelector("#sub")
subtract.addEventListener("click", function (e) {
  e.preventDefault()
  const num1 = document.querySelector("#num1").value
  const num2 = document.querySelector("#num2").value
  let answer = document.querySelector("#answer")
  return (answer.innerHTML = Number(num1) - Number(num2))
})

const multiply = document.querySelector("#multi")
multiply.addEventListener("click", function (e) {
  e.preventDefault()
  const num1 = document.querySelector("#num1").value
  const num2 = document.querySelector("#num2").value
  let answer = document.querySelector("#answer")
  return (answer.innerHTML = Number(num1) * Number(num2))
})

const divide = document.querySelector("#divi")
divide.addEventListener("click", function (e) {
  e.preventDefault()
  const num1 = document.querySelector("#num1").value
  const num2 = document.querySelector("#num2").value
  let answer = document.querySelector("#answer")
  return (answer.innerHTML = Number(num1) / Number(num2))
})
////////////
// .addEventListener("click", add(e))
// document.querySelector("#sub").addEventListener("click", subtract(e))
// document.querySelector("#multi").addEventListener("click", multiply(e))
// document.querySelector("#divi").addEventListener("click", divide(e))
