import "./Ranking.css";

export default function Ranking({ title, rankingList }) {
  return (
    <div className="ranking-container">
      <h4>{title}</h4>
      <ol className="ranking-list">
        {rankingList.map((item) => {
          return (
            <li key={item.id} className="ranking-item">
              <div className="ranking-img"></div>
              <h4 className="ranking-number">{item.id + 1}</h4>
              <div>
                <div className="ranking-title">{item.title}</div>
                <div className="ranking-artist">{item.artist}</div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
