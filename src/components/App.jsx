import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'components/AppStyled';
import { AppBar } from 'components/AppBar/AppBar';

import { Home } from 'pages/Home/Home';
import { MoviesDetails } from 'pages/moviesDetails/MoviesDetails';
import { Movies } from 'pages/Movies/Movies';
import { NoFound } from 'pages/NoFound/NoFound';

const Cast = lazy(() => import('pages/moviesDetails/Cast/Cast'));
const Reviews = lazy(() => import('pages/moviesDetails/Reviews/Reviews'));

export const App = () => {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NoFound />} />
      </Routes>
    </Container>
  );
};
