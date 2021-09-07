import styled from 'styled-components';
import Logo from './icons/Logo';

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
