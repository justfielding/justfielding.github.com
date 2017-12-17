import React from 'react';
import { Page, Meta, Header, Intro, Availability } from '../components';
import glitchInit from '../utils/glitch';

export default class extends React.Component {
  componentDidMount() {
    glitchInit();
  }

  render() {
    return (
      <Page>
        <Meta />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="svg-filters"
        >
          <defs>
            <filter id="filter-glitch">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.00001"
                numOctaves="1"
                result="warp"
              />
              <feOffset dx="-90" dy="-90" result="warpOffset" />
              <feDisplacementMap
                xChannelSelector="R"
                yChannelSelector="G"
                scale="30"
                in="SourceGraphic"
                in2="warpOffset"
              />
            </filter>
          </defs>
        </svg>

        <Header />
        <Intro />
        <Availability />
        <style jsx global>{`
        .svg-filters {
          position: absolute;
          visibility: hidden;
          width: 1px;
          height: 1px;
        }
        .glitched {
          -webkit-transition: background-color 0.1s ease-out;
          -moz-transition: background-color 0.1s ease-out;
          transition: background-color 0.1s ease-out;
          transform: translateZ(0);
          outline: 90px solid transparent !important;
        }
        .glitched:focus {
          outline: none;
        }
        `}</style>
      </Page>
    );
  }
}
