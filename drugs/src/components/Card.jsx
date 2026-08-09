function Card({ drug, onClick }) {
  return (
    <button
      className="card"
      onClick={() => onClick(drug.id)}
    >
      <div className="card-image">
        <img
          src={drug.image}
          alt={drug.name}
        />
      </div>

      <div className="card-content">
        <h3>{drug.name}</h3>

        <p>
          RxCUI <span>{drug.rxcui}</span>
        </p>
      </div>

      <div className="card-glow"></div>
    </button>
  );
}

export default Card;