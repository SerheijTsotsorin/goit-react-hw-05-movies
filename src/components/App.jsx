// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         textTransform: 'uppercase',
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
// import { HomePage } from 'components/HomePage/HomePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<HomePage />} /> */}
      </Route>
    </Routes>
  );
};
