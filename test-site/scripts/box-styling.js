var one = document.querySelector('#chip1');
var two = document.querySelector('#chip2');

function outputWH(box) {
  var width = box.offsetWidth;
  var height = box.offsetHeight;
  box.textContent = 'Width: ' + width + 'px, Height: ' + height + 'px.'
}

outputWH(one);
outputWH(two);