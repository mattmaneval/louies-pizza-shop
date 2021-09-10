import React from 'react';
import styled from 'styled-components';
import Logo from './icons/Logo';
import media from '../styles/media';
import theme from '../styles/theme';

const { color, fonts } = theme;

const FooterStyles = styled.footer`
  padding: 6em 0;

  .footer {
    &-logo {
      margin-right: 2em;
    }

    &-top,
    &-bottom {
      display: flex;
    }

    &-top {
      align-items: center;
    }

    &-bottom {
      align-items: center;
      color: ${color.foregroundDim};
      display: flex;
      font-family: ${fonts.fontAlt};
      padding: 2em 0 ;

      svg {
        width: 5em;
        height: auto;
        margin-right: 1.5em;

        @media ${media.secondary} {
          margin-bottom: 1.5em;
        }
      }
    }
  }

  .copyright {
    font-size: 0.7em;
    letter-spacing: 0.1em;

    a {
      text-decoration: underline;
      color: ${color.foregroundDim};
    }
  }
`;

const year = new Date().getFullYear();

const Footer = () => (
  <FooterStyles>
    <div className="wrap">
      <div className="footer-top">
        <div className="footer-logo">
          <Logo />
        </div>
        <div className="footer-contact">
          <a href="tel:419-237-3737">419-237-3737</a>
          <div className="address">
            <p>109 E. Main St.</p>
            <p>Fayette, Ohio</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">
          Copyright &#169;
          {' '}
          {year}
          {' '}
          Louie's Pizza Shop. All Rights Reserved. Site by
          {' '}
          <a rel="noreferrer" target="_blank" href="https://mattmaneval.com/">Matt Maneval</a>
        </div>
      </div>
    </div>
  </FooterStyles>
);

export default Footer;
