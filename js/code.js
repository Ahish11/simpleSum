let arr = [];
let displayResult = document.querySelector('.result');
let submitBtn = document.getElementById('submit-Btn');
let sum = document.getElementById('sum');
let total;
submitBtn.addEventListener('click', () => {
  let inputText = document.getElementById('input-Text').value; //suggestion not showing
  let num = Number(inputText) //default format is string in input so converting into num
  arr.push(num);
  console.log(arr);
  //display result
  displayResult.append(` + `, num);
})
function displayResultFun(params) {
  total = arr.reduce(function (previousValSum, currentVal) {
    return previousValSum + currentVal
  }, 0)
  console.log('Total', total);
  sum.append(total);
}












