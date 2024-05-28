const teamMembers = [
{
    name: "Maleficent",
    age: "41",
    movie: "Maleficent",
    strengths: ["Magic, Cunning"],
    weaknesses: ["Vengeful, Isolation"],
    traits: ["Determined, Powerful, Resilient"],
    biography: "Maleficent, the powerful and vengeful fairy from Disney's Sleeping Beauty, curses Princess Aurora to fall into a death-like sleep, only to later show a more complex and redemptive side in her own story.",
    imageURL: "imgs/Maleficent.webp",
    species: 'Fairy',
},
{
    name: "Darth Vader",
    age: "45",
    movie: "Star Wars",
    strengths: ["Mastery of the Force, Strategic thinking"],
    weaknesses: ["Emotional conflict, Vulnerability to manipulation"],
    traits: ["Intimidating, Determined, Regal"],
    biography: "Darth Vader, once Anakin Skywalker, is the menacing enforcer of the Galactic Empire in Star Wars. Seduced by the dark side, he wields the Force with mastery and strikes fear with his iconic presence and red lightsaber.",
    imageURL: "imgs/darthvador.webp",
    species: "Human",
},
{
    name: "Jafar",
    age: "Mid 30s",
    movie: "Aladdin",
    strengths: ["Sorcery, Manipulation"],
    weaknesses: ["Ambition, Arrogance"],
    traits: ["Cunning, Ambitious, Manipulative"],
    biography: "Jafar, the sinister sorcerer in Disney's Aladdin, schemes to seize power and marry Princess Jasmine, using his magic to manipulate others until his plans are ultimately foiled by Aladdin and the Genie.",
    imageURL: "imgs/jafar.webp",
    species: 'Human',
},
{
    name: "Ursula",
    age: "95",
    movie: "Little Mermaid",
    strengths: ["Magic, Charisma"],
    weaknesses: ["Greed, Vanity"],
    traits: ["Charismatic, Deceptive, Power-hungry"],
    biography: "Ursula,the sea witch in Disney's The Little Mermaid, tricks Ariel into making deals with her, using Ariel's wish for human love to get what she wants. But Ariel and Prince Eric manage to defeat her in the end.",
    imageURL: "imgs/ursula.png",
    species: "Witch",
},
{
    name: "Evil Queen",
    age: "Late 40s",
    movie: "Snow White",
    strengths: ["Magic, Vanity"],
    weaknesses: ["Jealousy, Vanity"],
    traits: ["Vain, Jealous, Cruel"],
    biography: "The Evil Queen in Snow White is envious of her stepdaughter's beauty, giving her a poisoned apple to eliminate her. But her plan fails, and she meets a dark end.",
    imageURL: "imgs/evilqueen.png",
    species: "Witch",
},
{
    name: "Captain Hook",
    age: "Early 50s",
    movie: "Peter Pan",
    strengths: ["Swordsmanship, Leadership"],
    weaknesses: ["Fear of Crocodiles, Obsession with Revenge"],
    traits: ["Arrogant, Cowardly, Vengeful"],
    biography: "Captain Hook, the pirate in Peter Pan, seeks revenge on Peter Pan for cutting off his hand and feeding it to a crocodile. He plots to capture Pan but is always outsmarted by the boy who never grows up.",
    imageURL: "imgs/captainhook.png",
    species: "Human",
},
{
    name: "Gaston",
    age: "Late 20s or early 30s",
    movie: "Beauty and the Beast",
    strengths: ["Physical Strength, Charisma"],
    weaknesses: ["Arrogance, Hubris"],
    traits: ["Narcissistic, Competitive, Boastful"],
    biography: "Gaston is the arrogant antagonist of Beauty and the Beast, driven by his jealousy of the Beast and obsession with marrying Belle.",
    imageURL: "imgs/gaston.png",
    species: "Human",
},
{
    name: "Cruella De Vil",
    age: "47",
    movie: "101 Dalmatians",
    strengths: ["Fashion sense, Manipulation"],
    weaknesses: ["Obsession, Impulsiveness"],
    traits: ["Creative, Charming, Resourceful"],
    biography: "Cruella De Vil, the iconic antagonist from Disney's 101 Dalmatians, is a fashion-obsessed villain with a penchant for fur coats made from Dalmatian puppies. Despite her villainous ways, she's known for her charisma and bold fashion choices.",
    imageURL: "imgs/Cruella_de_Vil.png",
    species: "Human",
},
{
    name: "Hades",
    age: "Immortal",
    movie: "Hercules",
    strengths: ["Manipulation, Fire manipulation"],
    weaknesses: ["Impatience, Pride"],
    traits: ["Witty, Sarcastic, Power-hungry"],
    biography: "Hades, the hot-tempered and scheming god of the underworld in Disney's Hercules, is known for his fiery personality and his desire to overthrow his brother Zeus and rule Mount Olympus. Despite his villainous nature, he often provides comic relief with his sharp wit and sarcastic remarks.",
    imageURL: "imgs/Hades.webp",
    species: "God"
},
{
    name: "Queen of Hearts",
    age: "Early 50s",
    movie: "Alice in Wonderland",
    strengths: ["Authority, Commanding Presence"],
    weaknesses: ["Temper, Impulsiveness"],
    traits: ["Dictatorial, Unpredictable, Eccentric"],
    biography: "The Queen of Hearts, the ruthless monarch from Disney's Alice in Wonderland, is known for her obsession with order and her tendency to shout 'Off with their heads!' at the slightest offense. She rules over Wonderland with an iron fist, often making arbitrary and irrational decisions.",
    imageURL: "imgs/queenofhearts.png",
    species: "Human"
},
{
    name: "Kylo Ren",
    age: "29",
    movie: "Star Wars",
    strengths: ["Force sensitivity, Combat skills"],
    weaknesses: ["Emotional turmoil, Impulsiveness"],
    traits: ["Conflicted, Power-hungry, Talented"],
    biography: "Kylo Ren, born Ben Solo, is the conflicted antagonist of the Star Wars Sequel Trilogy. As the grandson of Darth Vader, he struggles with the pull to the light side of the Force while striving to emulate his grandfather's power. With his crossguard lightsaber and formidable Force abilities, he seeks to fulfill his destiny as a powerful Sith Lord.",
    imageURL: "imgs/Kylo_Ren.png",
    species: "Human",
}
];

