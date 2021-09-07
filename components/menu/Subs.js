import styled from 'styled-components';
import FoodItem from './FoodItem';
import theme from '../../styles/theme';

const { fonts, color, space } = theme;

const SubsStyle = styled.div`
  margin-bottom: ${space.space};

  .wrap {
    background-color: ${color.foregroundTert};
  }

  h4 {
    color: ${color.background};
  }

  .sub-prices {
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
    desc: '',
  },
  {
    name: 'Roast Beef',
    desc: '',
  },
  {
    name: 'Turkey',
    desc: '',
  },
];

const Subs = () => (
  <SubsStyle>
    <div className="wrap">
      <div className="menu-padding">
        <h4>Gigantic Subs</h4>
        <div className="sub-prices">
          <div className="sub-prices-row">
            <span>Half 8" 7.10</span>
            <span>Whole 16" 13.00</span>
          </div>
          <div className="sub-prices-row">Turn any sub into a calzone - 7.65</div>
          <div className="sub-prices-row">Make any sub or calzone a basket with fries and slaw - 2.35</div>
          <div className="sub-prices-row">Extra meat - 1.00 Extra cheese - .50</div>
        </div>
        {Object.keys(subsData).map((key) => (
          <FoodItem data={subsData[key]} />
        ))}
      </div>
    </div>
  </SubsStyle>
);

export default Subs;
