import React from 'react';
import ComicPages from './ComicPages';
import { comics } from '../ComicData';

const ComicPage = (item) => {

  return (
    <Container>
        {comics.map(item =>
            (<ComicPages item = {item} key={item.id}/>
            ))}
    </Container>
  );
};

export default ComicPage;