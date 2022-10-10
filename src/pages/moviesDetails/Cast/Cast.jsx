import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import noPhoto from 'images/no-image-icon.png';
import { getMovieCast } from 'components/API/Api';
import { CastList, ItemLi } from 'pages/moviesDetails/Cast/CastStyled';

export const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(0);

  useEffect(() => {
    getMovieCast(id).then(setCast);
  }, [id]);

  if (!cast.cast) {
    return;
  }

  const elements = cast.cast.map(({ id, profile_path, original_name }) => {
    return (
      <ItemLi key={id}>
        <img
          width="100px"
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : noPhoto
          }
          alt={original_name}
        />
        <p>{original_name}</p>
      </ItemLi>
    );
  });
  return <CastList>{elements}</CastList>;
};
