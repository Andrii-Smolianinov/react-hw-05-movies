// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'components/AppStyled';
import { AppBar } from 'components/AppBar/AppBar';

import { Home } from 'pages/Home/Home';
import { MoviesDetails } from 'pages/moviesDetails/MoviesDetails';
import { Movies } from 'pages/Movies/Movies';
import { Cast } from 'pages/moviesDetails/Cast/Cast';
import { Reviews } from 'pages/moviesDetails/Reviews/Reviews';
import { NoFound } from 'pages/NoFound/NoFound';

// const  Home = lazy(() => import('pages/Home/Home'));
// const Movies = lazy(() => import('pages/Movies/Movies'));
// const MoviesDetails = lazy(() => import('pages/moviesDetails/MoviesDetails'));
// const Cast = lazy(() => import('pages/moviesDetails/Cast/Cast'));
// const Reviews = lazy(() => import('pages/moviesDetails/Reviews/Reviews'));
// const NoFound = lazy(() => import('pages/NoFound/NoFound'));

export const App = () => {
  return (
    <Container>
      <AppBar />
      {/* <Suspense fallback={<p>Loading...</p>}> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NoFound />} />
      </Routes>
      {/* </Suspense> */}
    </Container>
  );
};
