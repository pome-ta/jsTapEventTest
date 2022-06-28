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

const btns = document.getElementsByClassName('btn');
//console.log(btns);

document.body.addEventListener(touchBegan, function (e) {
  console.log(e.target.tagName);
});

/*
document.addEventListener(tapDown, (e) => {
  console.log(this);
});
*/
