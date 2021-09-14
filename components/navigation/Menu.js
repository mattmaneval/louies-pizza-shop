import styled from 'styled-components';
import Link from 'next/link';
import mixins from '../../styles/mixins';
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, fonts, space } = theme;

const MenuStyles = styled.section`
  /* background-color: ${color.foregroundTert}; */

  .nav-heading {
    font-family: ${fonts.fontAlt};
    color: ${color.foregroundTert};
    display: flex;
    align-items: center;
    margin-bottom: 2em;
    font-size: 2em;
    /* text-transform: uppercase; */

    @media ${media.secondary} {
      font-size: 1em;
    }

    span {
      margin-right: 1em;
    }

    &:after {
      content: "";
      height: 0.5em;
      flex: 1 1 0%;
      background-color: currentcolor;
    }
  }

  .mobile-nav {
    display: inline-block;
    margin-bottom: ${space.halfSpace};

    a {
      color: ${color.foreground};
      display: block;
      padding-bottom: 1rem;
      font-size: 5.5em;
      font-family: ${fonts.fontAlt};
      /* -webkit-text-stroke: 2px ${color.backgroundTert}; */

      @media ${media.secondary} {
        font-size: 2.5em;
      }

      &:hover {
        ${mixins.animate}
        color: ${color.foreground};
      }
    }
  }

  .nav-border {
    border-bottom: .5em solid ${color.foregroundTert};
  }
`;

const Menu = () => (
  <MenuStyles>
    <div className="wrap">
      <div className="nav-heading">
        <span>online menu</span>
      </div>
      <nav className="mobile-nav">
        <Link href="/pizza">
          <a>pizza</a>
        </Link>
        <Link href="/subs">
          <a>subs</a>
        </Link>
        <Link href="/wings-and-things">
          <a>wings</a>
        </Link>
        <Link href="/burgers">
          <a>burgers</a>
        </Link>
        <Link href="/family-combos">
          <a>family combos</a>
        </Link>
        <Link href="/sides">
          <a>sides</a>
        </Link>
        <Link href="/pasta">
          <a>pasta</a>
        </Link>
        <Link href="/salads">
          <a>salads</a>
        </Link>
        <Link href="/ice-cream">
          <a>ice cream</a>
        </Link>
        <Link href="/drinks">
          <a>drinks</a>
        </Link>
      </nav>
      <div className="nav-border" />
    </div>
  </MenuStyles>
);

export default Menu;
