import { saladsData } from '../../data/salads-local';
import MenuItem from './MenuItem';
import BackButton from '../navigation/BackButton';

const Salads = () => (
  <section>
    <div className="wrap">
      <h1>salads</h1>
      {Object.keys(saladsData).map((key) => (
        <MenuItem data={saladsData[key]} />
      ))}
    </div>
    <BackButton />
  </section>
);

export default Salads;
