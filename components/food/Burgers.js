import styled from 'styled-components';
import { burgersData } from '../../data/burgers-local';
import MenuItem from './MenuItem';
import BackButton from '../navigation/BackButton';

const BurgerDetails = styled.div`
  margin-bottom: 3em;
  line-height: 1.5em;
`;

const Burgers = () => (
  <section>
    <div className="wrap">
      <h1>burgers</h1>
      <BurgerDetails>
        <span>Make any burger a basket with fries and slaw | </span>
        <span className="font-bold">2.35</span>
      </BurgerDetails>
      {Object.keys(burgersData).map((key) => (
        <MenuItem data={burgersData[key]} />
      ))}
    </div>
    <BackButton />
  </section>
);

export default Burgers;
