import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Phone from '../icons/Phone';
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, space } = theme;

const CallCtaStyle = styled.a`
  display: flex;
  align-items: center;
  color: ${color.foregroundAlt};
  font-size: 1.85em;

  @media ${media.secondary} {
    font-size: 1.25em;
  }

  svg {
    width: 1.25em;
    height: 1.25em;
    fill: ${color.foregroundTert};
    margin-right: ${space.quarterSpace};
  }
`;

const CallCta = ({ctaText}) => (
  <CallCtaStyle href="tel:419-237-3737">
    <Phone />
    <span>{ctaText}</span>
  </CallCtaStyle>
);

export default CallCta;
