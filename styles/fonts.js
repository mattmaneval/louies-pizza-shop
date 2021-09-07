import { css } from 'styled-components';

const Fonts = css`
  @font-face {
    font-family: 'cartonslab';
    src: url('/assets/fonts/carton-slab-webfont.woff2') format('woff2'),
         url('/assets/fonts/carton-slab-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'brandon_grotesquemedium';
    src: url('/assets/fonts/brandon_med-webfont.woff2') format('woff2'),
         url('/assets/fonts/brandon_med-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'brandon_grotesqueregular';
    src: url('/assets/fonts/brandon_reg-webfont.woff2') format('woff2'),
         url('/assets/fonts/brandon_reg-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export default Fonts;
