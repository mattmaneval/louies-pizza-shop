import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import media from '../../styles/media';

const LogoImage = styled.div`
  position: relative;
  display: inline-block;
  background-image: url('/assets/images/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 0;
  padding-top: 75%;
  width: 10em;

  @media ${media.secondary} {
    width: 6em;
  }
`;

const Logo = () => (
  <Link href="/">
    <LogoImage />
  </Link>
);

export default Logo;
