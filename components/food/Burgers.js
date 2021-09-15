import styled from 'styled-components';
import { burgersData } from '../../data/burgers-local';
import MenuItem from './MenuItem';
import BackButton from '../navigation/BackButton';
import theme from '../../styles/theme';

const { color, fonts, space } = theme;

const BurgerDetails = styled.div`
  margin-bottom: 3em;
  color: ${color.foregroundAlt};
  line-height: 1.5em;

  .burger-details-price {
    font-family: ${fonts.fontAlt};
  }
`;

const Burgers = () => (
  <section>
    <div className="wrap">
      <h1>burgers</h1>
      <BurgerDetails>
        <span>Make any burger a basket with fries and slaw - </span>
        <span className="burger-details-price">2.35</span>
      </BurgerDetails>
      {Object.keys(burgersData).map((key) => (
        <MenuItem data={burgersData[key]} />
      ))}
    </div>
    <BackButton />
  </section>
);

export default Burgers;
