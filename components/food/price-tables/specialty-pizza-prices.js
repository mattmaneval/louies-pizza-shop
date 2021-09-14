import styled from 'styled-components';
import GlutenFree from '../../icons/Gluten-free';
import media from '../../../styles/media';
import theme from '../../../styles/theme';

const { fonts, color, space } = theme;

const SpecialtyPizzaPricesStyle = styled.div`
  text-align: left;
  color: ${color.foregroundAlt};
  font-family: ${fonts.heading};
  margin-bottom: 3em;

  .table-heading {
    margin-bottom: ${space.quarterSpace};
    color: ${color.foregroundAlt};
    font-family: ${fonts.fontAlt};
    text-transform: uppercase;
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
      padding: ${space.quarterSpace} 0;

      svg {
        width: 1em;
        height: 1.25em;
        fill: ${color.foreground};
      }
    }

    td {
      padding: ${space.quarterSpace} 0;
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

const sm = 14.95;
const med = 21.95;
const lg = 26.95;
const bob = 36.95;
const smThin = 14.85;
const lgThin = 21.95;
const glutenFree = 18.84;

function SpecialtyPizzaPrices() {
  return (
    <SpecialtyPizzaPricesStyle>
      <div className="table-heading">original crust</div>
      <table>
        <thead>
          <tr>
            <th>Sm</th>
            <th>Med</th>
            <th>Lg</th>
            <th>Bob</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-price">{sm}</td>
            <td className="table-price">{med}</td>
            <td className="table-price">{lg}</td>
            <td className="table-price">{bob}</td>
          </tr>
        </tbody>
      </table>
      <div className="table-heading">thin & crispy</div>
      <table>
        <thead>
          <tr>
            <th>Sm Thin</th>
            <th>Lg Thin</th>
            <th colSpan="2" className="gluten-free">
              <span>Sm</span>
              <GlutenFree />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-price">{smThin}</td>
            <td className="table-price">{lgThin}</td>
            <td className="table-price">{glutenFree}</td>
          </tr>
        </tbody>
      </table>
    </SpecialtyPizzaPricesStyle>
  );
}

export default SpecialtyPizzaPrices;
