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
    font-weight: bold;
    font-size: 1.5em;
    font-family: ${fonts.heading};
  }

  .food-item-desc {
    letter-spacing: 0.025em;
    font-size: 1em;
    margin-bottom: ${space.halfSpace};
    line-height: 1.4em;
  }

  .food-item-options {
    display: flex;
    align-items: center;
    color: ${color.foreground};
    text-transform: uppercase;
    font-family: ${fonts.fontBold};
    letter-spacing: 0.25em;
    font-size: 0.8em;

    svg {
      width: 1.5em;
      height: 1.5em;
      fill: rgb(0, 160, 72);;
      margin-right: 0.85em;
    }
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
