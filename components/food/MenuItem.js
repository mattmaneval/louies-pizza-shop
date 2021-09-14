import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';

const { fonts, space, color } = theme;

const MenuItemStyle = styled.div`
  font-family: ${fonts.fontAlt};
  margin-bottom: 3em;
  max-width: 25em;

  .menu-item {
    &-name {
      color: ${color.foregroundAlt};
      margin-bottom: ${space.quarterSpace};
      font-size: 1.5em;
      text-transform: uppercase;
    }

    &-desc,
    &-options {
      color: ${color.foregroundAlt};
      font-family: ${fonts.font};
    }

    &-desc {
      font-family: ${fonts.font};
      font-size: 1em;
      /* margin-bottom: ${space.halfSpace}; */
      line-height: 1.4em;
    }

    &-price {
      font-family: ${fonts.fontAlt};
    }

    &-price-separator {
      margin: 0 0.5em;
    }

    &-options {
      display: flex;
      margin-top: 0.5em;
    }

    &-option {
      font-size: 0.875em;
      /* margin-right: ${space.halfSpace}; */
      /* margin: 0 0.5em 0 0; */

      span:first-of-type {
        margin: 0 0.5em 0 0;
      }
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const MenuItem = ({ data }) => (
  <MenuItemStyle>
    <div className="menu-item-name">{data.name}</div>
    {data.desc
      ? (
        <div className="menu-item-desc">{data.desc ? data.desc : null }</div>
      )
      : null }
    <div className="menu-item-options">
      {data.price.oneSize
        ? (
          <div className="menu-item-option">
            <span className="menu-item-price">{data.price.oneSize ? data.price.oneSize : null }</span>
          </div>
        )
        : null }
      {data.price.baby
        ? (
          <div className="menu-item-option">
            <span>Baby</span>
            <span className="menu-item-price">{data.price.baby ? data.price.baby : null }</span>
            <span className="menu-item-price-separator"> | </span>
          </div>
        )
        : null }
      {data.price.sm
        ? (
          <div className="menu-item-option">
            <span>Sm</span>
            <span className="menu-item-price">{data.price.sm ? data.price.sm : null }</span>
            <span className="menu-item-price-separator"> | </span>
          </div>
        )
        : null }
      {data.price.med
        ? (
          <div className="menu-item-option">
            <span>Med</span>
            <span className="menu-item-price">{data.price.med ? data.price.med : null }</span>
            <span className="menu-item-price-separator"> | </span>
          </div>
        )
        : null }
      {data.price.lg
        ? (
          <div className="menu-item-option">
            <span>Lg</span>
            <span className="menu-item-price">{data.price.lg ? data.price.lg : null }</span>
          </div>
        )
        : null }
      {data.price.sgl
        ? (
          <div className="menu-item-option">
            <span>Single</span>
            <span className="menu-item-price">{data.price.sgl ? data.price.sgl : null }</span>
            <span className="menu-item-price-separator"> | </span>
          </div>
        )
        : null }
      {data.price.dbl
        ? (
          <div className="menu-item-option">
            <span>Double</span>
            <span className="menu-item-price">{data.price.dbl ? data.price.dbl : null }</span>
          </div>
        )
        : null }
      {data.price.fam
        ? (
          <div className="menu-item-option">
            <span>Family</span>
            <span className="menu-item-price">{data.price.fam ? data.price.fam : null }</span>
          </div>
        )
        : null }
      {data.price.half
        ? (
          <div className="menu-item-option">
            <span>Half</span>
            <span className="menu-item-price">{data.price.half ? data.price.half : null }</span>
            <span className="menu-item-price-separator"> | </span>
          </div>
        )
        : null }
      {data.price.whole
        ? (
          <div className="menu-item-option">
            <span>Whole</span>
            <span className="menu-item-price">{data.price.whole ? data.price.whole : null }</span>
          </div>
        )
        : null }
      {data.price.bucket
        ? (
          <div className="menu-item-option">
            <span>Bucket</span>
            <span className="menu-item-price">{data.price.bucket ? data.price.bucket : null }</span>
          </div>
        )
        : null }
    </div>
  </MenuItemStyle>
);

MenuItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    desc: PropTypes.string,
    price: {
      baby: PropTypes.number,
      small: PropTypes.number,
      medium: PropTypes.number,
      large: PropTypes.number,
      sgl: PropTypes.number,
    },
  }).isRequired,
};

export default MenuItem;
