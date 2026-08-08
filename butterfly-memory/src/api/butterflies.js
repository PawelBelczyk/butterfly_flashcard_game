const species = [
    "Papilio machaon",
    "Aglais io",
    "Vanessa atalanta",
    "Pieris brassicae",
    "Gonepteryx rhamni",
    "Inachis io",
    "Parnassius apollo",
    "Vanessa cardui",
    "Polygonia c-album",
    "Celastrina argiolus",
    "Lycaena phlaeas",
    "Argynnis paphia",
];

async function fetchButterfly(speciesName) {
    const params = new URLSearchParams({
        scientificName: speciesName,
        mediaType: "StillImage",
        limit: "20",
    });

    const response = await fetch(
        `https://api.gbif.org/v1/occurrence/search?${params}`
    );

    if (!response.ok) {
        throw new Error(`Failed to fetch ${speciesName}`);
    }

    const data = await response.json();

    const records = data.results.filter(
        (record) =>
            record.media &&
            record.media.length > 0 &&
            record.media[0].identifier
    );

    if (records.length === 0) {
        throw new Error(`No image found for ${speciesName}`);
    }

    const record = records[0];

    return {
        id: record.key,
        species: speciesName,
        scientificName: record.scientificName || speciesName,
        image: record.media[0].identifier,
    };
}

export async function fetchButterflies() {
    const butterflies = await Promise.all(
        species.map((speciesName) => fetchButterfly(speciesName))
    );

    return butterflies;
}