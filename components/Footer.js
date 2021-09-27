import React from 'react';
import styled from 'styled-components';
import CallCta from './navigation/CallCta';
import media from '../styles/media';
import theme from '../styles/theme';

const { color, fonts } = theme;

const FooterStyles = styled.footer`
  padding: 0 0 6em 0;

  h1 {
    /* border: none; */
  }

  .footer {
    &-hours,
    &-address,
    &-contact {
      font-family: ${fonts.fontAlt};
      span {
        line-height: 1.5em;
      }
    }

    &-hours,
    &-address  {
      margin: 0 3em 0 0;

      @media ${media.secondary} {
        margin: 0 3em 2em 0;
      }
    }

    &-hours {
      min-width: 13em;
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
      font-size: 1.25em;
      margin-bottom: 4em;

      @media ${media.secondary} {
        flex-direction: column;
      }
    }

    &-bottom {
      align-items: center;
      display: flex;
      font-size: 1.3em;
    }
  }

  .copyright {
    font-size: 0.45em;
    letter-spacing: 0.1em;
    line-height: 1.5em;

    a {
      text-decoration: underline;
      color: ${color.foregroundDim};
      font-family: ${fonts.font};
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
      <h1>louie&apos;s pizza shop</h1>
      <div className="footer-contact">
        <div className="footer-hours">
          <div className="footer-hours-row">
            <span>sunday | thursday</span>
            <span> 11  |  9</span>
          </div>
          <div className="footer-hours-row">
            <span>friday | saturday</span>
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
          Louie&apos;s Pizza Shop. All Rights Reserved. Site by
          {' '}
          <a rel="noreferrer" target="_blank" href="https://mattmaneval.com/">Matt Maneval</a>
        </div>
      </div>
    </div>
  </FooterStyles>
);

export default Footer;
