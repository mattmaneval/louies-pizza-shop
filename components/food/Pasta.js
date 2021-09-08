import styled from 'styled-components';
import FoodItem from './FoodItem';
import BackButton from '../navigation/BackButton';
import theme from '../../styles/theme';

const { color, fonts, space } = theme;

const PastaStyle = styled.section`
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

const pastaData = [
  {
    name: 'Spaghetti With Meat Sauce',
    desc: 'Single - 8.48  Family - 29.99',
  },
  {
    name: 'Spaghetti with Meatballs',
    desc: 'Single - 8.99  Family - 32.95',
  },
  {
    name: 'Fettucini Alfredo',
    desc: 'Single - 7.99  Family - 28.99',
  },
  {
    name: 'Chicken Bacon Fettucine Alfredo',
    desc: 'Single -  8.99 Family - 32.95',
  },
  {
    name: 'Chicken Parmesan',
    desc: 'Single -  8.99 Family - 32.95',
  },
];

const Pasta = () => (
  <PastaStyle>
    <div className="wrap">
      <h4>Pasta</h4>
      {Object.keys(pastaData).map((key) => (
        <FoodItem data={pastaData[key]} />
      ))}
    </div>
    <BackButton />
  </PastaStyle>
);

export default Pasta;
