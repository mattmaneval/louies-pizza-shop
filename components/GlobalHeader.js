import styled from 'styled-components';
import media from '../styles/media';
import theme from '../styles/theme';

const { color } = theme;

const GlobalHeaderStyles = styled.div`

  .global-header {
    background-color: ${color.foregroundAlt};
    color: ${color.background};
    padding: 0.95em 0;
    text-align: center;

    @media ${media.secondary} {
      padding: 0.8em 0;
    }
  }
`;

const GlobalHeader = () => (
  <GlobalHeaderStyles>
    <div className="global-header">
      Special &mdash; 2 Topping Bob $25
    </div>
  </GlobalHeaderStyles>
);

export default GlobalHeader;
