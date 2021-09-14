import styled from 'styled-components';
import GlutenFree from '../../icons/Gluten-free';
import media from '../../../styles/media';
import theme from '../../../styles/theme';

const { fonts, color, space } = theme;

const ThinAndCrispyStyle = styled.div`
  text-align: left;
  color: ${color.foregroundAlt};
  font-family: ${fonts.heading};

  .table-heading {
    margin-bottom: ${space.quarterSpace};
    color: ${color.background};
  }

  .table-price {
    font-family: ${fonts.fontAlt};
  }

  table {
    /* margin-bottom: 6em; */

    @media ${media.secondary} {
      width: 100%;
    }

    th {
      width: 10em;
      padding: ${space.quarterSpace};
    }

    td {
      padding: ${space.quarterSpace};

      svg {
        width: 1em;
        height: 1em;
        fill: ${color.foreground};
      }
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

function ThinAndCrispyPrices() {
  return (
    <ThinAndCrispyStyle>
      <div className="table-heading">Thin & Crispy</div>
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
            <td>Large</td>
            <td className="table-price">11.95</td>
            <td className="table-price">13.85</td>
            <td className="table-price">2.00</td>
          </tr>
          <tr>
            <td colSpan="2" className="gluten-free">
              <span>Sm</span>
              <GlutenFree />
            </td>
            <td className="table-price">12.24</td>
            <td className="table-price">13.29</td>
            <td className="table-price">1.25</td>
          </tr>
        </tbody>
      </table>
    </ThinAndCrispyStyle>
  );
}

export default ThinAndCrispyPrices;
