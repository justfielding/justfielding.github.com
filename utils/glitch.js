import { TimelineLite } from 'gsap';

function getGlitchTimeline(el) {
  const isSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function(p) {
      return p.toString() === '[object SafariRemoteNotification]';
    })(!window['safari'] || safari.pushNotification) ||
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  const turbVal = { val: 0.000001 };
  const turb = document.querySelectorAll('#filter-glitch feTurbulence')[0];
  const disp = document.querySelectorAll(
    '#filter-glitch feDisplacementMap'
  )[0];
  const Tl = new TimelineLite({
    paused: true,
    onUpdate() {
      turb.setAttribute('baseFrequency', '0.00001 ' + turbVal.val); // Firefox bug is value is 0
      if (isSafari) disp.setAttribute('in2', 'warp');
    },
    onStart() {
      el.style.filter = 'url(#filter-glitch)';
    },
    onComplete() {
      el.style.filter = 'none';
    },
  });

  Tl.to(turbVal, 0.1, { val: 0.8 });
  return Tl;
}

function glitchInit() {
  const glitched = document.querySelectorAll('.glitched');
  const glitchedRandomInterval = document.querySelectorAll(
    '.js-random-interval.glitched'
  );

  glitched.forEach(el => {
    const Tl = getGlitchTimeline(el);
    el.addEventListener('mouseover', () => Tl.restart());
  });

  glitchedRandomInterval.forEach(el => {
    const Tl = getGlitchTimeline(el);
    setInterval(() => Tl.restart(), 2000 + Math.random() * 5000);
  });
}

export default glitchInit;
