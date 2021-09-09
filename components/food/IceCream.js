import MenuItem from './MenuItem';
import { iceCreamData } from '../../data/ice-cream-local';
import BackButton from '../navigation/BackButton';

const IceCream = () => (
  <section>
    <div className="wrap">
      <h4>Ice Cream</h4>
      {Object.keys(iceCreamData).map((key) => (
        <MenuItem data={iceCreamData[key]} />
      ))}
    </div>
    <BackButton />
  </section>
);

export default IceCream;
