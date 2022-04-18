import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesActors } from '../services/MovieAPI';
import CastList from '../components/CastList/CastList';
import Loader from '../components/Loader/Loader';

const Cast = () => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setStatus('pending');
        const data = await fetchMoviesActors(movieId);
        if (!data) {
          return await Promise.reject(new Error('Try another name'));
        } else {
          setData(data);
        }
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        setError(error.message);
      }
    }
    fetchData();
  }, [movieId]);

  if (status === 'idle') {
    return <p>idle</p>;
  }
  if (status === 'pending') {
    return <Loader />;
  }
  if (status === 'resolved') {
    return <CastList data={data} />;
  }

  if (status === 'rejected') {
    return <h2>{error}</h2>;
  }
};

export default Cast;
