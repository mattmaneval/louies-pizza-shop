import styled from 'styled-components';
import { subsData } from '../../data/subs-local';
import MenuItem from './MenuItem';
import BackButton from '../navigation/BackButton';
import theme from '../../styles/theme';

const { fonts, color, space } = theme;

const SubsDetails = styled.div`
  font-family: ${fonts.heading};
  color: ${color.foreground};
  margin-bottom: 3em;

  .sub-detail {
    margin-bottom: ${space.quarterSpace};
  }
`;

const Subs = () => (
  <section>
    <div className="wrap">
      <h4>subs</h4>
      <SubsDetails>
        <div className="sub-detail">Turn any sub into a calzone - 7.65</div>
        <div className="sub-detail">Make any sub or calzone a basket with fries and slaw - 2.35</div>
        <div className="sub-detail">Extra meat - 1.00</div>
        <div className="sub-detail">Extra cheese - .50</div>
      </SubsDetails>
      {Object.keys(subsData).map((key) => (
        <MenuItem data={subsData[key]} />
      ))}
    </div>
    <BackButton />
  </section>
);

export default Subs;
