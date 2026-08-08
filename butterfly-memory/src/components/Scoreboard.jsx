function Scoreboard({ score, bestScore }) {
    return (
        <section className="scoreboard">
            <div className="score">
                <span>Score</span>
                <strong>{score}</strong>
            </div>

            <div className="best-score">
                <span>Best Score</span>
                <strong>{bestScore}</strong>
            </div>
        </section>
    );
}

export default Scoreboard;