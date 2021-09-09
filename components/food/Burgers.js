import styled from 'styled-components';
import { burgersData } from '../../data/burgers-local';
import MenuItem from './MenuItem';
import BackButton from '../navigation/BackButton';
import theme from '../../styles/theme';

const { color, fonts, space } = theme;

const BurgerDetails = styled.div`
  font-family: ${fonts.heading};
  color: ${color.foreground};
  margin-bottom: ${space.space};
`;

const Burgers = () => (
  <section>
    <div className="wrap">
      <h4>Prime Beef Burgers</h4>
      <BurgerDetails>Make any burger a basket with fries and slaw - 2.35</BurgerDetails>
      {Object.keys(burgersData).map((key) => (
        <MenuItem data={burgersData[key]} />
      ))}
    </div>
    <BackButton />
  </section>
);

export default Burgers;
