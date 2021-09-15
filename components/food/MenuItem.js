import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';

const { fonts, space, color } = theme;

const MenuItemStyle = styled.div`
  margin-bottom: 3em;
  max-width: 25em;

  .menu-item {

    &-options {
      display: flex;
      margin-top: 0.5em;
    }

    &-option {
      span:first-of-type {
        margin: 0 0.5em 0 0;
      }
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .price-separator {
    margin: 0 0.5em;
  }
`;

const MenuItem = ({ data }) => (
  <MenuItemStyle>
    <div className="title">{data.name}</div>
    {data.desc
      ? (
        <div>{data.desc ? data.desc : null }</div>
      )
      : null }
    <div className="menu-item-options">
      {data.price.baby
        ? (
          <div className="menu-item-option">
            <span>baby</span>
            <span className="font-bold">{data.price.baby ? data.price.baby : null }</span>
            <span className="price-separator">|</span>
          </div>
        )
        : null }
      {data.price.sm
        ? (
          <div className="menu-item-option">
            <span>sm</span>
            <span className="font-bold">{data.price.sm ? data.price.sm : null }</span>
            <span className="price-separator">|</span>
          </div>
        )
        : null }
      {data.price.med
        ? (
          <div className="menu-item-option">
            <span>med</span>
            <span className="font-bold">{data.price.med ? data.price.med : null }</span>
            <span className="price-separator">|</span>
          </div>
        )
        : null }
      {data.price.lg
        ? (
          <div className="menu-item-option">
            <span>lg</span>
            <span className="font-bold">{data.price.lg ? data.price.lg : null }</span>
          </div>
        )
        : null }
      {data.price.sgl
        ? (
          <div className="menu-item-option">
            <span>single</span>
            <span className="font-bold">{data.price.sgl ? data.price.sgl : null }</span>
            <span className="price-separator">|</span>
          </div>
        )
        : null }
      {data.price.dbl
        ? (
          <div className="menu-item-option">
            <span> double</span>
            <span className="font-bold">{data.price.dbl ? data.price.dbl : null }</span>
          </div>
        )
        : null }
      {data.price.fam
        ? (
          <div className="menu-item-option">
            <span>family</span>
            <span className="font-bold">{data.price.fam ? data.price.fam : null }</span>
          </div>
        )
        : null }
      {data.price.half
        ? (
          <div className="menu-item-option">
            <span>half</span>
            <span className="font-bold">{data.price.half ? data.price.half : null }</span>
            <span className="price-separator">|</span>
          </div>
        )
        : null }
      {data.price.whole
        ? (
          <div className="menu-item-option">
            <span>whole</span>
            <span className="font-bold">{data.price.whole ? data.price.whole : null }</span>
          </div>
        )
        : null }
      {data.price.bucket
        ? (
          <div className="menu-item-option">
            <span>bucket</span>
            <span className="font-bold">{data.price.bucket ? data.price.bucket : null }</span>
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
