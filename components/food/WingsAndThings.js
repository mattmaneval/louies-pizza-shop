import styled from 'styled-components';
import BackButton from '../navigation/BackButton';
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';

const { fonts, color, space } = theme;

const WingsAndThingsStyle = styled.div`
  .wings-item {
    margin-bottom: 3em;

    &-options {
      margin-bottom: 3em;
      color: ${color.foregroundAlt};
    }
    &-name {
      ${mixins.flexBetween}
      margin-bottom: ${space.quarterSpace};
      color: ${color.foregroundAlt};
      font-weight: bold;
      font-size: 1.5em;
      font-family: ${fonts.fontAlt};
      text-transform: uppercase;
    }

    &-desc {
      color: ${color.foregroundAlt};
      font-size: 1em;
      margin-bottom: ${space.halfSpace};
      font-family: ${fonts.heading};
    }

    &-price {
      font-family: ${fonts.fontAlt};
    }
  }
`;

const WingsAndThings = () => (
  <WingsAndThingsStyle>
    <div className="wrap">
      <h4>wings</h4>
      <div className="wings-item-options">Sauces: bbq, mild, hot, blaze, butter garlic, asian zing, park garlic</div>
      <div className="wings-item">
        <div className="wings-item-name">Traditional</div>
        <div className="wings-item-desc">
          <span>6 - </span>
          <span className="wings-item-price">7.50</span>
        </div>
        <div className="wings-item-desc">
          <span>12 - </span>
          <span className="wings-item-price">14.00</span>
        </div>
        <div className="wings-item-desc">
          <span>18 - </span>
          <span className="wings-item-price">20.50</span>
        </div>
        <div className="wings-item-desc">
          <span>24 - </span>
          <span className="wings-item-price">27.00</span>
        </div>
        <div className="wings-item-desc">
          <span>50 - </span>
          <span className="wings-item-price">50.50</span>
        </div>
      </div>
      <div className="wings-item">
        <div className="wings-item-name">Chunks</div>
        <div className="wings-item-desc">
          <span>1/2 lb - </span>
          <span className="wings-item-price">8.25</span>
        </div>
        <div className="wings-item-desc">
          <span>Add cheese - </span>
          <span className="wings-item-price">1.00</span>
        </div>
      </div>
    </div>
    <BackButton />
  </WingsAndThingsStyle>
);

export default WingsAndThings;
