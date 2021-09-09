import React from 'react';
import styled, { css } from 'styled-components';
import Logo from './icons/Logo';
import mixins from '../styles/mixins';
import theme from '../styles/theme';
import media from '../styles/media';

const { color, fonts, space } = theme;

const footerLink = {
  hover: css`
    ${mixins.animate};

    &:hover {
      color: ${color.backgroundTert};
    }
  `,
};

const FooterStyles = styled.footer`
  padding: 6em 0;

  .wrap {
    display: flex;
    align-items: center;
  }

  .footer-logo {
    margin-right: ${space.space};
  }

  .footer-contact {
    color: ${color.foreground};
    font-family: ${fonts.heading};
    width: 24em;

    .address {
      p {
        color: ${color.foreground};
        font-family: ${fonts.heading};
      }
    }

    a {
      ${footerLink.hover};
      color: ${color.foreground};
      line-height: 140%;
      font-size: 1.25em;
      letter-spacing: 0.05rem;
      display: block;
    }
  }

  .copyright,
  .copyright a {
    font-family: ${fonts.fontMedium};
    font-size: 0.7em;
    letter-spacing: 0.1em;
    color: ${color.foregroundDim};
    line-height: 1.6em;


    a {
      display: inline-block;
      color: currentColor;
      text-decoration: underline;
      padding-bottom: 0;
    }
  }

  .copyright {
    padding: ${space.space} 0;
    ${mixins.wrap};
  }
`;

const year = new Date().getFullYear();

const Footer = () => (
  <FooterStyles>
    <div className="wrap">
      <div className="footer-logo">
        <Logo />
      </div>
      <div className="footer-contact">
        <a href="tel:419-931-0281">419-237-3737</a>
        <div className="address">
          <p>109 E. Main St.</p>
          <p>Fayette, Ohio</p>
        </div>
      </div>
    </div>
    <div className="copyright">
      Copyright &#169;
      {' '}
      {year}
      {' '}
      Louie's Pizza Shop All Rights Reserved.
      Site by
      {' '}
      <a href="https://mattmaneval.com/">Matt Maneval</a>
      .
    </div>
  </FooterStyles>
);

export default Footer;
