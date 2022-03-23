import { useEffect, useState } from 'react';
import styled from 'styled-components';
import sanityClient from '../client';
import Special from './Special';
import media from '../styles/media';
import theme from '../styles/theme';

const { color } = theme;

const GlobalHeaderStyles = styled.div`
  background-color: ${color.foregroundAlt};
  color: ${color.background};
  padding: 0.95em 0;
  text-align: center;

  @media ${media.secondary} {
    padding: 0.8em 0;
  }
`;

export default function GlobalHeader() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "specials" && (("active" in categories))] {
        title,
      }`,
    )
      .then((data) => setAllPosts(data));
  }, []);

  return (
    <GlobalHeaderStyles>
      {allPostsData
      && allPostsData.map((post, index) => (
        <Special
          index={index}
          special={post.title}
        />
      ))}

    </GlobalHeaderStyles>
  );
}
