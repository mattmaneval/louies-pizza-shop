import styled from 'styled-components';
import Link from 'next/link';
import ArrowLeftCircle from '../icons/ArrowLeftCircle';
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color } = theme;

const BackButtonStyle = styled.div`
  position: fixed;
  left: 5em;
  bottom: 3em;
  padding: 2rem;
  z-index: 1;

  @media ${media.secondary} {
    left: 0;
  }

  @media ${media.smallPhone} {
    bottom: 0;
  }

  a {
    display: inline-block;

    svg {
      &, use {
        fill: ${color.foregroundTert};
        height: 3em;
        width: 3em;

        @media ${media.secondary} {
          height: 2em;
          width: 2em;
        }
      }
    }
  }
`;

const BackButton = () => (
  <BackButtonStyle>
    <Link href="/">
      <a>
        <ArrowLeftCircle />
      </a>
    </Link>
  </BackButtonStyle>
);

export default BackButton;
