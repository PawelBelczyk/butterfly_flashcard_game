function Card({ drug, onClick }) {
    return (
        <button
            className="card"
            onClick={() => onClick(drug.id)}
        >
            <div className="card-image">
                <img
                    src={drug.image}
                    alt=""
                />
            </div>

            <div className="card-content">
                <h3>{drug.name}</h3>

                <p>RxCUI: {drug.rxcui}</p>
            </div>
        </button>
    );
}

export default Card;