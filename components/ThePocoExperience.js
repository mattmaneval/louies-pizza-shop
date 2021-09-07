import styled from 'styled-components';
import theme from '../styles/theme';

const { color } = theme;

const ThePocoExperienceStyle = styled.section`
  background-color: ${color.background};
  /* margin-bottom: 6rem; */

  .wrap {
    max-width: 40em;
    text-align: left;
  }

  h3 {
    // color: ${color.background};
  }

  p {
    color: ${color.foregroundDim};
  }
`;

const ThePocoExperience = () => (
  <ThePocoExperienceStyle>

      <h3>The Poco Experience</h3>
      <p>
        Poco Piatti means &quot;small plates.&quot; Here, you have the opportunity to
        experience the many flavors of the mediterranean! We strive to create
        dishes that are unique and healthy using only the most fresh and best
        quality ingredients. So share the small, or large, plates with your
        table and enjoy!
      </p>
  
  </ThePocoExperienceStyle>
);

export default ThePocoExperience;
