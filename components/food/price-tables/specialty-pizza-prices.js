import GlutenFree from '../../icons/Gluten-free';

const sm = 14.99;
const med = 23.29;
const lg = 28.59;
const bob = 39.19;
const smThin = 14.89;
const lgThin = 21.99;
const glutenFree = 18.89;

const SpecialtyPizzaPrices = () => (
  <>
    <div className="title-alt">original crust</div>
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
          <td className="font-bold">{sm}</td>
          <td className="font-bold">{med}</td>
          <td className="font-bold">{lg}</td>
          <td className="font-bold">{bob}</td>
        </tr>
      </tbody>
    </table>
    <div className="title-alt">thin & crispy</div>
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
          <td className="font-bold">{smThin}</td>
          <td className="font-bold">{lgThin}</td>
          <td className="font-bold">{glutenFree}</td>
        </tr>
      </tbody>
    </table>
  </>
);

export default SpecialtyPizzaPrices;
