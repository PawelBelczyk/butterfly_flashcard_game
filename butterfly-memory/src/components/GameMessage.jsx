function GameMessage({ gameOver, onNewGame }) {
    if (!gameOver) {
        return null;
    }

    return (
        <div className="game-message">
            <h2>Game Over 💊</h2>

            <p>
                You clicked the same drug twice.
            </p>

            <button
                className="new-game-button"
                onClick={onNewGame}
            >
                New Game
            </button>
        </div>
    );
}

export default GameMessage;