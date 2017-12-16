import Typography from 'typography';

export const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.45,
  scaleRatio: 4,
  googleFonts: [
    {
      name: 'Titillium+Web',
      styles: ['400', '700', '900'],
    },
    {
      name: 'Inconsolata',
      styles: ['400', '700'],
    },
  ],
  headerFontFamily: ['Titillium Web', 'sans-serif'],
  bodyFontFamily: ['Inconsolata', 'monospace'],
  bodyColor: '#1b1a19',
  includeNormalize: true,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    return {
      '@media only screen and (max-width:480px)': {
        html: {
          fontSize: '16px',
        },
      },
    }
  },
});

export default typography;
