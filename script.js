// This is the information for the elements.
// Each row has symbol, name, atomic number, mass, type, period, group, state, shells and a fun fact.
const elements = [
  ["H","Hydrogen",1,"1.008","nonmetal",1,1,"Gas","2, 1","Most of the universe's ordinary matter is hydrogen."],\n  ["He","Helium",2,"4.003","noble",1,18,"Gas","2","Helium was first found in sunlight."],\n  ["Li","Lithium",3,"6.94","metal",2,1,"Solid","2, 1","Lithium is the lightest metal."],\n  ["Be","Beryllium",4,"9.012","metal",2,2,"Solid","2, 2","Beryllium is used in some aerospace parts."],\n  ["B","Boron",5,"10.81","other",2,13,"Solid","2, 3","Boron is used in heat-resistant glass."],\n  ["C","Carbon",6,"12.011","nonmetal",2,14,"Solid","2, 4","Carbon is found in every known form of life."],\n  ["N","Nitrogen",7,"14.007","nonmetal",2,15,"Gas","2, 5","Most of Earth's atmosphere is nitrogen."],\n  ["O","Oxygen",8,"15.999","nonmetal",2,16,"Gas","2, 6","Many living things need oxygen for respiration."],\n  ["F","Fluorine",9,"18.998","other",2,17,"Gas","2, 7","Fluorine is the most electronegative element."],\n  ["Ne","Neon",10,"20.180","noble",2,18,"Gas","2, 8","Neon signs can glow reddish-orange."],\n  ["Na","Sodium",11,"22.990","metal",3,1,"Solid","2, 8, 1","Sodium reacts strongly with water. Never try it at home."],\n  ["Mg","Magnesium",12,"24.305","metal",3,2,"Solid","2, 8, 2","Magnesium burns with a bright white light."],\n  ["Al","Aluminium",13,"26.982","metal",3,13,"Solid","2, 8, 3","Aluminium is lightweight and recyclable."],\n  ["Si","Silicon",14,"28.085","other",3,14,"Solid","2, 8, 4","Silicon is used in computer chips."],\n  ["P","Phosphorus",15,"30.974","nonmetal",3,15,"Solid","2, 8, 5","Phosphorus is part of DNA."],\n  ["S","Sulfur",16,"32.06","nonmetal",3,16,"Solid","2, 8, 6","Sulfur is yellow in its common solid form."],\n  ["Cl","Chlorine",17,"35.45","other",3,17,"Gas","2, 8, 7","Chlorine compounds are used to disinfect water."],\n  ["Ar","Argon",18,"39.948","noble",3,18,"Gas","2, 8, 8","Argon makes up almost 1% of the atmosphere."],\n  ["K","Potassium",19,"39.098","metal",4,1,"Solid","2, 8, 8, 1","Potassium ions help nerves send signals."],\n  ["Ca","Calcium",20,"40.078","metal",4,2,"Solid","2, 8, 8, 2","Calcium helps make bones and teeth strong."],\n  ["Sc","Scandium",21,"44.956","metal",4,3,"Solid","2, 8, 9, 2","Scandium is used in some strong alloys."],\n  ["Ti","Titanium",22,"47.867","metal",4,4,"Solid","2, 8, 10, 2","Titanium is strong but relatively light."],\n  ["V","Vanadium",23,"50.942","metal",4,5,"Solid","2, 8, 11, 2","Vanadium can strengthen steel."],\n  ["Cr","Chromium",24,"51.996","metal",4,6,"Solid","2, 8, 13, 1","Chromium helps protect stainless steel from rust."],\n  ["Mn","Manganese",25,"54.938","metal",4,7,"Solid","2, 8, 13, 2","Manganese is used in steelmaking."],\n  ["Fe","Iron",26,"55.845","metal",4,8,"Solid","2, 8, 14, 2","Iron is an important part of Earth's core."],\n  ["Co","Cobalt",27,"58.933","metal",4,9,"Solid","2, 8, 15, 2","Cobalt compounds can make blue colours."],\n  ["Ni","Nickel",28,"58.693","metal",4,10,"Solid","2, 8, 16, 2","Nickel is used in some rechargeable batteries."],\n  ["Cu","Copper",29,"63.546","metal",4,11,"Solid","2, 8, 18, 1","Copper is a very good conductor of electricity."],\n  ["Zn","Zinc",30,"65.38","metal",4,12,"Solid","2, 8, 18, 2","Zinc can coat iron to help prevent rust."],\n  ["Ga","Gallium",31,"69.723","metal",4,13,"Solid","2, 8, 18, 3","Gallium can melt near body temperature."],\n  ["Ge","Germanium",32,"72.630","other",4,14,"Solid","2, 8, 18, 4","Germanium is a semiconductor."],\n  ["As","Arsenic",33,"74.922","other",4,15,"Solid","2, 8, 18, 5","Some arsenic compounds are very poisonous."],\n  ["Se","Selenium",34,"78.971","other",4,16,"Solid","2, 8, 18, 6","Our bodies need a tiny amount of selenium."],\n  ["Br","Bromine",35,"79.904","other",4,17,"Liquid","2, 8, 18, 7","Bromine is a liquid at room temperature."],\n  ["Kr","Krypton",36,"83.798","noble",4,18,"Gas","2, 8, 18, 8","Krypton is used in some special lights."],\n  ["Rb","Rubidium",37,"85.468","metal",5,1,"Solid","2, 8, 18, 8, 1","Rubidium is a very reactive metal."],\n  ["Sr","Strontium",38,"87.62","metal",5,2,"Solid","2, 8, 18, 8, 2","Strontium salts can give fireworks a red colour."],\n  ["Y","Yttrium",39,"88.906","metal",5,3,"Solid","2, 8, 18, 9, 2","Yttrium is used in some LEDs."],\n  ["Zr","Zirconium",40,"91.224","metal",5,4,"Solid","2, 8, 18, 10, 2","Zirconium alloys are used in nuclear reactors."],\n  ["Nb","Niobium",41,"92.906","metal",5,5,"Solid","2, 8, 18, 12, 1","Niobium is used in superconducting magnets."],\n  ["Mo","Molybdenum",42,"95.95","metal",5,6,"Solid","2, 8, 18, 13, 1","Molybdenum can help steel resist heat."],\n  ["Tc","Technetium",43,"[98]","metal",5,7,"Solid","2, 8, 18, 13, 2","Technetium was the first artificially made element."],\n  ["Ru","Ruthenium",44,"101.07","metal",5,8,"Solid","2, 8, 18, 15, 1","Ruthenium is used in electronics."],\n  ["Rh","Rhodium",45,"102.91","metal",5,9,"Solid","2, 8, 18, 16, 1","Rhodium is a rare precious metal."],\n  ["Pd","Palladium",46,"106.42","metal",5,10,"Solid","2, 8, 18, 18","Palladium is used in car catalytic converters."],\n  ["Ag","Silver",47,"107.87","metal",5,11,"Solid","2, 8, 18, 18, 1","Silver is an excellent electrical conductor."],\n  ["Cd","Cadmium",48,"112.41","metal",5,12,"Solid","2, 8, 18, 18, 2","Cadmium is toxic and its uses are limited."],\n  ["In","Indium",49,"114.82","metal",5,13,"Solid","2, 8, 18, 18, 3","Indium compounds are used in touchscreens."],\n  ["Sn","Tin",50,"118.71","metal",5,14,"Solid","2, 8, 18, 18, 4","Tin has been used in alloys for a long time."],\n  ["Sb","Antimony",51,"121.76","other",5,15,"Solid","2, 8, 18, 18, 5","Antimony is used in some materials that resist flames."],\n  ["Te","Tellurium",52,"127.60","other",5,16,"Solid","2, 8, 18, 18, 6","Tellurium is used in some solar panels."],\n  ["I","Iodine",53,"126.90","other",5,17,"Solid","2, 8, 18, 18, 7","Iodine is needed by the thyroid gland."],\n  ["Xe","Xenon",54,"131.29","noble",5,18,"Gas","2, 8, 18, 18, 8","Xenon is used in flash lamps."],\n  ["Cs","Caesium",55,"132.91","metal",6,1,"Solid","2, 8, 18, 18, 8, 1","Caesium atomic clocks help measure time."],\n  ["Ba","Barium",56,"137.33","metal",6,2,"Solid","2, 8, 18, 18, 8, 2","Some barium compounds are used in medical imaging."],\n  ["La","Lanthanum",57,"138.91","other",6,3,"Solid","2, 8, 18, 18, 9, 2","Lanthanum compounds are used in camera lenses."],\n  ["Ce","Cerium",58,"140.12","other",6,3,"Solid","2, 8, 19, 18, 9, 2","Cerium is used to polish glass."],\n  ["Pr","Praseodymium",59,"140.91","other",6,3,"Solid","2, 8, 21, 8, 9, 2","Praseodymium compounds can colour glass green."],\n  ["Nd","Neodymium",60,"144.24","other",6,3,"Solid","2, 8, 22, 8, 8, 2","Neodymium is used to make powerful magnets."],\n  ["Pm","Promethium",61,"[145]","other",6,3,"Solid","2, 8, 23, 8, 8, 2","Promethium has no stable isotopes."],\n  ["Sm","Samarium",62,"150.36","other",6,3,"Solid","2, 8, 24, 8, 8, 2","Samarium-cobalt magnets can handle high temperatures."],\n  ["Eu","Europium",63,"151.96","other",6,3,"Solid","2, 8, 25, 8, 8, 2","Europium helps create red colours in screens."],\n  ["Gd","Gadolinium",64,"157.25","other",6,3,"Solid","2, 8, 25, 9, 8, 2","Gadolinium is used in some MRI contrast agents."],\n  ["Tb","Terbium",65,"158.93","other",6,3,"Solid","2, 8, 27, 8, 8, 2","Terbium can produce green light in displays."],\n  ["Dy","Dysprosium",66,"162.50","other",6,3,"Solid","2, 8, 28, 8, 8, 2","Dysprosium helps improve strong magnets."],\n  ["Ho","Holmium",67,"164.93","other",6,3,"Solid","2, 8, 29, 8, 8, 2","Holmium has unusual magnetic properties."],\n  ["Er","Erbium",68,"167.26","other",6,3,"Solid","2, 8, 30, 8, 8, 2","Erbium is useful in fibre-optic communication."],\n  ["Tm","Thulium",69,"168.93","other",6,3,"Solid","2, 8, 31, 8, 8, 2","Thulium is a rare lanthanide."],\n  ["Yb","Ytterbium",70,"173.05","other",6,3,"Solid","2, 8, 32, 8, 8, 2","Ytterbium is used in some lasers."],\n  ["Lu","Lutetium",71,"174.97","other",6,3,"Solid","2, 8, 32, 9, 8, 2","Lutetium is used in some medical scanners."],\n  ["Hf","Hafnium",72,"178.49","metal",6,4,"Solid","2, 8, 18, 32, 10, 2","Hafnium is used in some nuclear reactor control rods."],\n  ["Ta","Tantalum",73,"180.95","metal",6,5,"Solid","2, 8, 18, 32, 11, 2","Tantalum is used in small electronic parts."],\n  ["W","Tungsten",74,"183.84","metal",6,6,"Solid","2, 8, 18, 32, 12, 2","Tungsten has the highest melting point among metals."],\n  ["Re","Rhenium",75,"186.21","metal",6,7,"Solid","2, 8, 18, 32, 13, 2","Rhenium is used in jet-engine alloys."],\n  ["Os","Osmium",76,"190.23","metal",6,8,"Solid","2, 8, 18, 32, 14, 2","Osmium is one of the densest elements."],\n  ["Ir","Iridium",77,"192.22","metal",6,9,"Solid","2, 8, 18, 32, 15, 2","Iridium resists corrosion very well."],\n  ["Pt","Platinum",78,"195.08","metal",6,10,"Solid","2, 8, 18, 32, 17, 1","Platinum is used in jewellery and catalysts."],\n  ["Au","Gold",79,"196.97","metal",6,11,"Solid","2, 8, 18, 32, 18, 1","Gold can be hammered into very thin sheets."],\n  ["Hg","Mercury",80,"200.59","metal",6,12,"Liquid","2, 8, 18, 32, 18, 2","Mercury is a toxic metal that is liquid at room temperature."],\n  ["Tl","Thallium",81,"204.38","metal",6,13,"Solid","2, 8, 18, 32, 18, 3","Thallium is highly toxic."],\n  ["Pb","Lead",82,"207.2","metal",6,14,"Solid","2, 8, 18, 32, 18, 4","Lead is dense and poisonous."],\n  ["Bi","Bismuth",83,"208.98","metal",6,15,"Solid","2, 8, 18, 32, 18, 5","Bismuth crystals can have colourful surfaces."],\n  ["Po","Polonium",84,"[209]","metal",6,16,"Solid","2, 8, 18, 32, 18, 6","Polonium is radioactive."],\n  ["At","Astatine",85,"[210]","other",6,17,"Solid","2, 8, 18, 32, 18, 7","Astatine is extremely rare and radioactive."],\n  ["Rn","Radon",86,"[222]","noble",6,18,"Gas","2, 8, 18, 32, 18, 8","Radon is a radioactive gas."],\n  ["Fr","Francium",87,"[223]","metal",7,1,"Solid","2, 8, 18, 32, 18, 8, 1","Francium is extremely rare and radioactive."],\n  ["Ra","Radium",88,"[226]","metal",7,2,"Solid","2, 8, 18, 32, 18, 8, 2","Radium is radioactive."],\n  ["Ac","Actinium",89,"[227]","other",7,3,"Solid","2, 8, 18, 32, 18, 9, 2","Actinium is radioactive."],\n  ["Th","Thorium",90,"232.04","other",7,3,"Solid","2, 8, 18, 32, 18, 10, 2","Thorium is studied as a possible nuclear fuel."],\n  ["Pa","Protactinium",91,"231.04","other",7,3,"Solid","2, 8, 18, 32, 20, 9, 2","Protactinium is rare and radioactive."],\n  ["U","Uranium",92,"238.03","other",7,3,"Solid","2, 8, 18, 32, 21, 9, 2","Uranium is used as fuel in many nuclear reactors."],\n  ["Np","Neptunium",93,"[237]","other",7,3,"Solid","2, 8, 18, 32, 22, 9, 2","Neptunium is radioactive."],\n  ["Pu","Plutonium",94,"[244]","other",7,3,"Solid","2, 8, 18, 32, 24, 8, 2","Some plutonium isotopes power spacecraft."],\n  ["Am","Americium",95,"[243]","other",7,3,"Solid","2, 8, 18, 32, 25, 8, 2","Americium is used in many smoke detectors."],\n  ["Cm","Curium",96,"[247]","other",7,3,"Solid","2, 8, 18, 32, 25, 9, 2","Curium is named after Marie and Pierre Curie."],\n  ["Bk","Berkelium",97,"[247]","other",7,3,"Solid","2, 8, 18, 32, 27, 8, 2","Berkelium is named after Berkeley."],\n  ["Cf","Californium",98,"[251]","other",7,3,"Solid","2, 8, 18, 32, 28, 8, 2","Californium can be used as a neutron source."],\n  ["Es","Einsteinium",99,"[252]","other",7,3,"Solid","2, 8, 18, 32, 29, 8, 2","Einsteinium is named after Albert Einstein."],\n  ["Fm","Fermium",100,"[257]","other",7,3,"Solid","2, 8, 18, 32, 30, 8, 2","Fermium is a synthetic radioactive element."],\n  ["Md","Mendelevium",101,"[258]","other",7,3,"Solid","2, 8, 18, 32, 31, 8, 2","Mendelevium honours Dmitri Mendeleev."],\n  ["No","Nobelium",102,"[259]","other",7,3,"Solid","2, 8, 18, 32, 32, 8, 2","Nobelium is named after Alfred Nobel."],\n  ["Lr","Lawrencium",103,"[266]","other",7,3,"Solid","2, 8, 18, 32, 32, 8, 3","Lawrencium honours Ernest Lawrence."],\n  ["Rf","Rutherfordium",104,"[267]","metal",7,4,"Solid","2, 8, 18, 32, 32, 10, 2","Rutherfordium is made in laboratories."],\n  ["Db","Dubnium",105,"[268]","metal",7,5,"Solid","2, 8, 18, 32, 32, 11, 2","Dubnium is named after Dubna."],\n  ["Sg","Seaborgium",106,"[269]","metal",7,6,"Solid","2, 8, 18, 32, 32, 12, 2","Seaborgium honours Glenn Seaborg."],\n  ["Bh","Bohrium",107,"[270]","metal",7,7,"Solid","2, 8, 18, 32, 32, 13, 2","Bohrium honours Niels Bohr."],\n  ["Hs","Hassium",108,"[277]","metal",7,8,"Solid","2, 8, 18, 32, 32, 14, 2","Hassium is named after Hesse, Germany."],\n  ["Mt","Meitnerium",109,"[278]","other",7,9,"Unknown","Unknown","Meitnerium honours Lise Meitner."],\n  ["Ds","Darmstadtium",110,"[281]","other",7,10,"Unknown","Unknown","Darmstadtium is named after Darmstadt."],\n  ["Rg","Roentgenium",111,"[282]","other",7,11,"Unknown","Unknown","Roentgenium honours Wilhelm Röntgen."],\n  ["Cn","Copernicium",112,"[285]","metal",7,12,"Unknown","Unknown","Copernicium honours Nicolaus Copernicus."],\n  ["Nh","Nihonium",113,"[286]","other",7,13,"Unknown","Unknown","Nihonium is named after Japan."],\n  ["Fl","Flerovium",114,"[289]","other",7,14,"Unknown","Unknown","Flerovium is named after a physics laboratory."],\n  ["Mc","Moscovium",115,"[290]","other",7,15,"Unknown","Unknown","Moscovium is named after the Moscow region."],\n  ["Lv","Livermorium",116,"[293]","other",7,16,"Unknown","Unknown","Livermorium honours a US research laboratory."],\n  ["Ts","Tennessine",117,"[294]","other",7,17,"Unknown","Unknown","Tennessine is named after Tennessee."],\n  ["Og","Oganesson",118,"[294]","noble",7,18,"Unknown","Unknown","Oganesson honours physicist Yuri Oganessian."]
];

