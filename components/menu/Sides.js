import styled from 'styled-components';
import FoodItem from './FoodItem';
import theme from '../../styles/theme';

const { color, fonts, space } = theme;

const SidesStyle = styled.div`
  margin-bottom: ${space.space};

  .side-prices {
    font-family: ${fonts.heading};
    color: ${color.background};
    margin-bottom: ${space.space};

    &-row {
      display: flex;
      margin-bottom: ${space.quarterSpace};
    }
  }

  .food-item-name {
    color: ${color.backgroundAlt};
  }

  .food-item-desc {
    color: ${color.foregroundAlt};
    font-family: ${fonts.heading};
  }
`;

const sidesData = [
  {
    name: 'Loaded Potato Skins',
    desc: '8.95',
  },
  {
    name: 'Cheesy Breadstix',
    desc: '7.25',
  },
  {
    name: 'Large Cheesy Breadstix',
    desc: '11.95',
  },
  {
    name: 'Cinnastix',
    desc: '6.95',
  },
  {
    name: 'Fries',
    desc: '2.00',
  },
  {
    name: 'Loaded Cheese Fries',
    desc: '8.95',
  },
  {
    name: 'Macho Nacho',
    desc: '10.95',
  },
  {
    name: 'Nelly\'s Nachos',
    desc: '10.95',
  },
  {
    name: 'Pizza Fries',
    desc: '8.95',
  },
  {
    name: 'Cheesy Garlic Toast',
    desc: '4.99',
  },
];

const Sides = () => (
  <SidesStyle>
    <div className="wrap">
      <h4>Sides</h4>
      {Object.keys(sidesData).map((key) => (
        <FoodItem data={sidesData[key]} />
      ))}
    </div>
  </SidesStyle>
);

export default Sides;