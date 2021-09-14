import styled from 'styled-components';
import media from '../../../styles/media';
import theme from '../../../styles/theme';

const { fonts, color, space } = theme;

const OriginalCrustStyle = styled.div`
  text-align: left;
  color: ${color.foregroundAlt};
  font-family: ${fonts.heading};

  .table-heading {
    color: ${color.background};
  }

  .table-price {
    font-family: ${fonts.fontAlt};
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
        width: 1em;
        height: 1em;
        fill: ${color.foreground};
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
            <td className="table-price">8.25</td>
            <td className="table-price">9.30</td>
            <td className="table-price">1.25</td>
          </tr>
          <tr>
            <td>Medium</td>
            <td className="table-price">11.95</td>
            <td className="table-price">13.85</td>
            <td className="table-price">2.00</td>
          </tr>
          <tr>
            <td>Large</td>
            <td className="table-price">12.65</td>
            <td className="table-price">14.95</td>
            <td className="table-price">2.30</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td className="table-price">22.95</td>
            <td className="table-price">26.95</td>
            <td className="table-price">3.65</td>
          </tr>
        </tbody>
      </table>
    </OriginalCrustStyle>
  );
}

export default OriginalCrustPrices;
