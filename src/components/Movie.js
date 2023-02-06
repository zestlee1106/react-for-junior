import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({
  coverImage,
  title,
  summary,
  genres,
  id,
  year,
  isDetail = false,
}) {
  return (
    <div className={styles.movie} style={{ marginTop: "60px" }}>
      <img src={coverImage} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          {isDetail ? title : <Link to={`/movie/${id}`}>{title}</Link>}
        </h2>
        {year ? <h3 className={styles.movie__year}>{year}</h3> : null}

        {summary ? (
          <p>
            {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
          </p>
        ) : null}
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
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
