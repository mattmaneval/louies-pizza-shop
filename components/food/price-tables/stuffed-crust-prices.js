const sm = +2.89;
const med = +3.99;
const lg = +4.29;
const bob = +6.39;

const StuffedCrustPrices = () => (
  <>
    <div className="title-alt">stuffed crust</div>
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
  </>
);

export default StuffedCrustPrices;
