// Setting the number of pix
const numberOfPix = 16;

// Getting the table
const table = document.getElementById("table");

// Setting cardClicked
let clickCount = 0;
let firstCard = {};
let secondCard = {};

// Setting some keywords
const keywords = [
  "ladybug",
  "rainbow",
  "mushroom",
  "jellyfish",
  "cactus",
  "flamingo",
  "tucan",
  "frog",
  "single tree",
  "bird",
  "mountain",
  "sun",
  "banana",
  "single plant",
  "carousel",
  "magician"
];

// Getting some IDs for Unsplash collections
const IDs = [
  404339, // house plant heaven
  8336486, // saccharine
  388793, // negative space travel
  1103088, // one color
  235549, // let's party
  1971015, // simplicity
  3323575, // candy
  4773283, // retro pop
  17098, // floral beauty
  256466, // flowers & plants
  630848, // flowers
  1513994, // flowers with black background
  494263, // summer + tropical
  217461, // signs of the times
  195845, // urban art
  1262111, // marine
  1309006, // sun, sand, soul
  346491, // underwater
  181581, // animals
  225, // into the wild
  311432, // the wild life
  139386, // cats
  201009, // pets
  558993, // feathered & furred
  2737036, // minimal black & white
  148984, // black & white
  540518, // spectrums
  1538150, // milky way
  2254180, // the colorful collection
  162468, // earth from above
  1767181, // blancs
  428621, // whitespace
  1793372, // what i'm holding
  369, // adventure
  824780, // messages
  239831, // typography
  353730, // typography
  173474, // characters & typography
  940308, // pink
  168902, // abstract architecture
  2075144, // eye candy
  1394721, // clean
  827741, // music
  395791, // colors
  1052683, // clouds of color
  577737, // unreal
  542216, // neon
  852718, // vibrant blackouts
  548245, // leafy
  923267, // colour
  389237, // turquoise + pink
  1060016, // she's a flower
  13533, // flowers
  179297, // plant life
  365720, // sparkles
  806, // valentine's day
  154851, // ode to simplicity
  1005812, // miami flamingo feel
  1203218, // stuck in time
  1687571, // spaced challenge
  256443, // the night sky
  575196, // healthy food
  202618, // fruits & vegetables
  180767, // fresh food
  1532230, // at night
  630950, // moon & stars
  142376, // awash in color
  139351, // creatures
  993239, // texturizing
  155257, // a closer look
  172064, // macros
  862524, // animal magnetism
  546927 // shadows & silhouettes
];

// Getting some random IDs
const randomIDs = [];

for (let i = 0; i < numberOfPix; i++) {
  const randomIndex = Math.round(Math.random() * IDs.length);
  const randomID = IDs[randomIndex];
  randomIDs.push(randomID);
  IDs.splice(randomIndex, 1);
}

// Duplicating every random ID & shuffling
randomIDs.forEach(id => randomIDs.push(id));
shuffle(randomIDs);

// Making some cards
for (let i = 0; i < numberOfPix * 2; i++) {
  // Making some divs
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "cards");
  newDiv.setAttribute("id", `card${i}`);
  newDiv.setAttribute("onclick", "handleClick(event)");
  // Making some imgs
  const newPic = document.createElement("img");
  newPic.setAttribute("width", "140");
  newPic.setAttribute("height", "140");
  newPic.setAttribute(
    "src",
    `https://source.unsplash.com/collection/${randomIDs[i]}/140x140`
  );
  newDiv.appendChild(newPic);
  table.appendChild(newDiv);
}

const cards = [];
for (let i = 0; i < table.children.length; i++) {
  cards.push(table.children[i]);
}
