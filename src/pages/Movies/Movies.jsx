import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'components/API/Api';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { MovieList } from 'components/SearchMovieList/SearchMovieList';
import { Main } from 'pages/Home/HomeStyled';
import { Loader } from 'components/Loader/Loader';

export const Movies = () => {
  const location = useLocation()  
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuerry = searchParams.get('searchQuerry') ?? '';

  useEffect(
    query => {
      if (!searchQuerry) {
        return;
      }
      const fetchMovies = async () => {
        try {
          setLoading(true);
          const result = await getSearchMovie(searchQuerry);
          setMovies(result.results);
        } catch (error) {
        } finally {
          setLoading(false);
        }
      };
      fetchMovies();
    },
    [searchQuerry]
  );

  const changeSearch = value => {
    setSearchParams(value !== '' ? { searchQuerry: value } : {});
  };

  return (
    <Main>
      {loading && <Loader />}
      <SearchBox value={searchQuerry} onSearch={changeSearch} />
      <MovieList movies={movies} state={{ from: location}} />
    </Main>
  );
};
