import styled from 'styled-components';
import GlutenFree from '../../icons/Gluten-free';
import media from '../../../styles/media';
import theme from '../../../styles/theme';

const { fonts, color, space } = theme;

const ThinAndCrispyStyle = styled.div`
  text-align: left;
  color: ${color.foreground};
  font-family: ${fonts.heading};

  .table-heading {
    margin-bottom: ${space.quarterSpace};
    color: ${color.background};
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
        width: 1.25em;
        height: 1.25em;
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
            <td>8.25</td>
            <td>9.30</td>
            <td>1.25</td>
          </tr>
          <tr>
            <td>Large</td>
            <td>11.95</td>
            <td>13.85</td>
            <td>2.00</td>
          </tr>
          <tr>
            <td colSpan="2" className="gluten-free">
              <span>Sm</span>
              <GlutenFree />
            </td>
            <td>12.24</td>
            <td>13.29</td>
            <td>1.25</td>
          </tr>
        </tbody>
      </table>
    </ThinAndCrispyStyle>
  );
}

export default ThinAndCrispyPrices;
