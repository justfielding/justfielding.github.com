import Head from 'next/head';
import { string } from 'prop-types';
import { TypographyStyle, GoogleFont } from 'react-typography';
import { typography } from '../../utils/typography';
import { glitch } from '../../utils/glitch';

// Originals:
// link color: background: rgba(157, 201, 255, 0.32);
// text color: #2b343e
// background: #FFF

export const Meta = ({ description, title, url }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/static/favicon.ico" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js" />
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
    </Head>
    <style jsx global>
      {`
        ::selection {
          color: white;
          background: rgba(190, 36, 70, 0.99);
        }
        ::-moz-selection {
          color: white;
          background: rgba(190, 36, 70, 1);
        }

        body {
          background: #fafafa;
        }
        h1 {
          font-weight: 900;
        }
        h1 strong {
          color: rgba(190, 36, 70, 1);
        }
        .svg-filters {
          position: absolute;
          visibility: hidden;
          width: 1px;
          height: 1px;
        }

          .page {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
          }


        .glitched {
          -webkit-font-smoothing: antialiased;
          border: none;
          text-decoration: none;
          font-weight: bold;
          user-select: none;
          color: rgba(190, 36, 70, 1);
          -webkit-transition: background-color 0.1s ease-out;
          -moz-transition: background-color 0.1s ease-out;
          transition: background-color 0.1s ease-out;
          transform: translateZ(0);
          outline: 90px solid transparent !important;
        }
        .glitched:focus {
          outline: none;
        }
        .safari .glitched {
          -webkit-filter: none !important;
          filter: none !important;
        }
      `}
    </style>
  </div>
);

Meta.defaultProps = {
  title: 'Fielding Johnston',
  description: 'A full-stack developer and designer living in Arkansas.',
  url: 'https://justfielding.com',
};

Meta.propTypes = {
  title: string,
  description: string,
  url: string,
};

export default Meta;