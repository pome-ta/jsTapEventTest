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

const styleElement = document.createElement('style');
styleElement.innerHTML = `
  .logs p{
    display: inline;
  }
  .btn {
    height: 8rem;
    margin: 4rem;
    background-color: maroon;
  }
  .btn:active {
    background-color: teal;
  }`;

//document.body.prepend(styleElement);
document.head.appendChild(styleElement);

const logX = document.querySelector('#logX');
const logY = document.querySelector('#logY');

const btns = document.querySelectorAll('.btn');
for (const divBtn of btns) {
  //console.log(divBtn.id);
  divBtn.addEventListener(touchBegan, (event) => {
    event.preventDefault();
  });
  divBtn.addEventListener(touchMoved, (event) => {
    const target = event.target;
    const touches = event.touches[0];
    const rc = target.getBoundingClientRect();
    const x = (touches.clientX - rc.left) | 0.0;
    if (0.0 <= x && x < target.clientWidth) {
      logX.textContent = `${target.id}: ${x}`;
    }

    const y = (touches.clientY - rc.top) | 0.0;
    if (0.0 <= y && y < target.clientHeight) {
      logY.textContent = `${target.id}: ${y}`;
    }
  });
}
//console.log(btns);

/*
btns.addEventListener(touchMoved, (e) => {
  e.preventDefault();
  logX.textContent = e.touches[0].clientX;
  logY.textContent = e.touches[0].clientY;
});
*/

/*
document.body.addEventListener(touchMoved, (e) => {
  //console.log(e.target.tagName);
  //console.log(e.touches);
  e.preventDefault();
  logX.textContent = e.touches[0].clientX;
  logY.textContent = e.touches[0].clientY;
});
*/
/*
document.addEventListener(tapDown, (e) => {
  console.log(this);
});
*/
