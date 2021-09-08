import styled from 'styled-components';
import BackButton from '../navigation/BackButton';
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';

const { fonts, color, space } = theme;

const WingsAndThingsStyle = styled.div`
  background: ${color.foregroundTert};
  margin-bottom: ${space.space};

  h4 {
    color: ${color.foreground};
  }

  .wings-item {
    margin-bottom: ${space.space};

    &-name {
      ${mixins.flexBetween};
      margin-bottom: ${space.quarterSpace};
      color: ${color.background};
      font-weight: bold;
      font-size: 1.5em;
      font-family: ${fonts.heading};
    }

    &-desc {
      color: ${color.foreground};
      font-size: 1em;
      margin-bottom: ${space.halfSpace};
      font-family: ${fonts.heading};
    }
  }
`;

const WingsAndThings = () => (
  <WingsAndThingsStyle>
    <div className="wrap">
      <div className="menu-padding">
        <h4>Wings & Things</h4>
        <div>
          <div className="wings-item-desc">Sauces: Bbq, Mild, Hot, Blaze, Butter Garlic, Asian Zing, Park Garlic</div>
        </div>
        <div className="wings-item">
          <div className="wings-item-name">Chicken Wings</div>
          <div className="wings-item-desc">6 - 7.50</div>
          <div className="wings-item-desc">12 - 14.00</div>
          <div className="wings-item-desc">18 - 20.50</div>
          <div className="wings-item-desc">24 - 27.00</div>
          <div className="wings-item-desc">50 - 50.50</div>
        </div>
        <div>
          <div className="wings-item-name">Chicken Chunks</div>
          <div className="wings-item-desc">1/2 lb - 8.25</div>
          <div className="wings-item-desc">Add Cheese - 1.00</div>
        </div>
      </div>
    </div>
    <BackButton />
  </WingsAndThingsStyle>
);

export default WingsAndThings;
