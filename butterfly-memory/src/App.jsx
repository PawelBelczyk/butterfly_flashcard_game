import { useEffect, useState } from "react";

import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import CardGrid from "./components/CardGrid";
import GameMessage from "./components/GameMessage";

import { fetchDrugs } from "./api/drugs";

import "./App.css";

function shuffleCards(cards) {
    const shuffled = [...cards];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(
            Math.random() * (i + 1)
        );

        [shuffled[i], shuffled[randomIndex]] = [
            shuffled[randomIndex],
            shuffled[i],
        ];
    }

    return shuffled;
}

function App() {
    const [drugs, setDrugs] = useState([]);

    const [clickedDrugs, setClickedDrugs] = useState([]);

    const [score, setScore] = useState(0);

    const [bestScore, setBestScore] = useState(0);

    const [gameOver, setGameOver] = useState(false);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadDrugs() {
            try {
                const data = await fetchDrugs();

                setDrugs(shuffleCards(data));
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        loadDrugs();
    }, []);

    function handleCardClick(id) {
        if (gameOver) {
            return;
        }

        if (clickedDrugs.includes(id)) {
            setGameOver(true);
            setScore(0);
            return;
        }

        const newScore = score + 1;

        setScore(newScore);

        setClickedDrugs((current) => [
            ...current,
            id,
        ]);

        if (newScore > bestScore) {
            setBestScore(newScore);
        }

        setDrugs((current) =>
            shuffleCards(current)
        );
    }

    function newGame() {
        setScore(0);

        setClickedDrugs([]);

        setGameOver(false);

        setDrugs((current) =>
            shuffleCards(current)
        );
    }

    if (loading) {
        return (
            <div className="loading-screen">
                <div className="loading-icon">
                    💊
                </div>

                <h2>Loading drugs...</h2>

                <p>
                    Loading drug information from RxNorm.
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-screen">
                <h2>Something went wrong</h2>

                <p>{error}</p>

                <button
                    className="new-game-button"
                    onClick={() =>
                        window.location.reload()
                    }
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="app">
            <Header />

            <section className="game-header">
                <div>
                    <h2>
                        Can you remember them all?
                    </h2>

                    <p>
                        Click each drug only once.
                        Cards shuffle after every click.
                    </p>
                </div>

                <Scoreboard
                    score={score}
                    bestScore={bestScore}
                />
            </section>

            <CardGrid
                drugs={drugs}
                onCardClick={handleCardClick}
            />

            <GameMessage
                gameOver={gameOver}
                onNewGame={newGame}
            />

            <footer>
                <p>
                    Drug data provided by RxNorm.
                </p>
            </footer>
        </div>
    );
}

export default App;