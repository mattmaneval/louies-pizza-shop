import { sidesData } from '../../data/sides-local';
import MenuItem from './MenuItem';
import BackButton from '../navigation/BackButton';

const Sides = () => (
  <section>
    <div className="wrap">
      <h4>Sides</h4>
      {Object.keys(sidesData).map((key) => (
        <MenuItem data={sidesData[key]} />
      ))}
    </div>
    <BackButton />
  </section>
);

export default Sides;
