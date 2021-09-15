import styled from 'styled-components';
import { subsData } from '../../data/subs-local';
import MenuItem from './MenuItem';
import BackButton from '../navigation/BackButton';
import theme from '../../styles/theme';

const { fonts, color, space } = theme;

const SubsDetails = styled.div`
  margin-bottom: 3em;

  .sub-detail {
    color: ${color.foregroundAlt};
    margin-bottom: ${space.quarterSpace};
    line-height: 1.5em;

    &-price {
      font-family: ${fonts.fontAlt};
    }
  }
`;

const Subs = () => (
  <section>
    <div className="wrap">
      <h1>subs</h1>
      <SubsDetails>
        <div className="sub-detail">
          <span>Turn any sub into a calzone - </span>
          <span className="sub-detail-price">7.65</span>
        </div>
        <div className="sub-detail">
          <span>Make any sub or calzone a basket with fries and slaw - </span>
          <span className="sub-detail-price">2.35</span>
        </div>
        <div className="sub-detail">
          <span>Extra meat -</span>
          <span className="sub-detail-price">1.00</span>
        </div>
        <div className="sub-detail">
          <span>Extra cheese - </span>
          <span className="sub-detail-price">.50</span>
        </div>
      </SubsDetails>
      {Object.keys(subsData).map((key) => (
        <MenuItem data={subsData[key]} />
      ))}
    </div>
    <BackButton />
  </section>
);

export default Subs;
