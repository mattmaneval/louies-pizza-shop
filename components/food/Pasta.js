import MenuItem from './MenuItem';
import { pastaData } from '../../data/pasta-local';
import BackButton from '../navigation/BackButton';

const Pasta = () => (
  <section>
    <div className="wrap">
      <h4>Pasta</h4>
      {Object.keys(pastaData).map((key) => (
        <MenuItem data={pastaData[key]} />
      ))}
    </div>
    <BackButton />
  </section>
);

export default Pasta;
