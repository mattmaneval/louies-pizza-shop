import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color } = theme;

const CallCtaStyle = styled.a`
  display: inline-block;
  color: ${color.background};
  background-color: ${color.foregroundAlt};
  font-size: 1.25em;
  border: 0.3em solid ${color.foregroundAlt};
  border-radius: 2em;
  padding: 0.65em 1em;
  letter-spacing: 0.025em;

  @media ${media.secondary} {
    font-size: 1.05em;
  }

  @media ${media.smallPhone} {
    font-size: 1em;
  }
`;

const CallCta = ({ ctaText }) => (
  <CallCtaStyle href="tel:419-237-3737">
    {ctaText}
  </CallCtaStyle>
);

CallCta.propTypes = {
  ctaText: PropTypes.string.isRequired,
};

export default CallCta;
