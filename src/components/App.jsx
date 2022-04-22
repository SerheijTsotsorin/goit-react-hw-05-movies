import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from 'components/Layout/Layout';
import Loader from 'components/Loader/Loader';
// import { Navigation } from './Navigation/Navigation';

// import HomePage from '../view/HomePage';
// import MoviesPage from '../view/MoviesPage';
// import MovieDetailsPage from '../view/MovieDetailsPage';
// import Cast from '../view/Cast';
// import Reviews from '../view/Reviews';

// const loader = componentName => {
//   return lazy(() =>
//     import(`../view/${componentName}`).then(module => ({
//       default: module[componentName],
//     }))
//   );
// };

// const HomePage = loader('HomePage');
// const MoviesPage = loader('MoviesPage');
// const MovieDetailsPage = loader('MovieDetailsPage');
// const Cast = loader('Cast');
// const Reviews = loader('Reviews');

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />} />
//         <Route path="movies" element={<MoviesPage />} />
//         <Route path="movies/:movieId" element={<MovieDetailsPage />}>
//           <Route path="cast" element={<Cast />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
//         <Route path="*" element={<Navigation to="/" />} />
//       </Route>
//     </Routes>
//   );
// };

const HomePage = lazy(() =>
  import('../view/HomePage' /* webpackChunkName: "HomePage" */)
);
const MoviesPage = lazy(() =>
  import('../view/MoviesPage' /* webpackChunkName: "MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import('../view/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */)
);
const Cast = lazy(() => import('../view/Cast' /* webpackChunkName: "Cast" */));

const Reviews = lazy(() =>
  import('../view/Reviews' /* webpackChunkName: "Reviews" */)
);

export const App = () => (
  <>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  </>
);
