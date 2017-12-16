import Head from 'next/head';
import { string } from 'prop-types';
import { TypographyStyle, GoogleFont } from 'react-typography';
import { typography } from '../../utils/typography';

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
        body {
          background: #fafafa;
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
