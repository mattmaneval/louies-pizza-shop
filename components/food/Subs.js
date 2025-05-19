import styled from 'styled-components';
import { subsData } from '../../data/subs-local';
import MenuItem from './MenuItem';
import BackButton from '../navigation/BackButton';

const SubsDetails = styled.div`
  margin-bottom: 3em;
`;

const Subs = () => (
  <section>
    <div className="wrap">
      <h1>subs & calzones</h1>
      <SubsDetails>
        <div>
          <span>Turn any sub into a calzone | </span>
          <span className="font-bold">9.39</span>
        </div>
        <div>
          <span>Make any sub or calzone a basket with fries and slaw | </span>
          <span className="font-bold">2.99</span>
        </div>
        <div>
          <span>Extra meat | </span>
          <span className="font-bold">1.89</span>
        </div>
        <div>
          <span>Extra cheese | </span>
          <span className="font-bold">.99</span>
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
