const drugs = [
    "ibuprofen",
    "acetaminophen",
    "metformin",
    "omeprazole",
    "amlodipine",
    "atorvastatin",
    "cetirizine",
    "loratadine",
    "amoxicillin",
    "salbutamol",
    "sertraline",
    "fluoxetine",
];

async function fetchDrug(drugName, index) {
    const response = await fetch(
        `https://rxnav.nlm.nih.gov/REST/drugs.json?name=${encodeURIComponent(
            drugName
        )}`
    );

    if (!response.ok) {
        throw new Error(`Failed to fetch ${drugName}`);
    }

    const data = await response.json();

    const groups = data.drugGroup?.conceptGroup || [];

    const concepts = groups.flatMap(
        (group) => group.conceptProperties || []
    );

    if (concepts.length === 0) {
        throw new Error(`No data found for ${drugName}`);
    }

    const drug = concepts[0];

    return {
        id: `${drugName}-${index}`,
        name: drug.name,
        rxcui: drug.rxcui,
        image: `/drugs/${drugName}.png`,
    };
}

export async function fetchDrugs() {
    return Promise.all(
        drugs.map((drugName, index) =>
            fetchDrug(drugName, index)
        )
    );
}