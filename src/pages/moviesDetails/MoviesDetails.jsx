import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMovieById } from 'components/API/Api';
import {
  LinkMovie,
  FlexDiv,
  MainDiv,
  MenuDiv,
  LinksDiv,
  ImgDiv,
} from 'pages/moviesDetails/MoviesDetailsStyled';
import noPhoto from 'images/no-image-icon.png';
import { GiFilmProjector } from 'react-icons/gi';
import { ImFilm } from 'react-icons/im';
import { TbArrowBack } from 'react-icons/tb';

const navItems = [
  { href: 'cast', text: 'Cast', icon: GiFilmProjector },
  { href: 'reviews', text: 'Reviews', icon: ImFilm },
];

export const MoviesDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  

  useEffect(() => {
    getMovieById(id).then(setMovie);
  }, [id]);
 
  return (
    <>
      {movie && (
        <MainDiv>
          <FlexDiv>
            <ImgDiv>
              <button >
                <TbArrowBack size={16} />
                Go back
              </button>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : noPhoto
                }
                alt={movie.original_title}
              />
            </ImgDiv>
            <MenuDiv>
              <h2>{movie.original_title}</h2>
              <p>User score: {Math.round((movie.vote_average * 100) / 10)}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>
                {movie.genres
                  ? movie.genres.map(item => item.name).join(', ')
                  : '...'}
              </p>
            </MenuDiv>
          </FlexDiv>

          <LinksDiv>
            <p>Aditional information</p>

            {navItems.map(({ href, text, icon: Icon }) => (
              <LinkMovie key={href} to={href} end>
                <Icon size={22} />
                {text}
              </LinkMovie>
            ))}
          </LinksDiv>
          <Outlet />
        </MainDiv>
      )}
    </>
  );
};
