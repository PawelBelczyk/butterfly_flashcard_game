 function GameMessage({ gameOver, onNewGame }) {
  if (!gameOver) {
    return null;
  }

  return (
    <div className="game-over-overlay">
      <div className="game-over-modal">
        <div className="game-over-icon">
          💊
        </div>

        <div className="game-over-label">
          MEMORY FAILED
        </div>

        <h2>Game Over</h2>

        <p>
          You clicked the same medication twice.
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
 