function GameMessage({ gameOver, won, onNewGame }) {
if (!gameOver && !won) {
return null;
}

if (won) {
return ( <div className="game-over-overlay victory-overlay"> <div className="game-over-modal victory-modal"> <div className="victory-glow"></div>

       <div className="victory-icon">
        🏆
      </div>

      <div className="game-over-label victory-label">
        PERFECT SCORE
      </div>

      <h2>Memory Master</h2>

      <p className="victory-text">
        You remembered every medication.
      </p>

      <div className="final-score-box">
        <span className="final-score-number">12</span>
        <span className="final-score-divider">/</span>
        <span className="final-score-total">12</span>
      </div>

      <p className="victory-subtitle">
        All cards remembered perfectly
      </p>

      <button
        className="new-game-button victory-button"
        onClick={onNewGame}
      >
        Play Again
      </button>
    </div>
  </div>
);
 
}

return ( <div className="game-over-overlay"> <div className="game-over-modal"> <div className="game-over-icon">
💊 </div>
 
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
