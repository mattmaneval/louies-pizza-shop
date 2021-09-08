import styled from 'styled-components';
import GlutenFree from '../../icons/Gluten-free';
import media from '../../../styles/media';
import mixins from '../../../styles/mixins';
import theme from '../../../styles/theme';

const { fonts, color, space } = theme;

const SpecialtyPizzaPricesStyle = styled.div`
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
      padding-bottom: ${space.quarterSpace};

      svg {
        width: 1.25em;
        height: 1.25em;
        fill: rgb(0, 160, 72);;
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
      <h5>Specialty Pizzas</h5>
      <div className="table-heading">Original Crust</div>
      <table>
        <thead>
          <tr>
            <th>Small</th>
            <th>Medium</th>
            <th>Large</th>
            <th>Bob</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{sm}</td>
            <td>{med}</td>
            <td>{lg}</td>
            <td>{bob}</td>
          </tr>
        </tbody>
      </table>
      <div className="table-heading">Thin & Crispy</div>
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
            <td>{smThin}</td>
            <td>{lgThin}</td>
            <td>{glutenFree}</td>
          </tr>
        </tbody>
      </table>
    </SpecialtyPizzaPricesStyle>
  );
}

export default SpecialtyPizzaPrices;
