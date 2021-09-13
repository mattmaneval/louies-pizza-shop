import styled from 'styled-components';
import Logo from './icons/Logo';
import CallCta from './navigation/CallCta';
import media from '../styles/media';
import mixins from '../styles/mixins';
import theme from '../styles/theme';

const { color, fonts, space } = theme;

const HeaderStyles = styled.header`
  padding: 1.5em 0;
  font-size: 1em;
  font-family: ${fonts.heading};
  color: ${color.foreground};

  @media ${media.secondary} {
    padding: 2em 0;
  }

  .wrap {
    ${mixins.flexBetween};
  }

  .header-meta {
    text-align: right;
  }

  a {
    transform: translateX(1em);
  }
`;

function Header() {
  return (
    <HeaderStyles>
      <div className="wrap">
        <div className="header-logo">
          <Logo />
        </div>
        <div className="header-meta">
          <CallCta ctaText="Order Now" />
        </div>
      </div>
    </HeaderStyles>
  );
}

export default Header;
