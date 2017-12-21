import { Component } from 'react';

export class Canvas extends Component {
  componentDidMount() {
    this.pi2 = Math.PI * 2;
    this.$ = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.arr = new Array(500).fill().map(() => ({
      position: {
        x: this.random(this.canvas.width),
        y: this.random(this.canvas.height),
      },
      velocity: {
        x: this.binRandom(0.5) ? this.random(1) : this.random(-1),
        y: this.binRandom(0.5) ? this.random(1) : this.random(-1),
      },
      size: this.random(1) + 2,
      opacity: this.random(1) + 0.3,
    }));
  }
  componentDidUpdate() {
    this.updateCanvas();
  }
  random = n => Math.random() * n;
  binRandom = n => Math.random() < n;
  updateCanvas = () => {
    (this.canvas.height !== window.innerHeight || this.canvas.width !== window.innerWidth) && (this.canvas.width = window.innerWidth, this.canvas.height = window.innerHeight);
    if (this.props.on) {
      this.$.fillStyle = '#131417';
      this.$.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.arr.forEach(particle => {
        particle.position.x += particle.velocity.x;
        particle.position.y += particle.velocity.y;
        if (particle.position.x > this.canvas.width || particle.position.x < 0) particle.velocity.x *= -1;
        if (particle.position.y > this.canvas.height || particle.position.y < 0 ) particle.velocity.y *= -1;

        this.$.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        this.$.beginPath();
        this.$.arc(particle.position.x, particle.position.y, particle.size, 0, this.pi2);
        this.$.closePath();
        this.$.fill();
      });
      requestAnimationFrame(this.updateCanvas);
    } else {
      this.$.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
  render() {
    return (
      <canvas ref={node => (this.canvas = node)}>Canvas not supported
        <style jsx>
          {`
            canvas {
                display: block;
                position: fixed;
                top: 0;
                left: 0;
                z-index: -1;
              }
          `}
        </style>
      </canvas>
    );
  }
}

export default Canvas;
