function Card({ butterfly, onClick }) {
    return (
        <button
            className="card"
            onClick={() => onClick(butterfly.id)}
        >
            <div className="image-wrapper">
                <img
                    src={butterfly.image}
                    alt={butterfly.species}
                />
            </div>

            <div className="card-info">
                <h2>{butterfly.species}</h2>

                <p>{butterfly.scientificName}</p>
            </div>
        </button>
    );
}

export default Card;