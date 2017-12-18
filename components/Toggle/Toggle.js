import { Component } from 'react';
import { TimelineMax, Power1 } from 'gsap';

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
    return <Switch on={on} onClick={this.toggle} />;
  }
}

const Switch = ({ on, ...props }) => (
  <div className="switch-container">
    <svg
      id="switch"
      viewBox="0 0 88 148"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path stroke="#BE2446" strokeWidth="6" d="M0 0h88v148H0z" />
        <circle fill="#BE2446" fillRule="nonzero" cx="44" cy="20" r="4" />
        <path
          id="lightshadow"
          fillOpacity=".2"
          fill="#BE2446"
          fillRule="nonzero"
          d="M30 72h28v9H30z"
        />
        <path
          id="darkshadow"
          fillOpacity=".24999999"
          fill="#BE2446"
          d="M30 72h28v3H30z"
        />
        <path stroke="#BE2446" strokeWidth="3" d="M29 43h30v64H29z" />
        <path
          id="pole"
          stroke="#BE2446"
          strokeWidth="6"
          d="M31 46h26v23H31z"
        />
        <circle fill="#BE2446" fillRule="nonzero" cx="44" cy="128" r="4" />
      </g>
    </svg>
    <style jsx>
      {`
        svg {
          height: 48px;
        }
        #switch {
          cursor: pointer;
        }
        .switch-container {
          text-align: right;
          margin-top: 10px;
        }
      `}
    </style>
  </div>
);

export default Toggle;
