import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';
import mixins from '../../styles/mixins';

const { fonts, space, color } = theme;

const FoodItemStyles = styled.div`
  font-family: ${fonts.font};
  margin-bottom: 3em;

  .food-item-name {
    ${mixins.flexBetween};
    margin-bottom: ${space.quarterSpace};
    /* color: ${color.foregroundAlt}; */
    font-size: 1.5em;
    font-family: ${fonts.heading};
  }

  .food-item-desc {
    letter-spacing: 0.025em;
    font-size: 1em;
    margin-bottom: ${space.halfSpace};
    line-height: 1.4em;
  }
`;

const FoodItem = ({ data }) => (
  <FoodItemStyles>
    <div className="food-item-name">{data.name}</div>
    <div className="food-item-desc">{data.desc ? data.desc : null }</div>
  </FoodItemStyles>
);

FoodItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    desc: PropTypes.string,
  }).isRequired,
};

export default FoodItem;
