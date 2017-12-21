import { Component } from 'react';
import { TimelineMax, Power1 } from 'gsap';
import { Switch } from './Switch';
import { Canvas } from './Canvas';

class Toggle extends Component {
  static defaultProps = { onToggle: () => {} };
  state = { on: false };
  componentDidMount() {
    this.timeline
      .to(
        document.querySelector('#pole'),
        0.2,
        { y: '+=35', ease: Power1.easeInOut },
        0,
      )
      .to(
        document.querySelector('#darkshadow'),
        0.2,
        { y: '+=3', ease: Power1.easeInOut },
        0,
      )
      .to(
        document.querySelector('#lightshadow'),
        0.2,
        { y: '-=3', ease: Power1.easeInOut },
        0,
      )
      .reverse();
  }
  timeline = new TimelineMax();
  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on);
      },
    );
    this.timeline.reversed(!this.timeline.reversed());
  };
  render() {
    const { on } = this.state;
    return (
      <div className="toggle-container">
        <Canvas on={on} />
        <Switch on={on} onClick={this.toggle} />
        <style jsx>
          {`
            .toggle-container {
              text-align: right;
              margin-top: 10px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Toggle;
