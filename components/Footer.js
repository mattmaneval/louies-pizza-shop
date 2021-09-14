import React from 'react';
import styled from 'styled-components';
import Logo from './icons/Logo';
import CallCta from './navigation/CallCta';
import media from '../styles/media';
import theme from '../styles/theme';

const { color, fonts } = theme;

const FooterStyles = styled.footer`
      padding: 0 0 6em;

  .footer {
    &-logo {
      margin-right: 2em;
    }

    &-top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 4em;
    }

    &-top {
      align-items: center;
    }

    &-hours,
    &-address,
    &-contact {
      color: ${color.foregroundAlt};

      span {
        line-height: 1.5em;
      }
    }

    &-hours,
    &-address  {
      margin: 0 3em 2em 0;
    }

    &-hours {
      width: 8em;
    }

    &-hours-row {
      display: flex;
      justify-content: space-between;
    }

    &-address {
      span {
        display: block;
      }
    }

    &-contact {
      display: flex;

      @media ${media.secondary} {
        flex-direction: column;
      }
    }

    &-bottom {
      align-items: center;
      display: flex;
      padding: 2em 0 ;
    }
  }

  .copyright {
    color: ${color.foregroundAlt};
    font-size: 0.7em;
    letter-spacing: 0.1em;
    line-height: 1.5em;

    a {
      text-decoration: underline;
      color: ${color.foregroundDim};
      font-size: 1em;

      &:hover {
        color: ${color.foreground};
      }
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

      </div>
      <div className="footer-contact">
        <div className="footer-hours">
          <div className="footer-hours-row">
            <span>sun | thur</span>
            <span>11 | 9</span>
          </div>
          <div className="footer-hours-row">
            <span>fri | sat</span>
            <span> 11 | 11</span>
          </div>
        </div>
        <div className="footer-address">
          <span>109 e. main st. </span>
          <span>fayette, ohio</span>
        </div>
        <CallCta ctaText="419-237-3737" />
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
