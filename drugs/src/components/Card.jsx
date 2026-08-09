function Card({ drug, onClick }) {
  const imageName = drug.name.toLowerCase();

  return (
    <button
      className="card"
      onClick={() => onClick(drug.id)}
      aria-label={drug.name}
    >
      <img
        src={`${import.meta.env.BASE_URL}drugs/${imageName}.png`}
        alt={drug.name}
      />

      <div className="card-glow"></div>
    </button>
  );
}

export default Card;