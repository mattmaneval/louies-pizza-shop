import styled from 'styled-components';
import FoodItem from './FoodItem';
import BackButton from '../navigation/BackButton';
import theme from '../../styles/theme';

const { color, fonts, space } = theme;

const BurgersStyle = styled.div`
  background-color: ${color.foregroundTert};
  margin-bottom: ${space.space};

  .burger-prices {
    font-family: ${fonts.heading};
    color: ${color.background};
    margin-bottom: ${space.space};

    &-row {
      display: flex;
      margin-bottom: ${space.quarterSpace};
    }
  }

  .food-item-name {
    color: ${color.background};
  }

  .food-item-desc {
    color: ${color.foreground};
    font-family: ${fonts.heading};
  }
`;

const burgersData = [
  {
    name: 'Classic Hamburger',
    desc: 'Single - 5.25  Double - 8.04',
  },
  {
    name: 'Classic Cheeseburger',
    desc: 'Single - 5.50  Double - 8.29',
  },
  {
    name: 'Bacon Cheeseburger',
    desc: 'Single - 6.50  Double - 9.29',
  },
  {
    name: 'Stackhouse Burger',
    desc: 'Single - 7.00  Double - 9.79',
  },
  {
    name: 'Pizza Burger',
    desc: 'Single - 6.60  Double - 9.39',
  },
  {
    name: 'Blaze Burger',
    desc: 'Single - 6.40  Double - 9.19',
  },
  {
    name: 'Cheesy Bread Burger',
    desc: 'Single - 7.00  Double - 9.79',
  },
  {
    name: 'Berserk Burger',
    desc: 'Single - 7.00  Double - 9.79',
  },
];

const Burgers = () => (
  <BurgersStyle>
    <div className="wrap">
      <div className="menu-padding">
        <h4>Prime Beef Burgers</h4>
        <div className="burger-prices">
          <div className="burger-prices-row">Make any burger a basket with fries and slaw - 2.35</div>
        </div>
        {Object.keys(burgersData).map((key) => (
          <FoodItem data={burgersData[key]} />
        ))}
      </div>
    </div>
    <BackButton />
  </BurgersStyle>
);

export default Burgers;
