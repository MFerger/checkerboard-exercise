for (var i = 0; i < 100; i++) {
  var body = document.querySelector('body');
  body.style.marginLeft = '-4px';
  body.style.marginRight = '-4px';
  body.style.marginTop = '-4px';
  body.style.marginBottom = '-4px';

  body.style.backgroundImage = 'linear-gradient(blue, red)';
  var redBox = document.createElement('div');
  redBox.style.width = '11.1%';
  redBox.style.float = 'left';
  redBox.style.paddingBottom = '11.1%';
  redBox.style.backgroundColor = 'red';
  redBox.style.opacity = '0.5';

  var blackBox = document.createElement('div');
  blackBox.style.width = '11.1%';
  blackBox.style.float = 'left';
  blackBox.style.paddingBottom = '11.1%';
  blackBox.style.backgroundColor = 'black';
  blackBox.style.opacity = '0.5';

  if (i % 2 == 0) {
    body.appendChild(blackBox);
  } else {
    body.appendChild(redBox);
  }
};
