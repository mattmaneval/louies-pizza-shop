import React from 'react';
import styled from 'styled-components';
import Logo from './icons/Logo';
import CallCta from './navigation/CallCta';
import media from '../styles/media';
import theme from '../styles/theme';

const { color, fonts } = theme;

const FooterStyles = styled.footer`
  padding: 6em 0;

  .footer {
    &-logo {
      margin-right: 2em;
    }

    &-top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2em;
    }

    &-top {
      align-items: center;
    }

    &-hours,
    &-address {
      margin: 0 2em 2em 0;

      p {
        @media ${media.secondary} {
          font-size: 1em;
        }
      }
    }

    &-address {
      @media ${media.secondary} {
        margin: 0;
      }
    }

    &-contact {
      display: flex;
      padding: 2em 0;

      @media ${media.secondary} {
        flex-direction: column;
      }
    }

    &-bottom {
      align-items: center;
      color: ${color.foregroundDim};
      display: flex;
      font-family: ${fonts.fontAlt};
      padding: 2em 0 ;
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
        <CallCta ctaText="419-237-3737" />
      </div>
      <div className="footer-contact">
        <div className="footer-hours">
          <p>Sun - Thur 11 - 9</p>
          <p>Fri - Sat 11 - 11</p>
        </div>
        <div className="footer-address">
          <p>109 E. Main St.</p>
          <p>Fayette, Ohio</p>
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
