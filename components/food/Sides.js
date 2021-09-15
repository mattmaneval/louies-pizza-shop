import { sidesData } from '../../data/sides-local';
import MenuItem from './MenuItem';
import BackButton from '../navigation/BackButton';

const Sides = () => (
  <section>
    <div className="wrap">
      <h1>sides</h1>
      {Object.keys(sidesData).map((key) => (
        <MenuItem data={sidesData[key]} />
      ))}
    </div>
    <BackButton />
  </section>
);

export default Sides;
