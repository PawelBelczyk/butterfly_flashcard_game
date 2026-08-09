import Card from "./Card";

function CardGrid({ drugs, onCardClick }) {
  return (
    <main className="card-grid">
      {drugs.map((drug) => (
        <Card
          key={drug.id}
          drug={drug}
          onClick={onCardClick}
        />
      ))}
    </main>
  );
}

export default CardGrid;