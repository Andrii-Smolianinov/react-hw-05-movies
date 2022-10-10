import React from 'react';
import { Link } from 'react-router-dom';
import {
  MoviesList,
  ItemLi,
  TittleDiv,
  Img,
  
} from 'components/TrandMovieList/TandMoviesListStyled';
import noPhoto from 'images/no-image-icon.png';

export const TrandMovieList = ({ movies }) => {
  console.log(movies);
  const elements = movies.map(({ id, title, poster_path }) => (
    <ItemLi key={id}>
      <Link to={`/movies/${id}`}>
        <Img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : noPhoto
          }
          alt=""
        />{' '}
        <TittleDiv>
          <p>{title}</p>
        </TittleDiv>
      </Link>
    </ItemLi>
  ));

  return <MoviesList>{elements}</MoviesList>;
};
