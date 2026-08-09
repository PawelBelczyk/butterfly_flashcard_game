function Scoreboard({ score, bestScore }) {
    return (
        <div className="scoreboard">
            <div className="score">
                <span>Score</span>
                <strong>{score}</strong>
            </div>

            <div className="best-score">
                <span>Best</span>
                <strong>{bestScore}</strong>
            </div>
        </div>
    );
}

export default Scoreboard;