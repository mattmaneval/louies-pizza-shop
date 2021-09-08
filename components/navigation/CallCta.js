import styled from 'styled-components';
import Phone from '../icons/Phone';
import media from '../../styles/media';
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';

const { color, space } = theme;

const CallCtaStyle = styled.a`
  ${mixins.flexBetween};
  font-size: 1.5em;
  padding: 1em;
  color: ${color.foreground};

  @media ${media.secondary} {
    font-size: 1em;
  }

  svg {
    width: 1em;
    height: 1em;
    fill: ${color.backgroundTert};
    margin-right: ${space.quarterSpace};
  }
`;

const CallCta = () => (
    <CallCtaStyle href="tel:419-931-0281">
      <Phone />
      <span>Order Now</span>
    </CallCtaStyle>
);

export default CallCta;
