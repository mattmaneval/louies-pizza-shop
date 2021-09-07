import styled from 'styled-components';
import Link from 'next/link';
import mixins from '../../styles/mixins';
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, fonts, space } = theme;

const MenuStyles = styled.section`
  ${mixins.wrap}

  .nav-heading {
    font-family: ${fonts.fontMedium};
    color: ${color.foregroundAlt};
    display: flex;
    align-items: center;
    margin-bottom: 2em;
    /* text-transform: uppercase; */

    span {
      margin-right: 1em;
    }

    &:after {
      content: "";
      height: 1px;
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
      padding-bottom: 0.5rem;
      font-size: 5.5em;
      font-family: ${fonts.heading};

      @media ${media.secondary} {
        font-size: 3.5em;
      }

      &:hover {
        ${mixins.animate}
        color: ${color.foregroundAlt};
      }
    }
  }

  .nav-border {
    border-bottom: 1px solid ${color.foregroundAlt};
  }
`;

const Menu = () => (
  <MenuStyles>
    <div className="nav-heading">
      <span>Online Menu</span>
    </div>
    <nav className="mobile-nav">
      <Link href="/pizza">
        <a>Pizza</a>
      </Link>
      <Link href="/subs">
        <a>Gigantic Subs</a>
      </Link>
      <Link href="/burgers">
        <a>Prime Beef Burgers</a>
      </Link>
      <Link href="/wings-and-things">
        <a>Wings & Things</a>
      </Link>
      <Link href="/sides">
        <a>Sides</a>
      </Link>
      <Link href="/private-events">
        <a>Salads</a>
      </Link>
      <Link href="/private-events">
        <a>Pasta</a>
      </Link>
      <Link href="/about">
        <a>Ice Cream</a>
      </Link>
    </nav>
    <div className="nav-border"></div>
  </MenuStyles>
);

export default Menu;
