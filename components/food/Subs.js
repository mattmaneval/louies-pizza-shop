import styled from 'styled-components';
import FoodItem from './FoodItem';
import BackButton from '../navigation/BackButton';
import theme from '../../styles/theme';

const { fonts, color, space } = theme;

const SubsStyle = styled.section`
  background-color: ${color.foregroundTert};
  margin-bottom: ${space.space};

  h4 {
    color: ${color.background};
  }

  .sub-prices {
    font-family: ${fonts.heading};
    color: ${color.background};
    margin-bottom: 4.5em;

    &-row {
      display: flex;
      margin-bottom: ${space.quarterSpace};

      span:first-of-type {
        margin-right: ${space.space};
      }
    }

    &-row:first-of-type {
      margin-bottom: ${space.space};
    }
  }

  .details {
    color: ${color.backgroundTert};
  }

  .food-item-name {
    color: ${color.background};
  }

  .food-item-desc {
    color: ${color.backgroundTert};
    font-family: ${fonts.heading};
  }
`;

const subsData = [
  {
    name: 'BLT',
    desc: 'Bacon, lettuce, tomato',
  },
  {
    name: 'Philly Style Steak',
    desc: 'Shaved steak ribeye, green peppers, onions, fresh garlic',
  },
  {
    name: 'Meatball',
    desc: 'Meatballs and marinara ',
  },
  {
    name: 'Chicken Ranch',
    desc: 'Sliced chicken breast smothered in ranch ',
  },
  {
    name: 'Buffalo Chicken',
    desc: 'Sliced chicken breast marinated in buffalo sauce, smothered in ranch',
  },
  {
  name: 'BBQ Chicken',
    desc: 'Sliced chicken breast marinated in bbq sauce',
  },
  {
    name: 'Italian',
    desc: 'Salami, ham, pepperoni, itallian dressing, mayo',
  },
  {
    name: 'Club',
    desc: 'Turkey, roast beef, ham',
  },
  {
    name: 'Pizza',
    desc: 'Choice of two meats and any veggies of your choice',
  },
  {
    name: 'Veggie',
    desc: 'All of our veggies on a bed of slaw',
  },
  {
    name: 'Ham',
    desc: 'Choice of veggie toppings',
  },
  {
    name: 'Roast Beef',
    desc: 'Choice of veggie toppings',
  },
  {
    name: 'Turkey',
    desc: 'Choice of veggie toppings',
  },
];

const Subs = () => (
  <SubsStyle>
    <div className="wrap">
      <h4>Gigantic Subs</h4>
      <div className="sub-prices">
        <div className="sub-prices-row">
          <span>Half 8" 7.10</span>
          <span>Whole 16" 13.00</span>
        </div>
        <div className="sub-prices-row details">Turn any sub into a calzone - 7.65</div>
        <div className="sub-prices-row details">Make any sub or calzone a basket with fries and slaw - 2.35</div>
        <div className="sub-prices-row details">Extra meat - 1.00 Extra cheese - .50</div>
      </div>
      {Object.keys(subsData).map((key) => (
        <FoodItem data={subsData[key]} />
      ))}
    </div>
    <BackButton />
  </SubsStyle>
);

export default Subs;
