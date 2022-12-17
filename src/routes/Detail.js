import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  async function getMovie() {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{movie.title_long}</h1>
          <img src={movie.medium_cover_image} />
          <h2>{`Runtime: ${movie.runtime} minutes`}</h2>
          <a href="https://yts.mx/torrent/download/A8B0DDC0DAA2B6367FDB6317AEA8C7C6952653E5">
            Download1
          </a>
          <h5>{`quality: ${movie.torrents[0].quality}`}</h5>
          <h5>{`size: ${movie.torrents[0].size}`}</h5>
          <a href="https://yts.mx/torrent/download/6E33119C84F7634CCA354F7D7D4A90CCC08CB572">
            Download2
          </a>
          <h5>{`quality: ${movie.torrents[1].quality}`}</h5>
          <h5>{`size: ${movie.torrents[1].size}`}</h5>
        </div>
      )}
    </div>
  );
}

export default Detail;
//[마지막 단계 : 코드 챌린지]
// - Home에서 해줬던 loading을 Detail에 해주기
// - movie가 State에 없음. 현재 API에서 json을 받아와서 아무것도 안 하고 있는 상태.
// -> 힌트: json을 state에 넣어보기
