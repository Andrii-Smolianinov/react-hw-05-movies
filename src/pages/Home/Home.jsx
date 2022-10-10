import { useState, useEffect } from 'react';
import { getTrendMovies } from 'components/API/Api';
import { TrandMovieList } from 'components/TrandMovieList/TrandMovieList';
import { MainTittle, Main } from 'pages/Home/HomeStyled';
import { Loader } from 'components/Loader/Loader';


export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const result = await getTrendMovies();
        setMovies(result.results);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <Main>
      {loading && <Loader />}
      <MainTittle>Trending today</MainTittle>
      <TrandMovieList movies={movies} />
    </Main>
  );
};
