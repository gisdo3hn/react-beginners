import PropsType from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`movie/${id}`}>{title}</Link>
      </h2>

      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propsType = {
  id: PropsType.string.isRequired,
  coverImg: PropsType.string.isRequired,
  title: PropsType.string.isRequired,
  summary: PropsType.string.isRequired,
  genres: PropsType.arrayOf(PropsType.string).isRequired,
};

export default Movie;
