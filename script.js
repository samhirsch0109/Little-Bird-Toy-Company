const toyOptions = [
    {
        name: "Wooden Airplane",
        age: "Toddlers",
        Measure: "3.5H x 7L x 7W.",
        biography: "Soar through imaginative skies with this classic wooden airplane. Handcrafted from sustainable Baltic birch wood with a safe, natural harvest finish and a spinning propeller.",
        imageURL: ""
    },
    {
        name: "Wooden Train Set",
        age: "Three and older",
        Measure: "Large size (84cm L x 11cm H x 13cm W)",
        biography: "Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood with moving wheels and a fully ecological design",
        imageURL: ""
    },
    {
        name: "Wooden Boat",
        age: "All ages",
        Measure: "Large size (84cm L x 11cm H x 13cm W)",
        biography: "Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety. Includes two peg lobster people.",
        imageURL: ""
    },
    {
        name: "Wooden Block Set",
        age: "All ages",
        Measure: "Large size (84cm L x 11cm H x 13cm W)",
        biography: "Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety. Includes two peg lobster people.",
        imageURL: ""
    },
];

function generateToyCards() {
    const toyCardsContainer = document.getElementById('toyCards');
    toyOptions.forEach(option => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mt-4');
        
        // Style card based on position
        let borderColor;
        switch (option.name.toLowerCase()) {
            case 'wooden airplane':
                borderColor = "orange";
                break;
            // Add more cases if needed
            default:
                borderColor = "black";
        }

        let backgroundColor;
        switch (option.age.toLowerCase()) {
            case 'toddlers':
                backgroundColor = "lightgreen";
                break;
            // Add more cases if needed
            default:
                backgroundColor = "white";
        }

        // Constructing the card HTML
        card.innerHTML = `
            <div class="card" style="border: 4px solid ${borderColor};">
                <div class="card-header">
                    ${option.name}
                </div>
                <img src="${option.imageURL}" class="img-fluid">
                <div class="card-body" style="background-color:${backgroundColor};">
                    <p><strong>Age:</strong> ${option.age}</p>
                    <p><strong>Measure:</strong> ${option.Measure}</p>
                    <p><strong>Biography:</strong> ${option.biography}</p>
                </div>
            </div>
        `;

        toyCardsContainer.appendChild(card);
    });
}

window.onload = generateToyCards;