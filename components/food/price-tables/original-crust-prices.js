import styled from 'styled-components';
import media from '../../../styles/media';
import theme from '../../../styles/theme';

const { fonts, color, space } = theme;

const OriginalCrustStyle = styled.div`
  text-align: left;
  color: ${color.foregroundAlt};
  font-family: ${fonts.heading};

  .table-heading {
    margin-bottom: ${space.quarterSpace};
    color: ${color.background};
  }

  table {
    margin-bottom: ${space.space};

    @media ${media.secondary} {
      width: 100%;
    }

    th {
      width: 10em;
      padding: ${space.quarterSpace};

      svg {
        width: 1.25em;
        height: 1.25em;
        fill: ${color.foregroundAlt};
      }
    }

    td {
      padding: ${space.quarterSpace};
    }

    .gluten-free {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      span {
        margin-right: 0.4em;
      }
    }
  }
`;

function OriginalCrustPrices() {
  return (
    <OriginalCrustStyle>
      <div className="table-heading">Original Crust</div>
      <table>
        <thead>
          <tr>
            <th>Size</th>
            <th>Chz</th>
            <th>1 Tpg</th>
            <th>+1 Tpg</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Small</td>
            <td>8.25</td>
            <td>9.30</td>
            <td>1.25</td>
          </tr>
          <tr>
            <td>Medium</td>
            <td>11.95</td>
            <td>13.85</td>
            <td>2.00</td>
          </tr>
          <tr>
            <td>Large</td>
            <td>12.65</td>
            <td>14.95</td>
            <td>2.30</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>22.95</td>
            <td>26.95</td>
            <td>3.65</td>
          </tr>
        </tbody>
      </table>
    </OriginalCrustStyle>
  );
}

export default OriginalCrustPrices;