const colours = {
  metal: "#ffb86b",
  nonmetal: "#7be6a8",
  noble: "#83cfff",
  other: "#c5a4ff"
};

const table = document.getElementById("table");
const extra = document.getElementById("extra");
const search = document.getElementById("search");
const info = document.getElementById("info");
let selected = null;

function makeBox(element) {
  const box = document.createElement("button");
  box.className = "element";
  box.type = "button";
  box.style.setProperty("--colour", colours[element[4]]);
  box.dataset.number = element[2];
  box.innerHTML = `<span class="number">${element[2]}</span>
    <span class="symbol">${element[0]}</span>
    <span class="name">${element[1]}</span>`;
  box.addEventListener("click", function() {
    showElement(element);
  });
  return box;
}

function drawTable() {
  // Make spaces in the table by placing each box in its group and period.
  elements.forEach(function(element) {
    const number = Number(element[2]);
    const period = Number(element[5]);
    const group = Number(element[6]);

    if (number >= 57 && number <= 71) return;
    if (number >= 89 && number <= 103) return;

    const box = makeBox(element);
    box.style.gridRow = period;
    box.style.gridColumn = group;
    table.appendChild(box);
  });

  const lanthanides = document.createElement("div");
  lanthanides.innerHTML = '<p class="extra-title">LANTHANIDES</p>';
  const lanthRow = document.createElement("div");
  lanthRow.className = "extra-row";

  const actinides = document.createElement("div");
  actinides.innerHTML = '<p class="extra-title">ACTINIDES</p>';
  const actRow = document.createElement("div");
  actRow.className = "extra-row";

  elements.forEach(function(element) {
    const number = Number(element[2]);
    if (number >= 57 && number <= 71) lanthRow.appendChild(makeBox(element));
    if (number >= 89 && number <= 103) actRow.appendChild(makeBox(element));
  });

  lanthanides.appendChild(lanthRow);
  actinides.appendChild(actRow);
  extra.appendChild(lanthanides);
  extra.appendChild(actinides);
}

