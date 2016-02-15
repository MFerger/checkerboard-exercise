for (var i = 0; i < 3000; i++) {
  var body = document.querySelector('body');
  body.style.marginLeft = '-4px';
  body.style.marginRight = '-4px';
  body.style.marginTop = '-4px';
  body.style.marginBottom = '-4px';

  var redBox = document.createElement('div');
  redBox.style.width = '11.1%';
  redBox.style.float = 'left';
  redBox.style.paddingBottom = '11.1%';
  redBox.style.backgroundColor = 'red';

  var blackBox = document.createElement('div');
  blackBox.style.width = '11.1%';
  blackBox.style.float = 'left';
  blackBox.style.paddingBottom = '11.1%';
  blackBox.style.backgroundColor = 'black';

  if (i % 2 == 0) {
    body.appendChild(blackBox);
  } else {
    body.appendChild(redBox);
  }
};









// var grid = document.createElement('grid');
// grid.width = grid.height = 320;
// var context = grid.getContext('2d');
// for (var x = 0; x < 16; x++) for (var y = 0; y < 16; y++) {
//   context.fillStyle = (x + y) % 2 ? 'red' : 'black';
//   context.fillRect(40 * x, 40 * y, 40, 40)
// }
// document.body.appendChild(grid);
