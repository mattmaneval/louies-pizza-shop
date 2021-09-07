import styled from 'styled-components';
import FoodItem from './FoodItem';
import theme from '../../styles/theme';
import media from '../../styles/media';
import BackButton from '../navigation/BackButton';

const { fonts, color, space } = theme;

const PizzaStyles = styled.div`
  background-color: ${color.foregroundTert};
  margin-bottom: ${space.space};

  h4 {
    color: ${color.background};
  }

  .price-background {
    padding: 2em 0;
    background-color: ${color.backgroundTert};

    h5 {
      color: ${color.background};
    }
  }

  .price-grid {
    color: ${color.background};
    display: grid;
    font-size: 1.25em;
    grid-template-columns: repeat(4, 1fr);
    padding-bottom: ${space.space};

    @media ${media.secondary} {
      grid-template-columns: repeat(1, 1fr);
    }

    &-area {
      @media ${media.secondary} {
        margin-bottom: ${space.space};
      }

      &-title {
        margin-bottom: ${space.halfSpace};
      }
    }

    &-cell {
      span:first-of-type {
        display: inline-block;
        width: 7em;
        margin-bottom: 0.25em;
      }
    }
  }

  .food-item-name {
    color: ${color.background};
  }

  .food-item-desc {
    color: ${color.foregroundAlt};
    font-family: ${fonts.heading};
  }
`;

const sm = 14.95;
const med = 21.95;
const lg = 26.95;
const bob = 36.95;
const smThin = 14.85;
const lgThin = 21.95;
const glutenFree = 18.84;

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
    <div className="wrap menu-padding">
      <h4>Pizza</h4>
      {Object.keys(pizzas).map((key) => (
        <FoodItem data={pizzas[key]} />
      ))}
    </div>

    <div className="price-background">
      <div className="wrap">
        <h5>Original Crust</h5>
        <div className="price-grid">
          <div className="price-grid-area">
            <div className="price-grid-area-title">Sizes</div>
            <div className="price-grid-cell">
              <span>Small</span>
              <span>12&quot;</span>
            </div>
            <div className="price-grid-cell">
              <span>Medium</span>
              <span>16&quot;</span>
            </div>
            <div className="price-grid-cell">
              <span>Large</span>
              <span>18&quot;</span>
            </div>
            <div className="price-grid-cell">
              <span>Bob</span>
              <span>18&quot; x 26&quot;</span>
            </div>
          </div>
          <div className="price-grid-area">
            <div className="price-grid-area-title">Cheese</div>
            <div className="price-grid-cell">
              <span>Sm 12&quot;</span>
              <span>8.25</span>
            </div>
            <div className="price-grid-cell">
              <span>Med 16&quot;</span>
              <span>11.95</span>
            </div>
            <div className="price-grid-cell">
              <span>Lg 18&quot;</span>
              <span>12.6</span>
            </div>
            <div className="price-grid-cell">
              <span>Bob </span>
              <span>22.95</span>
            </div>
          </div>
          <div className="price-grid-area">
            <div className="price-grid-area-title">1 Topping</div>
            <div className="price-grid-cell">
              <span>Sm</span>
              <span>9.30</span>
            </div>
            <div className="price-grid-cell">
              <span>Med</span>
              <span>13.85</span>
            </div>
            <div className="price-grid-cell">
              <span>Lg</span>
              <span>14.95</span>
            </div>
            <div className="price-grid-cell">
              <span>Bob2</span>
              <span>6.95</span>
            </div>
          </div>
          <div className="price-grid-area">
            <div className="price-grid-area-title">+1 Topping</div>
            <div className="price-grid-cell">
              <span>Sm</span>
              <span>1.25</span>
            </div>
            <div className="price-grid-cell">
              <span>Med</span>
              <span>2.00</span>
            </div>
            <div className="price-grid-cell">
              <span>Lg</span>
              <span>2.30</span>
            </div>
            <div className="price-grid-cell">
              <span>Bob</span>
              <span>3.65</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="price-background">
      <div className="wrap">
        <h5>Thin & Crispy</h5>
        <div className="price-grid">
          <div className="price-grid-area">
            <div className="price-grid-area-title">Sizes</div>
            <div className="price-grid-cell">
              <span>Small</span>
              <span>12&quot;</span>
            </div>
            <div className="price-grid-cell">
              <span>Large</span>
              <span>16&quot;</span>
            </div>
            <div className="price-grid-cell">
              <span>Gluten Free</span>
              <span>12&quot;</span>
            </div>
          </div>
          <div className="price-grid-area">
            <div className="price-grid-area-title">Cheese</div>
            <div className="price-grid-cell">
              <span>12&quot;</span>
              <span>8.25</span>
            </div>
            <div className="price-grid-cell">
              <span>16&quot;</span>
              <span>11.95</span>
            </div>
            <div className="price-grid-cell">
              <span>12&quot; GF</span>
              <span>12.24</span>
            </div>
          </div>
          <div className="price-grid-area">
            <div className="price-grid-area-title">1 Topping</div>
            <div className="price-grid-cell">
              <span>12&quot;</span>
              <span>9.30</span>
            </div>
            <div className="price-grid-cell">
              <span>16&quot;</span>
              <span>13.85</span>
            </div>
            <div className="price-grid-cell">
              <span>12&quot; GF</span>
              <span>13.29</span>
            </div>
          </div>
          <div className="price-grid-area">
            <div className="price-grid-area-title">+1 Topping</div>
            <div className="price-grid-cell">
              <span>12&quot;</span>
              <span>1.25</span>
            </div>
            <div className="price-grid-cell">
              <span>16&quot;</span>
              <span>2.00</span>
            </div>
            <div className="price-grid-cell">
              <span>12&quot; GF</span>
              <span>1.25</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="price-background">
      <div className="wrap">
        <h5>Specialty Pizzas</h5>
        <div className="price-grid">
          <div className="price-grid-area">
            <div className="price-grid-area-title">Original Crust Sizes</div>
            <div className="price-grid-cell">
              <span>Small</span>
              <span>{sm}</span>
            </div>
            <div className="price-grid-cell">
              <span>Medium</span>
              <span>{med}</span>
            </div>
            <div className="price-grid-cell">
              <span>Large</span>
              <span>{lg}</span>
            </div>
            <div className="price-grid-cell">
              <span>Bob</span>
              <span>{bob}</span>
            </div>
          </div>
          <div className="price-grid-area">
            <div className="price-grid-area-title">Thin & Crispy Sizes</div>
            <div className="price-grid-cell">
              <span>Small</span>
              <span>{smThin}</span>
            </div>
            <div className="price-grid-cell">
              <span>Large</span>
              <span>{lgThin}</span>
            </div>
            <div className="price-grid-cell">
              <span>Gluten Free</span>
              <span>{glutenFree}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BackButton />
  </PizzaStyles>
);

export default Pizza;
