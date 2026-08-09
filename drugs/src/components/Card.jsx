 function Card({ drug, onClick }) {
  return (
    <button
      className="card"
      onClick={() => onClick(drug.id)}
      aria-label={drug.name}
    >
      <div className="card-image">
        <img
          src={drug.image}
          alt={drug.name}
        />
      </div>

      <div className="card-glow"></div>
    </button>
  );
}

export default Card;
 