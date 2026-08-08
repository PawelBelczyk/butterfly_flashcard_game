import { useEffect, useState } from "react";

import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import CardGrid from "./components/CardGrid";
import GameMessage from "./components/GameMessage";

import { fetchButterflies } from "./api/butterflies";

import "./App.css";

function App() {
    const [butterflies, setButterflies] = useState([]);

    const [clickedButterflies, setClickedButterflies] = useState([]);

    const [score, setScore] = useState(0);

    const [bestScore, setBestScore] = useState(0);

    const [gameOver, setGameOver] = useState(false);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadButterflies() {
            try {
                const data = await fetchButterflies();

                setButterflies(shuffleCards(data));
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        loadButterflies();
    }, []);

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

    function handleCardClick(id) {
        if (gameOver) {
            return;
        }

        if (clickedButterflies.includes(id)) {
            setGameOver(true);
            setScore(0);
            return;
        }

        const newScore = score + 1;

        setScore(newScore);

        setClickedButterflies((current) => [
            ...current,
            id,
        ]);

        if (newScore > bestScore) {
            setBestScore(newScore);
        }

        setButterflies((current) =>
            shuffleCards(current)
        );
    }

    function newGame() {
        setScore(0);

        setClickedButterflies([]);

        setGameOver(false);

        setButterflies((current) =>
            shuffleCards(current)
        );
    }

    if (loading) {
        return (
            <div className="loading-screen">
                <div className="loading-butterfly">
                    🦋
                </div>

                <h2>Finding butterflies...</h2>

                <p>Loading beautiful species from GBIF.</p>
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
                    onClick={() => window.location.reload()}
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
                    <h2>Can you remember them all?</h2>

                    <p>
                        Click each butterfly only once.
                        Cards shuffle after every click.
                    </p>
                </div>

                <Scoreboard
                    score={score}
                    bestScore={bestScore}
                />
            </section>

            <CardGrid
                butterflies={butterflies}
                onCardClick={handleCardClick}
            />

            <GameMessage
                gameOver={gameOver}
                onNewGame={newGame}
            />

            <footer>
                <p>
                    Butterfly data provided by GBIF.
                </p>
            </footer>
        </div>
    );
}

export default App;