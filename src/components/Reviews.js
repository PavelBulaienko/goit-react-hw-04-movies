import propTypes from 'prop-types'

const Reviews = ({ reviews }) => (
  <ul>
    {reviews.results.map(({ id, author, content }) => (
      <li key={id}>
        <h4>Name: {author}</h4>
        <p>Review: {content}</p>
      </li>
    ))}
  </ul>
)

Reviews.propTypes = {
  reviews: propTypes.object,
}

export default Reviews
