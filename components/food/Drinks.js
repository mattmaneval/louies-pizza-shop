import { drinksData } from '../../data/drinks-local';
import MenuItem from './MenuItem';
import BackButton from '../navigation/BackButton';

const Drinks = () => (
  <section>
    <div className="wrap">
      <h1>drinks</h1>
      {Object.keys(drinksData).map((key) => (
        <MenuItem data={drinksData[key]} />
      ))}
    </div>
    <BackButton />
  </section>
);

export default Drinks;
