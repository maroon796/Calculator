'use strict';

const numElements = document.querySelectorAll('.num');
const output = document.querySelector('.el--1');

numElements.forEach(function (number) {
  number.addEventListener('click', function () {
    if (output.textContent == 0) {
      output.textContent = number.textContent;
    } else if (output.textContent != 0) {
      output.textContent = output.textContent + number.textContent;
    }
  });
});
