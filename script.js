'use strict';

const firstNum = 0;
const secondNum = 0;
const operationType = 0;
const result = document.querySelector('.el--1');
const division = document.querySelector('.el--5');
const one = document.querySelector('.el--10');

const plus = document.querySelector('.el--16');
const equal = document.querySelector('.el--17');

one.addEventListener('click', function () {
  result.textContent = '1';
  one.textContent = '1';
});

// Operations
equal.addEventListener('click', function () {});

plus.addEventListener('click', function (params) {});

// Result
division.addEventListener('click', function (x, y) {
  result.textContent = x / y;
});
