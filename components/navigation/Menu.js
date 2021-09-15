import styled from 'styled-components';
import Link from 'next/link';
import ArrowUpRight from '../icons/ArrowUpRight';
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, fonts } = theme;

const MenuStyles = styled.section`
  .nav-heading {
    font-family: ${fonts.fontAlt};
    color: ${color.foregroundTert};
    display: flex;
    align-items: center;
    margin-bottom: 2em;
    font-size: 2em;

    @media ${media.secondary} {
      font-size: 1em;
    }

    span {
      margin-right: 1em;
    }

    &:after {
      content: "";
      height: 8px;
      flex: 1 1 0%;
      background-color: currentcolor;
    }
  }

  nav {
    a {
      font-size: 5.5em;

      @media ${media.secondary} {
        font-size: 3em;
      }
    }
  }
`;

const Menu = () => (
  <MenuStyles>
    <div className="wrap">
      <div className="nav-heading">
        <span>online menu</span>
      </div>
      <nav>
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
    </div>
  </MenuStyles>
);

export default Menu;