function generateTeamCards() {
const teamCardsContainer = document.getElementById("teamCards");

teamMembers.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", 'mb-4');

    // Style the BGColor of my card based on pos
    let backgroundColor;
    switch (member.movie.toLowerCase()) {
        case "lion king":
            backgroundColor = "rgb(216,139,10)";
            break;
        case "maleficent":
            backgroundColor = "rgb(46,15,80)";
            break;
        case "aladdin":
            backgroundColor = "rgb(138, 43, 226)";
            break;
        case "little mermaid":
            backgroundColor = "rgb(145,77,168)";
            break;
        case "snow white":
            backgroundColor = "rgb(29,30,43)";
            break;
        case "peter pan":
            backgroundColor = "rgb(16,66,29)";
            break;
        case "beauty and the beast":
            backgroundColor = "rgb(184,169,22)";
            break;
        case "star wars":
            backgroundColor = "rgb(148, 164, 179)";
            break;
        case "hercules":
            backgroundColor = "rgb(68,152,199)";
            break;
        case "alice in wonderland":
            backgroundColor = "rgb(101,92,124)"
            break;
            case "101 dalmatians":
                backgroundColor = "rgb(255,70,70)"
                break;
        default:
            backgroundColor = "gray";
    }

    let borderColor;
    switch (member.species.toLowerCase()) { 
        case "human":
            borderColor = "white";
            break;
        case "animal":
            borderColor = "brown";
            break;
        case "fairy":
            borderColor = "purple";
            break;
        case "witch":
            borderColor = "green";
            break;
        case "god":
            borderColor = "blue";
            break;
        default:
            borderColor = "black";
    }


    card.innerHTML = `
      <div class="card" style="border: 4px solid ${borderColor};">
          <div class="card-header">
              ${member.name}
          </div>
          <img src="${member.imageURL}" class="image-fluid">
          <div id="cardBody" class="card-body" style="background-color:${backgroundColor};">
              <p><strong>Age:</strong> ${member.age}</p>
              <p><strong>Movie Known For:</strong> ${member.movie}</p>
              <p><strong>Strengths:</strong> ${member.strengths}</p>
              <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
              <p><strong>Character Traits:</strong> ${member.traits}</p>
              <p><strong>Biography:</strong> ${member.biography}</p>
              <p><strong>Species:</strong> ${member.species}</p>

          </div>
      </div>
  `;

    // Will update the BG style on each child of the card
    for (let i = 0; i < card.children.length; i++) {
        card.children[i].style.backgroundColor = backgroundColor;
    }
    teamCardsContainer.appendChild(card);
});
}

window.onload = generateTeamCards;