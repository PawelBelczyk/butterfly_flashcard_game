 function Scoreboard({ score, bestScore }) {
  return (
    <div className="scoreboard">
      <div className="score-box">
        <span>Current</span>
        <strong>{score}</strong>
      </div>

      <div className="score-box best">
        <span>Best</span>
        <strong>{bestScore}</strong>
      </div>
    </div>
  );
}

export default Scoreboard;
 