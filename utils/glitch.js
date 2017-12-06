import { TimelineLite } from 'gsap';

function glitchInit(window) {
  const isSafari = /constructor/i.test(window.HTMLElement);
  if (isSafari) {
    window.document.getElementsByTagName('html')[0].classList.add('safari');
  }

  const glitched = window.document.querySelectorAll('.glitched');

  glitched.forEach((link) => {
    const turbVal = { val: 0.000001 };
    const turb = window.document.querySelectorAll('#filter-glitch feTurbulence')[0];
    const Tl = new TimelineLite({
      paused: true,
      onUpdate() {
        turb.setAttribute('baseFrequency', '0.00001 ' + turbVal.val); // Firefox bug is value is 0
      },
      onStart() {
        link.style.filter = 'url(#filter-glitch)';
      },
      onComplete() {
        link.style.filter = 'none';
      },
    });

    Tl.to(turbVal, 0.1, { val: 0.8 });

    link.addEventListener('mouseover', Tl.restart());
  });
}

export default glitchInit;
