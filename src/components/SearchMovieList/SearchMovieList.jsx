import { Link, useLocation } from 'react-router-dom';
import noPhoto from 'images/no-image-icon.png';
import {
  MovieUl,
  MovieItem,
  TittleDiv,
} from 'components/SearchMovieList/SearchMovieListStyled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  const elements = movies.map(({ id, title, poster_path }) => (
    <MovieItem key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : noPhoto
          }
          alt={title}
        />
        <TittleDiv>
          <p>{title}</p>
        </TittleDiv>
      </Link>
    </MovieItem>
  ));

  return <MovieUl>{elements}</MovieUl>;
};
