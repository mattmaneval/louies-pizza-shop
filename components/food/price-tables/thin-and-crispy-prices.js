import GlutenFree from '../../icons/Gluten-free';

const ThinAndCrispyPrices = () => (
  <>
    <div className="font-bold">Thin & Crispy</div>
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
          <td className="font-bold">8.25</td>
          <td className="font-bold">9.30</td>
          <td className="font-bold">1.25</td>
        </tr>
        <tr>
          <td>Lg</td>
          <td className="font-bold">11.95</td>
          <td className="font-bold">13.85</td>
          <td className="font-bold">2.00</td>
        </tr>
        <tr>
          <td colSpan="2" className="gluten-free">
            <span>Sm</span>
            <GlutenFree />
          </td>
          <td className="font-bold">12.24</td>
          <td className="font-bold">13.29</td>
          <td className="font-bold">1.25</td>
        </tr>
      </tbody>
    </table>
  </>
);

export default ThinAndCrispyPrices;
