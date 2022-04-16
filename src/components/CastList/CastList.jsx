import PropTypes from 'prop-types';
import { ActorsList, ActorsItem } from './CastList.styled';

const CastList = ({ data }) => {
  return (
    <ActorsList>
      {data.map(actor => {
        const { id, profile_path, name, character } = actor;
        const fullPath = `https://image.tmdb.org/t/p/w500${profile_path}`;
        return (
          <ActorsItem key={id}>
            <img src={fullPath} alt={name} width="100px" loading="lazy" />
            <h3>{name}</h3>
            <p>
              Character:
              <span> {character}</span>
            </p>
          </ActorsItem>
        );
      })}
    </ActorsList>
  );
};

export default CastList;

CastList.propTypes = {
  data: PropTypes.array.isRequired,
};
