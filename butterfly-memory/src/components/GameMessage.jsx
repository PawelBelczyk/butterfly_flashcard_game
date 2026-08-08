function GameMessage({ gameOver, onNewGame }) {
    if (!gameOver) {
        return null;
    }

    return (
        <div className="game-message">
            <div className="message-card">
                <div className="large-butterfly">🦋</div>

                <h2>Game Over!</h2>

                <p>
                    You clicked a butterfly you had already selected.
                </p>

                <button
                    className="new-game-button"
                    onClick={onNewGame}
                >
                    Play Again
                </button>
            </div>
        </div>
    );
}

export default GameMessage;