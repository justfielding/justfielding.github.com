import Head from 'next/head';
import { string } from 'prop-types';
import { TypographyStyle, GoogleFont } from 'react-typography';
import { typography } from '../../utils/typography';

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
      <script src="https://preview.vidy.sh/e6d39f52dcb60612c43fe3596a88bee0/embed.min.js" data-appid="auto" async></script>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
    </Head>
    <style jsx global>
      {`
        ::selection {
          color: white;
          background: rgba(190, 36, 70, 1);
        }
        ::-moz-selection {
          color: white;
          background: rgba(190, 36, 70, 1);
        }
        html {
          overflow-y: auto;
        }
        body {
          background: #fafafa;
          margin: 0 36px;
          transition: all 0.2s ease-in-out;
        }
        body.night {
          background: #131417;
          color: #fafafa;
        }
        a {
          color: rgba(190, 36, 70, 1);
          font-weight: bold;
          -webkit-font-smoothing: antialiased;
          border: none;
          text-decoration: none;
          user-select: none;
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
