const toyOptions = [
    {
        name: "Wooden Airplane",
        age: "Toddlers",
        Measure: "3.5H x 7L x 7W.",
        biography: "Soar through imaginative skies with this classic wooden airplane. Handcrafted from sustainable Baltic birch wood with a safe, natural harvest finish and a spinning propeller.",
        imageURLs: ["path/to/airplane_front.jpg", "path/to/airplane_side.jpg", "path/to/airplane_top.jpg"] // Update with actual image paths
    },
    {
        name: "Wooden Train Set",
        age: "Three and older",
        Measure: "Large size (84cm L x 11cm H x 13cm W)",
        biography: "Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood with moving wheels and a fully ecological design",
        imageURLs: ["imgs/frontpink.png", "imgs/fronttrain.png", "imgs/sidepink.png"] // Update with actual image paths
    },
    {
        name: "Wooden Boat",
        age: "All ages",
        Measure: "10.5 inch W x 3.5 inch H.",
        biography: "Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety. Includes two peg lobster people.",
        imageURLs: ["path/to/boat_front.jpg", "path/to/boat_side.jpg", "path/to/boat_top.jpg"] // Update with actual image paths
    },
    {
        name: "Wooden Block Set",
        age: "Three and older",
        Measure: "13” L x 12” W x 2” H",
        biography: "Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate",
        imageURLs: ["path/to/blockset_front.jpg", "path/to/blockset_side.jpg", "path/to/blockset_top.jpg"] // Update with actual image paths
    },
    {
        name: "Wooden Car",
        age: "All ages",
        biography: "This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children.",
        imageURLs: ["path/to/car_front.jpg", "path/to/car_side.jpg", "path/to/car_top.jpg"] // Update with actual image paths
    },
];

function generateToyCards() {
    const toyCardsContainer = document.getElementById('toyCards');
    toyOptions.forEach((option, index) => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mt-4');

        // Style card based on position
        let borderColor;
        switch (option.name.toLowerCase()) {
            case 'wooden airplane':
                borderColor = "black";
                break;
            // Add more cases if needed
            default:
                borderColor = "black";
        }

        let backgroundColor;
        switch (option.age.toLowerCase()) {
            case 'toddlers':
                backgroundColor = "orange";
                break;
            // Add more cases if needed
            default:
                backgroundColor = "white";
        }

        // Constructing the card HTML with image tabs
        card.innerHTML = `
            <div class="card" style="border: 4px solid ${borderColor};">
                <div class="card-header">
                    ${option.name}
                </div>
                <div class="card-body" style="background-color:${backgroundColor};">
                    <ul class="nav nav-tabs" id="imageTabMenu${index}" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="front-view-tab-${index}" data-bs-toggle="tab" href="#front-view${index}" role="tab" aria-controls="front-view${index}" aria-selected="true"> Option 1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="side-view-tab-${index}" data-bs-toggle="tab" href="#side-view${index}" role="tab" aria-controls="side-view${index}" aria-selected="false"> Option 2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="top-view-tab-${index}" data-bs-toggle="tab" href="#top-view${index}" role="tab" aria-controls="top-view${index}" aria-selected="false"> Option 3</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="imageTabContent${index}">
                        <div class="tab-pane fade show active" id="front-view${index}" role="tabpanel" aria-labelledby="front-view-tab-${index}">
                            <img src="${option.imageURLs[0]}" class="img-fluid">
                        </div>
                        <div class="tab-pane fade" id="side-view${index}" role="tabpanel" aria-labelledby="side-view-tab-${index}">
                            <img src="${option.imageURLs[1]}" class="img-fluid">
                        </div>
                        <div class="tab-pane fade" id="top-view${index}" role="tabpanel" aria-labelledby="top-view-tab-${index}">
                            <img src="${option.imageURLs[2]}" class="img-fluid">
                        </div>
                    </div>
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