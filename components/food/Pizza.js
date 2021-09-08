import styled from 'styled-components';
import FoodItem from './FoodItem';
import SpecialtyPizzaPrices from './price-tables/specialty-pizza-prices';
import OriginalCrustPrices from './price-tables/original-crust-prices';
import ThinAndCrispyPrices from './price-tables/thin-and-crispy-prices';
import BackButton from '../navigation/BackButton';
import theme from '../../styles/theme';

const { fonts, color, space } = theme;

const PizzaStyles = styled.section`
  background-color: ${color.foregroundTert};

  h4 {
    color: ${color.background};
  }

  .food-item-name {
    color: ${color.background};
  }

  .food-item-desc {
    color: ${color.foregroundAlt};
    font-family: ${fonts.heading};
  }
`;

const pizzas = [
  {
    name: 'Masterpiece',
    desc: 'Fresh garlic, black olives, mushrooms, jalepenos, ham, pepperoni, sausage',
  },
  {
    name: 'Taco Nacho',
    desc: 'Nacho cheese base, black olives, onions, jalapenos, tomatos, taco meat, chips, lettuce, side of sour cream',
  },
  {
    name: 'Meat Lovers',
    desc: 'Bacon, ham, pepperoni, beef, sausage',
  },
  {
    name: 'Chicken Bacon Ranch',
    desc: 'Chicken breast and bacon smothered in ranch (Pizza sauce can be substituted for ranch base)',
  },
  {
    name: 'Buffalo Chicken',
    desc: 'Chicken breast marinated in buffalo sauce, pickles, onions, smothered in ranch',
  },
  {
    name: 'BBQ Chicken',
    desc: 'Chicken breast marinated in bbq sauce',
  },
  {
    name: 'Veggie',
    desc: 'Pizza sauce and slaw base, topped with all of our veggies',
  },
  {
    name: 'Hawaiian',
    desc: 'Pineapple, ham, and marischino cherries',
  },
  {
    name: 'Philly',
    desc: 'Alfredo sauce, onions, green peppers, your choice of chicken or steak',
  },
  {
    name: 'Southwest Chicken Fajita',
    desc: 'Babes sauce with seasoned chicken breast, onions, green peppers, chips and  sour cream on the side',
  },
  {
    name: 'Breakfast In Bed',
    desc: 'Butter base, ham, bacon, sausage, egg, syrup drizzle',
  },
  {
    name: 'Eagles Nest',
    desc: '(Omlet Style) Butter base, turkey, bacon, sausage, onions, green peppers, and eggs mixed with mild sauce',
  },
];

const Pizza = () => (
  <PizzaStyles>
    <div className="wrap">
      <h4>Specialty Pizza</h4>
      <SpecialtyPizzaPrices />
      {Object.keys(pizzas).map((key) => (
        <FoodItem data={pizzas[key]} />
      ))}
      <h4>Build Your Own</h4>
      <OriginalCrustPrices />
      <ThinAndCrispyPrices />
      <BackButton />
    </div>
  </PizzaStyles>
);

export default Pizza;
