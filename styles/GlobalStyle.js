import { createGlobalStyle } from 'styled-components';
import Resets from './resets';
import Fonts from './fonts';
import mixins from './mixins';
import media from './media';
import theme from './theme';

const { space, color, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  ${Resets};
  ${Fonts};
  ${mixins};
  ${media};

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body {
    background-color: ${color.background};
    font-family: ${fonts.font};
    overflow-x: hidden;
  }

  body {
    position: relative;
    color: ${color.foreground};
    font-family: ${fonts.font};
    line-height: 1.4;
  }

  section {
    padding: 6em 0;
    display: inline-block;
    position: relative;
    clear: both;
    float: none;
    width: 100%;

    @media ${media.secondary} {
      padding: 3em 0;
    }
  }

  h1 {
    ${mixins.border};
    color: ${color.foregroundAlt};
    padding-top: calc(0.65em - 8px);
    margin-bottom: 0.65em;
    font-size: 4.5em;
    font-family: ${fonts.fontAlt};
    line-height: 1.2;

    @media ${media.secondary} {
      font-size: 3em;
    }

    @media ${media.smallPhone} {
      font-size: 2.5em;
    }
  }

  a {
    color: ${color.foreground};
    display: block;
    font-family: ${fonts.fontAlt};
    font-size: 1.25em;
    line-height: 1;
    padding: 0.1em 0;

    @media ${media.secondary} {
      font-size: 2.5em;
    }

    &:hover {
      ${mixins.animate}
      color: ${color.foregroundTert};
    }
  }

  table {
    text-align: left;
    margin-bottom: 3em;

    @media ${media.secondary} {
      width: 100%;
    }

    th, td {
      padding: ${space.quarterSpace} 0;

      svg {
        width: 1em;
        height: 1em;
        fill: ${color.foreground};
      }
    }

    th {
      width: 10em;

    }
  }

  .wrap {
    ${mixins.wrap}
  }

  .title {
    font-family: ${fonts.fontAlt};
    margin-bottom: ${space.quarterSpace};
    font-size: 1.5em;
    text-transform: uppercase;
  }

  .title-alt {
    font-family: ${fonts.fontAlt};
    font-size: 1em;
    margin-bottom: 1em;
    text-transform: uppercase;
  }

  .font-bold {
    font-family: ${fonts.fontAlt};
    text-transform: uppercase;
  }

  .gluten-free {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      margin-right: 0.4em;
    }
  }
`;

export default GlobalStyle;
