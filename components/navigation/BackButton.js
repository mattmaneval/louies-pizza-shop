import styled from 'styled-components';
import Link from 'next/link';
import ArrowLeftCircle from '../icons/ArrowLeftCircle';
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, fonts, space } = theme;

const BackButtonStyle = styled.div`
  position: fixed;
  left: 5em;
  bottom: 3em;
  padding: 2rem;

  @media ${media.secondary} {
    left: 0;
  }

  @media ${media.smallPhone} {
    bottom: 0;
  }

  svg {
    &, use {
      fill: ${color.background};
      height: 5em;
      width: 5em;
    }
  }
`;

const BackButton = () => (
  <BackButtonStyle>
    <Link href="/">
      <ArrowLeftCircle />
    </Link>
  </BackButtonStyle>
);

export default BackButton;
