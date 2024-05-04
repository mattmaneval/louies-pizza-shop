import GlutenFree from '../../icons/Gluten-free';

const ThinAndCrispyPrices = () => (
  <>
    <div className="title-alt">Thin & Crispy</div>
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
          <td>Sm</td>
          <td className="font-bold">8.79</td>
          <td className="font-bold">10.18</td>
          <td className="font-bold">1.39</td>
        </tr>
        <tr>
          <td>Lg</td>
          <td className="font-bold">12.69</td>
          <td className="font-bold">14.88</td>
          <td className="font-bold">2.19</td>
        </tr>
        <tr>
          <td colSpan="2" className="gluten-free">
            <span>Sm</span>
            <GlutenFree />
          </td>
          <td className="font-bold">12.99</td>
          <td className="font-bold">14.28</td>
          <td className="font-bold">1.39</td>
        </tr>
      </tbody>
    </table>
  </>
);

export default ThinAndCrispyPrices;
