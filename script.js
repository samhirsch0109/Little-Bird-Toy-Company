const toyOptions = [
    {
        name: "Wooden Airplane",
        age: "Toddlers",
        about: "Soar through imaginative skies with this classic wooden airplane. Handcrafted from sustainable Baltic birch wood with a safe, natural harvest finish and a spinning propeller.",
        imageURLs: ["imgs/pinkplane.png", "imgs/orangeplane2.png", "imgs/purpleplane.png"],
        price: 15.99
    },
    {
        name: "Wooden Train Set",
        age: "3+",
        about: "Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood with moving wheels and a fully ecological design",
        imageURLs: ["imgs/pinktrain.png", "imgs/orangetrain.png", "imgs/purpletrain.png"],
        price: 15.99
    },
    {
        name: "Wooden Boat",
        age: "All ages",
        about: "Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety. Includes two peg lobster people.",
        imageURLs: ["imgs/pinkboat.png", "imgs/redboat.png", "imgs/purpleboat.png"],
        price: 15.99
    },
    {
        name: "Wooden Block Set",
        age: "3+",
        about: "Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate",
        imageURLs: ["imgs/pinkblocks.png", "imgs/greenblocks.png", "imgs/purpleblocks.png"],
        price: 20.00
    },
    {
        name: "Wooden Car",
        age: "All ages",
        about: "This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children.",
        imageURLs: ["imgs/pinkcar.png", "imgs/redcar.png", "imgs/purplecar.png"],
        price: 9.99
    },
];

let cart = [];
let total = 0;

function generateToyCards() {
    const toyCardsContainer = document.getElementById('toyCards');
    toyOptions.forEach((option, index) => {
        const card = document.createElement('div');
        card.classList.add('col-lg-4', 'mt-4', 'col-md-6', 'p-4', 'col-sm-12');


        // Constructing the card HTML with image tabs
        card.innerHTML = `
            <div class="card">
                <div class="card-header">
                    ${option.name}
                </div>
                <div class="card-body">
                    <ul class="nav nav-tabs" id="imageTabMenu${index}" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" style="color: pink" id="front-view-tab-${index}" data-bs-toggle="tab" href="#front-view${index}" role="tab" aria-controls="front-view${index}" aria-selected="true"> Option 1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" style="color: orange" id="side-view-tab-${index}" data-bs-toggle="tab" href="#side-view${index}" role="tab" aria-controls="side-view${index}" aria-selected="false"> Option 2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" style="color: purple"id="top-view-tab-${index}" data-bs-toggle="tab" href="#top-view${index}" role="tab" aria-controls="top-view${index}" aria-selected="false"> Option 3</a>
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
                    <p><strong>About:</strong> ${option.about}</p>
                    <p><strong>Price:</strong> $${option.price.toFixed(2)}</p>
                    <button class="btn btn-primary" onclick="addToCart(${index})">Add to Cart</button>
                </div>
            </div>
        `;

        toyCardsContainer.appendChild(card);
    });
}

//adds product to the cart
function addToCart(index) {
    const toy = toyOptions[index];
    //adds toy to array
    cart.push(toy);
    total += toy.price;
    updateCart();
}
//update cart display
function updateCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span>${item.name} - $${item.price.toFixed(2)}</span>
                <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove </button>
            `;
            cartContainer.appendChild(cartItem);
        });
    }
    //update total price
    document.getElementById('total').textContent = total.toFixed(2);
}

function removeFromCart(index) {
    const item = cart[index];
    total -= item.price;
    cart.splice(index, 1);
    updateCart();
}

window.onload = generateToyCards;

//array of reviews
const reviews = [
    'The best toys, would recommend buying for your children',
    'Great toys, great store!',
    'My train did not meet my expectations, I expected to have working lights, like hello?',
    'I was pleasantly surprised, great toys and store had great atmosphere.',
    'You should visit the store today.',
    'The toys were pretty good quality.',
    'OMGGGGGGG!!! Im totally getting these for my precious little angels. it will fit perfectly in their  bedrooms, for display only of course.',
    'These toys remind me of back in my day without phones when we played with wood, good ol days!',
    'Ouch! They gave me a splinter, oh wait nevermind im okay not a splinter, they are well made toys!'
];

function getRandomReview(reviews) {
    return reviews[Math.floor(Math.random() * reviews.length)];
}

function displayRandomReview() {
    const randomReview = getRandomReview(reviews);
    document.getElementById("review").innerHTML = `<h5 class="text-center">Anonymous Review: ${randomReview}</h5>`;
}
