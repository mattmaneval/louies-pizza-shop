import GlutenFree from '../../icons/Gluten-free';

const sm = 14.95;
const med = 21.95;
const lg = 26.95;
const bob = 36.95;
const smThin = 14.85;
const lgThin = 21.95;
const glutenFree = 18.84;

const SpecialtyPizzaPrices = () => (
  <>
    <div className="font-bold">original crust</div>
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
    <div className="font-bold">thin & crispy</div>
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
