'use strict';

const numElements = document.querySelectorAll('.num');
const output = document.querySelector('.el--1');
const reset = document.querySelector('.reset');
let firstNum;
let secondNum;
let operation;
const equal = document.querySelector('.equal');
const multy = document.querySelector('.mult');

numElements.forEach(function (number) {
  number.addEventListener('click', function () {
    if (output.textContent == 0 && !operation) {
      output.textContent = number.textContent;
      firstNum = number.textContent;
      console.log(firstNum);
    } else if (output.textContent != 0 && !operation) {
      output.textContent = output.textContent + number.textContent;
      firstNum = output.textContent;
      console.log(firstNum);
    } else if (operation) {
      output.textContent = number.textContent;
      secondNum = number.textContent;
      console.log(secondNum);
    }
    // else if (output.textContent == 0 && operation) {
    //   output.textContent = number.textContent;
    //   secondNum = number.textContent;
    //   console.log(secondNum);
    // } else if (output.textContent != 0 && operation) {
    //   console.log('Hey!');
    //   output.textContent = output.textContent + number.textContent;
    //   secondNum = output.textContent;
    //   console.log(secondNum);
    // }
  });
});

multy.addEventListener('click', function () {
  console.log('*');
  operation = 'mult';
});

const mult = (a, b) => Number(a) * Number(b);
const divide = (a, b) => a / b;
const plus = (a, b) => a + b;
const minus = (a, b) => a - b;

equal.addEventListener('click', function () {
  if (operation === 'mult') {
    console.log('Finish');
    output.textContent = mult(firstNum, secondNum);
  } else if (operation === 'div') {
    output.textContent = divide(firstNum, secondNum);
  } else if (operation === 'plus') {
    output.textContent = plus(firstNum, secondNum);
  } else if (operation === 'minus') {
    output.textContent = minus(firstNum, secondNum);
  }
});

// RESET
reset.addEventListener('click', function () {
  console.log(reset);
  firstNum = 0;
  secondNum = 0;
  operation = 0;
  output.textContent = '0';
});
