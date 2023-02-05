import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImage, title, summary, genres, id, isTitleLink = true }) {
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h2>{isTitleLink ? <Link to={`/movie/${id}`}>{title}</Link> : title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  isTitleLink: PropTypes.bool,
};

export default Movie;
