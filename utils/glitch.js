import { TimelineLite } from 'gsap';

function glitchInit() {
  const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

  const glitched = document.querySelectorAll('.glitched');

  glitched.forEach(el => {
    const turbVal = { val: 0.000001 };
    const turb = document.querySelectorAll('#filter-glitch feTurbulence')[0];
    const disp = document.querySelectorAll('#filter-glitch feDisplacementMap')[0];
    const Tl = new TimelineLite({
      paused: true,
      onUpdate() {
        turb.setAttribute('baseFrequency', '0.00001 ' + turbVal.val);
        if(isSafari) disp.setAttribute('in2', 'warp');
      },
      onStart() {
        el.style.filter = 'url(#filter-glitch)';
      },
      onComplete() {
        el.style.filter = 'none';
      },
    });

    Tl.to(turbVal, 0.1, { val: 0.8 });

    el.addEventListener('mouseover', () => Tl.restart());
  });
}

export default glitchInit;
