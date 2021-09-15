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
    color: ${color.foregroundAlt};
    font-family: ${fonts.font};
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
    color: ${color.foreground};
    padding-bottom: 0.25em;
    margin-bottom: 1em;
    font-size: 4.5em;
    font-family: ${fonts.fontAlt};


    @media ${media.secondary} {
      font-size: 3em;
    }

    @media ${media.smallPhone} {
      font-size: 2.5em;
    }
  }

  p {
    a {
      ${mixins.animate};
      color: ${color.foreground};
      text-decoration: underline;
      cursor: pointer;

      &:hover {
        color: ${color.backgroundTert};
      }
    }
  }

  a {
    ${mixins.animate};
    color: ${color.foreground};
    text-decoration: none;
    cursor: pointer;
    font-size: 1.25em;

    &:hover {
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
      svg {
        width: 1em;
        height: 1em;
        fill: ${color.foreground};
      }
    }

    th {
      width: 10em;
      padding: ${space.quarterSpace};
    }

    td {
      padding: ${space.quarterSpace};
    }
  }

  .wrap {
    ${mixins.wrap}
  }

  .title {
    margin-bottom: ${space.quarterSpace};
    font-size: 1.5em;
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
