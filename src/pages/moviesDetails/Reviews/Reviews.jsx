import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/API/Api';
import { Tittle, ReviewsDiv } from 'pages/moviesDetails/Reviews/ReviewsStyled';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setRewiews] = useState(0);
  useEffect(() => {
    getMovieReviews(id).then(setRewiews);
  }, [id]);
  if (!reviews.total_results) {
    return <Tittle>We don't have any reviews for this movie</Tittle>;
  }
  const elements = reviews.results.map(({ id, author, content }) => {
    return (
      <ReviewsDiv key={id}>
        <h3>
          author: <span>{author}</span>
        </h3>
        <p>{content}</p>
      </ReviewsDiv>
    );
  });
  return <div>{elements}</div>;
};
export default Reviews;
