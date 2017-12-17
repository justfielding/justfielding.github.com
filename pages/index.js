import React from 'react';
import { Page, Meta, Header } from '../components';
import glitchInit from '../utils/glitch';

export default class extends React.Component {
  componentDidMount() {
    glitchInit();
  }

  render() {
    return (
      <Page>
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
        <p>
          Hello, I&#39;m Fielding Johnston, a design-minded full stack software engineer
          working in the industry since 2005. Follow me on{' '}
          <a href="https://github.com/fielding/" className="glitched">
            github
          </a>,{' '}
          <a href="https://git.imbue.studio/fielding" className="glitched">
            git.imbue.studio
          </a>, and{' '}
          <a href="https://codepen.io/fielding" className="glitched">
            codepen
          </a>{' '}
          to see my latest work and inspiration. Check out my{' '}
          <a className="glitched" href="https://justfielding.com/resume.pdf">
            resume
          </a>{' '}
          and connect with me on{' '}
          <a href="https://linkedin.com/in/fieldingjohnston" className="glitched">
            linkedin
          </a>{' '}
          if you want to get to know me better.
        </p>
        <p>
          I am available for hire for both freelance and full time positions, and
          willing to relocate for the right opportunity. Feel free to get in touch
          with me at{' '}
          <a href="mailto:hello@justfielding.com" className="glitched">
            hello@justfielding.com
          </a>.
        </p>
        <style jsx>{`
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