function showElement(element) {
  selected = element;
  document.querySelectorAll(".element").forEach(function(box) {
    box.classList.toggle("selected", Number(box.dataset.number) === Number(element[2]));
  });

  const symbol = element[0];
  const name = element[1];
  const number = element[2];
  const mass = element[3];
  const type = element[4];
  const period = element[5];
  const group = element[6];
  const state = element[7];
  const shells = element[8];
  const fact = element[9];
  const colour = colours[type];

  document.getElementById("category").textContent = type.toUpperCase() + " ELEMENT";
  document.getElementById("category").style.color = colour;
  document.getElementById("name").textContent = name;
  document.getElementById("description").textContent = name + " (" + symbol + ") is element number " + number + " on the periodic table.";
  document.getElementById("symbol").textContent = symbol;
  document.getElementById("number").textContent = number;
  document.getElementById("mass").textContent = mass + " u";
  document.getElementById("group").textContent = (number >= 57 && number <= 71) || (number >= 89 && number <= 103) ? "Lanthanide / actinide series" : group;
  document.getElementById("period").textContent = period;
  document.getElementById("state").textContent = state;
  document.getElementById("shells").textContent = shells;
  document.getElementById("funFact").textContent = fact;
  document.getElementById("bigSymbol").textContent = symbol;

  const animation = document.getElementById("animation");
  animation.style.setProperty("--colour", symbol === "Au" ? "#ffd45e" : (symbol === "Na" ? "#ff8a4c" : colour));
  animation.classList.remove("blast", "bubbles", "gold", "normal");
  void animation.offsetWidth;

  if (symbol === "Na") {
    animation.classList.add("blast");
    makeParticles(35);
  } else if (symbol === "O") {
    animation.classList.add("bubbles");
    makeParticles(20);
  } else if (symbol === "Au") {
    animation.classList.add("gold");
    makeParticles(25);
  } else {
    animation.classList.add("normal");
    makeParticles(12);
  }
}

function makeParticles(amount) {
  const holder = document.getElementById("particles");
  holder.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    const dot = document.createElement("span");
    dot.className = "particle";
    dot.style.setProperty("--x", (Math.random() - 0.5) * 300 + "px");
    dot.style.setProperty("--y", (Math.random() - 0.5) * 260 + "px");
    dot.style.animationDelay = Math.random() * 0.2 + "s";
    holder.appendChild(dot);
  }
}

search.addEventListener("input", function() {
  const word = search.value.toLowerCase().trim();
  document.querySelectorAll(".element").forEach(function(box) {
    const number = Number(box.dataset.number);
    const element = elements.find(function(item) { return Number(item[2]) === number; });
    const found = !word || element[0].toLowerCase().includes(word) ||
      element[1].toLowerCase().includes(word) || String(element[2]) === word;
    box.classList.toggle("hide", !found);
  });
});

drawTable();
// Show sodium first so the animation can be seen right away.
showElement(elements.find(function(element) { return element[0] === "Na"; }));
