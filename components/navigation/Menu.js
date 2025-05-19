import styled from 'styled-components';
import Link from 'next/link';
// import ArrowUpRight from '../icons/ArrowUpRight';
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
          pizza
        </Link>
        <Link href="/subs">
          subs & calzones
        </Link>
        <Link href="/wings-and-things">
          wings
        </Link>
        <Link href="/burgers">
          burgers
        </Link>
        <Link href="/family-combos">
          family combos
        </Link>
        <Link href="/sides">
          sides
        </Link>
        <Link href="/pasta">
          pasta
        </Link>
        <Link href="/salads">
          salads
        </Link>
        <Link href="/ice-cream">
          ice cream
        </Link>
        <Link href="/drinks">
          drinks
        </Link>
      </nav>
    </div>
  </MenuStyles>
);

export default Menu;
