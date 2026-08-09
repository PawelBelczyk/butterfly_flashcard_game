 function Card({ drug, onClick }) {
  return (
    <button
      className="card"
      onClick={() => onClick(drug.id)}
      aria-label={drug.name}
    >
      <div className="card-image">
    <img
  src={`${import.meta.env.BASE_URL}drugs/${imageName}.png`}
  alt={drug.name}
/>
      </div>

      <div className="card-glow"></div>
    </button>
  );
}

export default Card;
 