import Card from "./Card";

function CardGrid({ butterflies, onCardClick }) {
    return (
        <main className="card-grid">
            {butterflies.map((butterfly) => (
                <Card
                    key={butterfly.id}
                    butterfly={butterfly}
                    onClick={onCardClick}
                />
            ))}
        </main>
    );
}

export default CardGrid;