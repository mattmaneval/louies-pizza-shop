import { pizzasData } from '../../data/pizzas-local';
import MenuItem from './MenuItem';
import SpecialtyPizzaPrices from './price-tables/specialty-pizza-prices';
import OriginalCrustPrices from './price-tables/original-crust-prices';
import ThinAndCrispyPrices from './price-tables/thin-and-crispy-prices';
import BackButton from '../navigation/BackButton';

const Pizza = () => (
  <section>
    <div className="wrap">
      <h1>specialty pizzas</h1>
      <SpecialtyPizzaPrices />
      {Object.keys(pizzasData).map((key) => (
        <MenuItem data={pizzasData[key]} />
      ))}
      <h1>build your own</h1>
      <OriginalCrustPrices />
      <ThinAndCrispyPrices />
      <BackButton />
    </div>
  </section>
);

export default Pizza;
