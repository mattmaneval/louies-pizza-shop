import React from 'react';
import styled from 'styled-components';
import media from '../styles/media';
import theme from '../styles/theme';

const { color, fonts } = theme;

const FooterStyles = styled.footer`
  padding: 0 0 6em 0;

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
      margin-bottom: 2em;

      @media ${media.secondary} {
        margin: 0 3em 2em 0;
      }
    }

    &-hours {
      min-width: 13em;
    }

    &-hours-row {
      margin-bottom: 0.85em;
    }

    &-address {
      span {
        display: block;
      }
    }

    &-bottom {
      align-items: center;
      display: flex;
      font-size: 1.3em;
    }
  }

  // .copyright {
  //   font-size: 0.45em;
  //   letter-spacing: 0.1em;
  //   line-height: 1.5em;

  //   a {
  //     text-decoration: underline;
  //     color: ${color.foregroundDim};
  //     font-family: ${fonts.font};
  //     font-size: 1em;

  //     &:hover {
  //       color: ${color.foreground};
  //     }
  //   }
  // }
`;

// const year = new Date().getFullYear();

const Footer = () => (
  <FooterStyles>
    <div className="wrap">
      <h1>louie&apos;s pizza shop</h1>
      <div className="footer-address">
        <div className="title">address</div>
        <span>109 e. main st. </span>
        <span>fayette, ohio</span>
      </div>
      <div className="footer-hours">
        <div className="title">hours</div>
        <div className="footer-hours-row">
          <div>sunday - thursday</div>
          <div> 11am - 9pm</div>
        </div>
        <div className="footer-hours-row">
          <div>friday - saturday</div>
          <div> 11am - 10pm</div>
        </div>
      </div>
      <div className="title">phone</div>
      <a href="tel:419-237-3737"><span>(419) 237-3737</span></a>
      {/* <CallCta ctaText="419-237-3737" /> */}
      {/* <div className="footer-bottom">
        <div className="copyright">
          Copyright &#169;
          {' '}
          {year}
          {' '}
          Louie&apos;s Pizza Shop. All Rights Reserved. Site by
          {' '}
          <a rel="noreferrer" target="_blank" href="https://mattmaneval.com/">Matt Maneval</a>
        </div>
      </div> */}
    </div>
  </FooterStyles>
);

export default Footer;
