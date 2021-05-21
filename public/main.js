'use strict';

const {tapDown, tapMove, tapUp} = {
  tapDown: typeof document.ontouchstart !== 'undefined' ? 'touchstart' : 'mousedown',
  tapMove: typeof document.ontouchmove !== 'undefined' ? 'touchmove' : 'mousemove',
  tapUp: typeof document.ontouchend !== 'undefined' ? 'touchend' : 'mouseup',
}

const btns = document.getElementsByClassName('btn');
//console.log(btns);


document.body.addEventListener(tapDown, function(e) {
  console.log(e.target.tagName);
});

/*
document.addEventListener(tapDown, (e) => {
  console.log(this);
});
*/


