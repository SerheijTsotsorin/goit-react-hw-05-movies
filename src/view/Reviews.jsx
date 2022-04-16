import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from '../services/MovieAPI';
import ReviewList from '../components/ReviewList/ReviewList';
import Loader from '../components/Loader/Loader';

const Reviews = () => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setStatus('pending');
        const data = await fetchMoviesReviews(itemId);
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
  }, [itemId]);

  if (status === 'idle') {
    return <p>idle</p>;
  }
  if (status === 'pending') {
    return <Loader />;
  }
  if (status === 'resolved') {
    return data.total_results !== 0 ? (
      <ReviewList data={data.results} />
    ) : (
      <p>We don't have any reviews for this movie</p>
    );
  }

  if (status === 'rejected') {
    return <h2>{error}</h2>;
  }
};

export default Reviews;
