import MenuItem from './MenuItem';
import { familyCombosData } from '../../data/family-combos-local';
import BackButton from '../navigation/BackButton';

const FamilyCombos = () => (
  <section>
    <div className="wrap">
      <h4>family combos</h4>
      {Object.keys(familyCombosData).map((key) => (
        <MenuItem data={familyCombosData[key]} />
      ))}
    </div>
    <BackButton />
  </section>
);

export default FamilyCombos;
