import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Logo from './icons/Logo';
import GlobalHeader from './GlobalHeader';
import MenuButton from './navigation/MenuButton';

import mixins from '../styles/mixins';
import media from '../styles/media';
import theme from '../styles/theme';

const { color, fonts, space } = theme;

const HeaderStyles = styled.header`
  padding: 3em 0;
`;

function Header() {
  return (
    <HeaderStyles>
      <div className="wrap">
        <div className="header-logo">
          <Logo />
        </div>
      </div>
    </HeaderStyles>
  );
}

export default Header;
