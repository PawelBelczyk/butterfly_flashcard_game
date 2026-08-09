function Card({ drug, onClick }) {
    return (
        <button
            className="card"
            onClick={() => onClick(drug.id)}
        >
            <img
                src={drug.image}
                alt={drug.name}
                className="card-image"
            />

            <div className="card-content">
                <h3>{drug.name}</h3>

                <p>RxCUI: {drug.rxcui}</p>
            </div>
        </button>
    );
}

export default Card;