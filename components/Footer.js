import React from 'react';
import styled from 'styled-components';
import Logo from './icons/Logo';
import MattManevalLogo from './icons/MattManevalLogo';
import media from '../styles/media';

const FooterStyles = styled.footer`
  padding: 6em 0;

  .footer {
    &-top,
    &-bottom {
      display: flex;
    }

    &-top {
      justify-content: space-between;
      align-items: center;
    }

    &-bottom {
      align-items: center;
      display: flex;
      padding: 12em 0 0;

      @media ${media.secondary} {
        align-items: flex-start;
        flex-direction: column;
        padding: 8em 0 0;
      }

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
    &-builder a {
      text-decoration: underline;
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
        <MattManevalLogo />
        <div className="copyright">
          <div>
            Copyright &#169;
            {' '}
            {year}
            {' '}
            Louie's Pizza Shop.
          </div>
          <div>All Rights Reserved.</div>
          <div className="copyright-builder">
            Site by
            {' '}
            <a rel="noreferrer" target="_blank" href="https://mattmaneval.com/">Matt Maneval</a>
          </div>
        </div>
      </div>

    </div>
  </FooterStyles>
);

export default Footer;
