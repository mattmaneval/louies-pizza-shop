import styled from 'styled-components';
import FoodItem from './FoodItem';
import BackButton from '../navigation/BackButton';
import theme from '../../styles/theme';

const { color, fonts, space } = theme;

const SaladsStyle = styled.section`
  background-color: ${color.foregroundTert};
  margin-bottom: ${space.space};

  .side-prices {
    font-family: ${fonts.heading};
    color: ${color.background};
  }

  .food-item-name {
    color: ${color.background};
  }

  .food-item-desc {
    color: ${color.foreground};
    font-family: ${fonts.heading};
  }
`;

const saladsData = [
  {
    name: 'Coleslaw',
    desc: '3.95',
  },
  {
    name: 'Chef',
    desc: '6.25',
  },
  {
    name: 'Chicken Cesar',
    desc: '6.25',
  },
  {
    name: 'Taco',
    desc: '6.75',
  },
  {
    name: 'House',
    desc: '4.99',
  },
  {
    name: 'Steak',
    desc: '6.75',
  },
];

const Salads = () => (
  <SaladsStyle>
    <div className="wrap">
      <h4>Salads</h4>
      {Object.keys(saladsData).map((key) => (
        <FoodItem data={saladsData[key]} />
      ))}
    </div>
    <BackButton />
  </SaladsStyle>
);

export default Salads;
