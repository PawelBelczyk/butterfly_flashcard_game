function Card({ drug, onClick }) {
  return (
    <button
      className="card"
      onClick={() => onClick(drug.id)}
      aria-label={drug.name}
    >
      <img
        src={`${import.meta.env.BASE_URL}${drug.image.replace(/^\//, "")}`}
        alt={drug.name}
      />

      <div className="card-glow"></div>
    </button>
  );
}

export default Card;