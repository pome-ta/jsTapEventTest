'use strict';

// todo: MouseEvent TouchEvent wrapper
const { touchBegan, touchMoved, touchEnded } = {
  touchBegan:
    typeof document.ontouchstart !== 'undefined' ? 'touchstart' : 'mousedown',
  touchMoved:
    typeof document.ontouchmove !== 'undefined' ? 'touchmove' : 'mousemove',
  touchEnded:
    typeof document.ontouchend !== 'undefined' ? 'touchend' : 'mouseup',
};

const logX = document.querySelector('#logX');
const logY = document.querySelector('#logY');
const btns = document.getElementsByClassName('btn');
//console.log(btns);

document.body.addEventListener(touchBegan, (e) => {
  //console.log(e.target.tagName);
  console.log(e.touches);
  //logX.textContent = 
});

/*
document.addEventListener(tapDown, (e) => {
  console.log(this);
});
*/
