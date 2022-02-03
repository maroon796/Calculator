'use strict';

const numElements = document.querySelectorAll('.num');
const output = document.querySelector('.el--1');
const reset = document.querySelector('.reset');
let firstNum;
let secondNum;
let operation;
const equal = document.querySelector('.equal');
const mult_ = document.querySelector('.mult');
const divide_ = document.querySelector('.divide');
const plus_ = document.querySelector('.plus');
const minus_ = document.querySelector('.minus');

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

// OPERATORS

mult_.addEventListener('click', function () {
  console.log('*');
  operation = 'mult';
});

divide_.addEventListener('click', function () {
  console.log('/');
  operation = 'div';
});

plus_.addEventListener('click', function () {
  console.log('+');
  operation = 'plus';
});

minus_.addEventListener('click', function () {
  console.log('-');
  operation = 'minus';
});

const mult = (a, b) => Number(a) * Number(b);
const divide = (a, b) => a / b;
const plus = (a, b) => Number(a) + Number(b);
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
