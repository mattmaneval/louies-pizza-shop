import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';
import mixins from '../../styles/mixins';
import GlutenFree from '../icons/Gluten-Free';

const { fonts, space, color } = theme;

const PriceStyles = styled.div`

`;

const Price = ({ data }) => (
  <PriceStyles>
    {data.price
      ? `${typeof data.price === 'object'
        ?  `Sm ${data.price.sm}`
        : `${data.price}`}`
      :
      ''}
    {data.price
      ? `${typeof data.price === 'object'
        ?  `Med ${data.price.med}`
        : `${data.price}`}`
      :
      ''}
    {data.price
      ? `${typeof data.price === 'object'
        ?  `Lg ${data.price.lg}`
        : `${data.price}`}`
      :
      ''}
    {data.price
      ? `${typeof data.price === 'object'
        ?  `Bob ${data.price.bob}`
        : `${data.price}`}`
      :
      ''}
    {data.price
      ? `${typeof data.price === 'object'
        ?  `12" Thin ${data.price.smThin}`
        : `${data.price}`}`
      :
      ''}
    {data.price
      ? `${typeof data.price === 'object'
        ?  `16" Thin ${data.price.lgThin}`
        : `${data.price}`}`
      :
      ''}
    {data.price
      ? `${typeof data.price === 'object'
        ?  `12" Gluten Free ${data.price.glutenFree}`
        : `${data.price}`}`
      :
      ''}
  </PriceStyles>
);

export default Price;


// Med ${data.price.med} Lg ${data.price.lg} Bob ${data.price.bob} 12" Thin ${data.price.smThin} 16" Thin ${data.price.lgThin} 12" Gluten Free ${data.price.glutenFree}
