// Element data: atomic number, symbol, name, mass, category, period, group, block, state, configuration, fact.
const elements = [
[1,"H","Hydrogen","1.008","nonmetal",1,1,"s","Gas","1s¹","Hydrogen is the most abundant element in the universe."],
[2,"He","Helium","4.0026","noble",1,18,"s","Gas","1s²","Helium was first identified in the Sun's spectrum."],
[3,"Li","Lithium","6.94","alkali",2,1,"s","Solid","[He] 2s¹","Lithium is the lightest metal."],
[4,"Be","Beryllium","9.0122","alkaline",2,2,"s","Solid","[He] 2s²","Beryllium is used in some aerospace components."],
[5,"B","Boron","10.81","metalloid",2,13,"p","Solid","[He] 2s² 2p¹","Boron compounds help make heat-resistant glass."],
[6,"C","Carbon","12.011","nonmetal",2,14,"p","Solid","[He] 2s² 2p²","Carbon forms the backbone of known life."],
[7,"N","Nitrogen","14.007","nonmetal",2,15,"p","Gas","[He] 2s² 2p³","About 78% of Earth's atmosphere is nitrogen."],
[8,"O","Oxygen","15.999","nonmetal",2,16,"p","Gas","[He] 2s² 2p⁴","Most living things use oxygen for respiration."],
[9,"F","Fluorine","18.998","halogen",2,17,"p","Gas","[He] 2s² 2p⁵","Fluorine is the most electronegative element."],
[10,"Ne","Neon","20.180","noble",2,18,"p","Gas","[He] 2s² 2p⁶","Neon can glow reddish-orange in discharge tubes."],
[11,"Na","Sodium","22.990","alkali",3,1,"s","Solid","[Ne] 3s¹","Sodium reacts vigorously with water; never try this at home."],
[12,"Mg","Magnesium","24.305","alkaline",3,2,"s","Solid","[Ne] 3s²","Magnesium burns with a very bright white light."],
[13,"Al","Aluminium","26.982","post-transition",3,13,"p","Solid","[Ne] 3s² 3p¹","Aluminium is lightweight and widely recycled."],
[14,"Si","Silicon","28.085","metalloid",3,14,"p","Solid","[Ne] 3s² 3p²","Silicon is essential to most modern computer chips."],
[15,"P","Phosphorus","30.974","nonmetal",3,15,"p","Solid","[Ne] 3s² 3p³","Phosphorus is important in DNA and ATP."],
[16,"S","Sulfur","32.06","nonmetal",3,16,"p","Solid","[Ne] 3s² 3p⁴","Sulfur is a bright yellow solid in its common form."],
[17,"Cl","Chlorine","35.45","halogen",3,17,"p","Gas","[Ne] 3s² 3p⁵","Chlorine compounds are used to disinfect water."],
[18,"Ar","Argon","39.948","noble",3,18,"p","Gas","[Ne] 3s² 3p⁶","Argon makes up nearly 1% of Earth's atmosphere."],
[19,"K","Potassium","39.098","alkali",4,1,"s","Solid","[Ar] 4s¹","Potassium ions are essential for nerve signals."],
[20,"Ca","Calcium","40.078","alkaline",4,2,"s","Solid","[Ar] 4s²","Calcium compounds give strength to bones and teeth."],
[21,"Sc","Scandium","44.956","transition",4,3,"d","Solid","[Ar] 3d¹ 4s²","Scandium is used in some high-performance alloys."],
[22,"Ti","Titanium","47.867","transition",4,4,"d","Solid","[Ar] 3d² 4s²","Titanium combines low density with high strength."],
[23,"V","Vanadium","50.942","transition",4,5,"d","Solid","[Ar] 3d³ 4s²","Vanadium can strengthen steel."],
[24,"Cr","Chromium","51.996","transition",4,6,"d","Solid","[Ar] 3d⁵ 4s¹","Chromium helps give stainless steel corrosion resistance."],
[25,"Mn","Manganese","54.938","transition",4,7,"d","Solid","[Ar] 3d⁵ 4s²","Manganese is used in steelmaking and batteries."],
[26,"Fe","Iron","55.845","transition",4,8,"d","Solid","[Ar] 3d⁶ 4s²","Earth's core is thought to contain lots of iron."],
[27,"Co","Cobalt","58.933","transition",4,9,"d","Solid","[Ar] 3d⁷ 4s²","Cobalt compounds can produce vivid blue pigments."],
[28,"Ni","Nickel","58.693","transition",4,10,"d","Solid","[Ar] 3d⁸ 4s²","Nickel is used in many rechargeable batteries."],
[29,"Cu","Copper","63.546","transition",4,11,"d","Solid","[Ar] 3d¹⁰ 4s¹","Copper is an excellent electrical conductor."],
[30,"Zn","Zinc","65.38","transition",4,12,"d","Solid","[Ar] 3d¹⁰ 4s²","Zinc coatings help protect iron from rust."],
[31,"Ga","Gallium","69.723","post-transition",4,13,"p","Solid","[Ar] 3d¹⁰ 4s² 4p¹","Gallium can melt in a warm hand."],
[32,"Ge","Germanium","72.630","metalloid",4,14,"p","Solid","[Ar] 3d¹⁰ 4s² 4p²","Germanium is a semiconductor."],
[33,"As","Arsenic","74.922","metalloid",4,15,"p","Solid","[Ar] 3d¹⁰ 4s² 4p³","Some arsenic compounds are highly toxic."],
[34,"Se","Selenium","78.971","nonmetal",4,16,"p","Solid","[Ar] 3d¹⁰ 4s² 4p⁴","Selenium is needed in tiny amounts by the body."],
[35,"Br","Bromine","79.904","halogen",4,17,"p","Liquid","[Ar] 3d¹⁰ 4s² 4p⁵","Bromine is one of only two liquid elements at room temperature."],
[36,"Kr","Krypton","83.798","noble",4,18,"p","Gas","[Ar] 3d¹⁰ 4s² 4p⁶","Krypton is used in some specialty lighting."],
[37,"Rb","Rubidium","85.468","alkali",5,1,"s","Solid","[Kr] 5s¹","Rubidium is highly reactive and soft."],
[38,"Sr","Strontium","87.62","alkaline",5,2,"s","Solid","[Kr] 5s²","Strontium salts can create red fireworks."],
[39,"Y","Yttrium","88.906","transition",5,3,"d","Solid","[Kr] 4d¹ 5s²","Yttrium is used in some LEDs and phosphors."],
[40,"Zr","Zirconium","91.224","transition",5,4,"d","Solid","[Kr] 4d² 5s²","Zirconium alloys are used in nuclear reactors."],
[41,"Nb","Niobium","92.906","transition",5,5,"d","Solid","[Kr] 4d⁴ 5s¹","Niobium is used in superconducting magnets."],
[42,"Mo","Molybdenum","95.95","transition",5,6,"d","Solid","[Kr] 4d⁵ 5s¹","Molybdenum helps steel withstand high temperatures."],
[43,"Tc","Technetium","[98]","transition",5,7,"d","Solid","[Kr] 4d⁵ 5s²","Technetium was the first element made artificially."],
[44,"Ru","Ruthenium","101.07","transition",5,8,"d","Solid","[Kr] 4d⁷ 5s¹","Ruthenium is used in electronics and catalysts."],
[45,"Rh","Rhodium","102.91","transition",5,9,"d","Solid","[Kr] 4d⁸ 5s¹","Rhodium is a rare precious metal."],
[46,"Pd","Palladium","106.42","transition",5,10,"d","Solid","[Kr] 4d¹⁰","Palladium is used in catalytic converters."],
[47,"Ag","Silver","107.87","transition",5,11,"d","Solid","[Kr] 4d¹⁰ 5s¹","Silver has the highest electrical conductivity of any element."],
[48,"Cd","Cadmium","112.41","transition",5,12,"d","Solid","[Kr] 4d¹⁰ 5s²","Cadmium is toxic and its use is restricted."],
[49,"In","Indium","114.82","post-transition",5,13,"p","Solid","[Kr] 4d¹⁰ 5s² 5p¹","Indium tin oxide is used in touchscreens."],
[50,"Sn","Tin","118.71","post-transition",5,14,"p","Solid","[Kr] 4d¹⁰ 5s² 5p²","Tin has been used in alloys for thousands of years."],
[51,"Sb","Antimony","121.76","metalloid",5,15,"p","Solid","[Kr] 4d¹⁰ 5s² 5p³","Antimony compounds are used in some flame retardants."],
[52,"Te","Tellurium","127.60","metalloid",5,16,"p","Solid","[Kr] 4d¹⁰ 5s² 5p⁴","Tellurium is used in some solar panels."],
[53,"I","Iodine","126.90","halogen",5,17,"p","Solid","[Kr] 4d¹⁰ 5s² 5p⁵","Iodine is essential for thyroid hormone production."],
[54,"Xe","Xenon","131.29","noble",5,18,"p","Gas","[Kr] 4d¹⁰ 5s² 5p⁶","Xenon is used in flash lamps and ion thrusters."],
[55,"Cs","Caesium","132.91","alkali",6,1,"s","Solid","[Xe] 6s¹","Caesium atomic clocks help define the second."],
[56,"Ba","Barium","137.33","alkaline",6,2,"s","Solid","[Xe] 6s²","Barium compounds are used in some medical imaging."],
[57,"La","Lanthanum","138.91","lanthanoid",8,3,"f","Solid","[Xe] 5d¹ 6s²","Lanthanum compounds are used in camera lenses."],
[58,"Ce","Cerium","140.12","lanthanoid",8,3,"f","Solid","[Xe] 4f¹ 5d¹ 6s²","Cerium is used in catalytic converters and glass polishing."],
[59,"Pr","Praseodymium","140.91","lanthanoid",8,3,"f","Solid","[Xe] 4f³ 6s²","Praseodymium compounds can colour glass green."],
[60,"Nd","Neodymium","144.24","lanthanoid",8,3,"f","Solid","[Xe] 4f⁴ 6s²","Neodymium makes powerful permanent magnets."],
[61,"Pm","Promethium","[145]","lanthanoid",8,3,"f","Solid","[Xe] 4f⁵ 6s²","Promethium has no stable isotopes."],
[62,"Sm","Samarium","150.36","lanthanoid",8,3,"f","Solid","[Xe] 4f⁶ 6s²","Samarium-cobalt magnets work well at high temperatures."],
[63,"Eu","Europium","151.96","lanthanoid",8,3,"f","Solid","[Xe] 4f⁷ 6s²","Europium compounds help create red phosphors in displays."],
[64,"Gd","Gadolinium","157.25","lanthanoid",8,3,"f","Solid","[Xe] 4f⁷ 5d¹ 6s²","Gadolinium is used in some MRI contrast agents."],
[65,"Tb","Terbium","158.93","lanthanoid",8,3,"f","Solid","[Xe] 4f⁹ 6s²","Terbium compounds can produce green light in screens."],
[66,"Dy","Dysprosium","162.50","lanthanoid",8,3,"f","Solid","[Xe] 4f¹⁰ 6s²","Dysprosium improves some high-performance magnets."],
[67,"Ho","Holmium","164.93","lanthanoid",8,3,"f","Solid","[Xe] 4f¹¹ 6s²","Holmium has an exceptionally high magnetic moment."],
[68,"Er","Erbium","167.26","lanthanoid",8,3,"f","Solid","[Xe] 4f¹² 6s²","Erbium is important in fibre-optic communications."],
[69,"Tm","Thulium","168.93","lanthanoid",8,3,"f","Solid","[Xe] 4f¹³ 6s²","Thulium is the rarest naturally occurring lanthanoid."],
[70,"Yb","Ytterbium","173.05","lanthanoid",8,3,"f","Solid","[Xe] 4f¹⁴ 6s²","Ytterbium is used in some specialised lasers."],
[71,"Lu","Lutetium","174.97","lanthanoid",8,3,"f","Solid","[Xe] 4f¹⁴ 5d¹ 6s²","Lutetium is used in some medical imaging detectors."],
[72,"Hf","Hafnium","178.49","transition",6,4,"d","Solid","[Xe] 4f¹⁴ 5d² 6s²","Hafnium is used in control rods for some reactors."],
[73,"Ta","Tantalum","180.95","transition",6,5,"d","Solid","[Xe] 4f¹⁴ 5d³ 6s²","Tantalum is used in small electronic capacitors."],
[74,"W","Tungsten","183.84","transition",6,6,"d","Solid","[Xe] 4f¹⁴ 5d⁴ 6s²","Tungsten has the highest melting point of all metals."],
[75,"Re","Rhenium","186.21","transition",6,7,"d","Solid","[Xe] 4f¹⁴ 5d⁵ 6s²","Rhenium is used in high-temperature turbine alloys."],
[76,"Os","Osmium","190.23","transition",6,8,"d","Solid","[Xe] 4f¹⁴ 5d⁶ 6s²","Osmium is among the densest naturally occurring elements."],
[77,"Ir","Iridium","192.22","transition",6,9,"d","Solid","[Xe] 4f¹⁴ 5d⁷ 6s²","Iridium is extremely resistant to corrosion."],
[78,"Pt","Platinum","195.08","transition",6,10,"d","Solid","[Xe] 4f¹⁴ 5d⁹ 6s¹","Platinum is an important industrial catalyst."],
[79,"Au","Gold","196.97","transition",6,11,"d","Solid","[Xe] 4f¹⁴ 5d¹⁰ 6s¹","Gold is very malleable and resists corrosion."],
[80,"Hg","Mercury","200.59","transition",6,12,"d","Liquid","[Xe] 4f¹⁴ 5d¹⁰ 6s²","Mercury is a toxic metal that is liquid at room temperature."],
[81,"Tl","Thallium","204.38","post-transition",6,13,"p","Solid","[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹","Thallium is highly toxic."],
[82,"Pb","Lead","207.2","post-transition",6,14,"p","Solid","[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²","Lead is dense and toxic, so many uses are restricted."],
[83,"Bi","Bismuth","208.98","post-transition",6,15,"p","Solid","[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³","Bismuth crystals can form colourful geometric surfaces."],
[84,"Po","Polonium","[209]","post-transition",6,16,"p","Solid","[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴","Polonium is highly radioactive."],
[85,"At","Astatine","[210]","halogen",6,17,"p","Solid","[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵","Astatine is extremely rare and radioactive."],
[86,"Rn","Radon","[222]","noble",6,18,"p","Gas","[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶","Radon is a radioactive gas that can accumulate in buildings."],
[87,"Fr","Francium","[223]","alkali",7,1,"s","Solid","[Rn] 7s¹","Francium is extremely rare and radioactive."],
[88,"Ra","Radium","[226]","alkaline",7,2,"s","Solid","[Rn] 7s²","Radium was historically used in luminous paints."],
[89,"Ac","Actinium","[227]","actinoid",9,3,"f","Solid","[Rn] 6d¹ 7s²","Actinium is radioactive and glows faintly blue in the dark."],
[90,"Th","Thorium","232.04","actinoid",9,3,"f","Solid","[Rn] 6d² 7s²","Thorium is being studied as a possible nuclear fuel."],
[91,"Pa","Protactinium","231.04","actinoid",9,3,"f","Solid","[Rn] 5f² 6d¹ 7s²","Protactinium is rare and radioactive."],
[92,"U","Uranium","238.03","actinoid",9,3,"f","Solid","[Rn] 5f³ 6d¹ 7s²","Uranium is used as fuel in many nuclear reactors."],
[93,"Np","Neptunium","[237]","actinoid",9,3,"f","Solid","[Rn] 5f⁴ 6d¹ 7s²","Neptunium was the first transuranium element discovered."],
[94,"Pu","Plutonium","[244]","actinoid",9,3,"f","Solid","[Rn] 5f⁶ 7s²","Some plutonium isotopes are used in space power systems."],
[95,"Am","Americium","[243]","actinoid",9,3,"f","Solid","[Rn] 5f⁷ 7s²","Americium-241 is used in many ionisation smoke detectors."],
[96,"Cm","Curium","[247]","actinoid",9,3,"f","Solid","[Rn] 5f⁷ 6d¹ 7s²","Curium was named after Marie and Pierre Curie."],
[97,"Bk","Berkelium","[247]","actinoid",9,3,"f","Solid","[Rn] 5f⁹ 7s²","Berkelium was named after Berkeley, California."],
[98,"Cf","Californium","[251]","actinoid",9,3,"f","Solid","[Rn] 5f¹⁰ 7s²","Californium can be used as a neutron source."],
[99,"Es","Einsteinium","[252]","actinoid",9,3,"f","Solid","[Rn] 5f¹¹ 7s²","Einsteinium was named after Albert Einstein."],
[100,"Fm","Fermium","[257]","actinoid",9,3,"f","Solid","[Rn] 5f¹² 7s²","Fermium was identified in debris from a thermonuclear test."],
[101,"Md","Mendelevium","[258]","actinoid",9,3,"f","Solid","[Rn] 5f¹³ 7s²","Mendelevium honours Dmitri Mendeleev."],
[102,"No","Nobelium","[259]","actinoid",9,3,"f","Solid","[Rn] 5f¹⁴ 7s²","Nobelium was named after Alfred Nobel."],
[103,"Lr","Lawrencium","[266]","actinoid",9,3,"f","Solid","[Rn] 5f¹⁴ 7s² 7p¹","Lawrencium honours physicist Ernest Lawrence."],
[104,"Rf","Rutherfordium","[267]","transition",7,4,"d","Solid","[Rn] 5f¹⁴ 6d² 7s²","Rutherfordium is a synthetic, highly radioactive element."],
[105,"Db","Dubnium","[268]","transition",7,5,"d","Solid","[Rn] 5f¹⁴ 6d³ 7s²","Dubnium is named after Dubna, Russia."],
[106,"Sg","Seaborgium","[269]","transition",7,6,"d","Solid","[Rn] 5f¹⁴ 6d⁴ 7s²","Seaborgium honours chemist Glenn T. Seaborg."],
[107,"Bh","Bohrium","[270]","transition",7,7,"d","Solid","[Rn] 5f¹⁴ 6d⁵ 7s²","Bohrium is named after physicist Niels Bohr."],
[108,"Hs","Hassium","[277]","transition",7,8,"d","Solid","[Rn] 5f¹⁴ 6d⁶ 7s²","Hassium is named after the German state of Hesse."],
[109,"Mt","Meitnerium","[278]","unknown",7,9,"d","Unknown","[Rn] 5f¹⁴ 6d⁷ 7s²","Meitnerium honours physicist Lise Meitner."],
[110,"Ds","Darmstadtium","[281]","unknown",7,10,"d","Unknown","[Rn] 5f¹⁴ 6d⁸ 7s²","Darmstadtium is named after Darmstadt, Germany."],
[111,"Rg","Roentgenium","[282]","unknown",7,11,"d","Unknown","[Rn] 5f¹⁴ 6d⁹ 7s²","Roentgenium honours Wilhelm Conrad Röntgen."],
[112,"Cn","Copernicium","[285]","transition",7,12,"d","Unknown","[Rn] 5f¹⁴ 6d¹⁰ 7s²","Copernicium honours astronomer Nicolaus Copernicus."],
[113,"Nh","Nihonium","[286]","unknown",7,13,"p","Unknown","[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹","Nihonium takes its name from Japan."],
[114,"Fl","Flerovium","[289]","unknown",7,14,"p","Unknown","[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²","Flerovium is named after the Flerov Laboratory."],
[115,"Mc","Moscovium","[290]","unknown",7,15,"p","Unknown","[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³","Moscovium is named after the Moscow region."],
[116,"Lv","Livermorium","[293]","unknown",7,16,"p","Unknown","[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴","Livermorium honours Lawrence Livermore National Laboratory."],
[117,"Ts","Tennessine","[294]","unknown",7,17,"p","Unknown","[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵","Tennessine is named after Tennessee."],
[118,"Og","Oganesson","[294]","unknown",7,18,"p","Unknown","[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶","Oganesson honours physicist Yuri Oganessian."]
];

const categories = {
  alkali: ["Alkali metal", "#ff8a65"],
  alkaline: ["Alkaline earth metal", "#ffc46b"],
  transition: ["Transition metal", "#a9a0ff"],
  post-transition: ["Post-transition metal", "#65c8ff"],
  metalloid: ["Metalloid", "#65e0c1"],
  nonmetal: ["Reactive nonmetal", "#b5e878"],
  halogen: ["Halogen", "#f39ad1"],
  noble: ["Noble gas", "#ff9bba"],
  lanthanoid: ["Lanthanoid", "#b3a0ff"],
  actinoid: ["Actinoid", "#ffad7a"],
  unknown: ["Unknown properties", "#9ba4b5"]
};

const table = document.getElementById("periodicTable");
const lanthanides = document.getElementById("lanthanides");
const actinides = document.getElementById("actinides");
const legend = document.getElementById("legend");
const searchInput = document.getElementById("searchInput");
let selectedNumber = null;

function createElementTile(element) {
  const [number, symbol, name, mass, category, period, group] = element;
  const tile = document.createElement("button");
  tile.className = "element";
  tile.type = "button";
  tile.dataset.number = number;
  tile.dataset.category = category;
  tile.style.setProperty("--cat", categories[category][1]);
  tile.setAttribute("aria-label", `${name}, atomic number ${number}`);
  tile.innerHTML = `<span class="number">${number}</span><span class="symbol">${symbol}</span><span class="tiny-name">${name}</span><span class="mass">${mass}</span>`;
  tile.addEventListener("click", () => showElement(element));
  return tile;
}

// Draw the main table using the element's period and group.
function drawTable() {
  elements.forEach(element => {
    const [number, symbol, name, mass, category, period, group] = element;
    if (number >= 57 && number <= 71) {
      lanthanides.appendChild(createElementTile(element));
      return;
    }
    if (number >= 89 && number <= 103) {
      actinides.appendChild(createElementTile(element));
      return;
    }

    const tile = createElementTile(element);
    let row = period;
    let col = group;

    // Reserve two rows in the main table for the f-block series.
    if (number >= 58 && number <= 71) row = 8;
    if (number >= 90 && number <= 103) row = 9;

    // Put La and Ac in the main table's group 3 positions.
    if (number === 57) { row = 6; col = 3; }
    if (number === 89) { row = 7; col = 3; }

    tile.style.gridRow = row;
    tile.style.gridColumn = col;
    table.appendChild(tile);
  });
}

function drawLegend() {
  Object.entries(categories).forEach(([key, value]) => {
    const item = document.createElement("span");
    item.className = "legend-item";
    item.innerHTML = `<span class="legend-swatch" style="background:${value[1]}"></span>${value[0]}`;
    legend.appendChild(item);
  });
}

function showElement(element) {
  const [number, symbol, name, mass, category, period, group, block, state, config, fact] = element;
  selectedNumber = number;
  document.querySelectorAll(".element").forEach(tile => {
    tile.classList.toggle("selected", Number(tile.dataset.number) === number);
  });

  const colour = categories[category][1];
  const visual = document.getElementById("detailVisual");
  visual.style.setProperty("--element-color", colour);
  document.getElementById("elementCategory").textContent = categories[category][0];
  document.getElementById("elementCategory").style.setProperty("--element-color", colour);
  document.getElementById("elementNumber").textContent = `ATOMIC NO. ${number}`;
  document.getElementById("elementName").textContent = name;
  document.getElementById("elementTagline").textContent = `${symbol} · Element ${number} of 118`;
  document.getElementById("bigSymbol").textContent = symbol;
  document.getElementById("bigSymbol").style.color = colour;
  document.getElementById("elementDescription").textContent =
    `${name} (${symbol}) is classified as a ${categories[category][0].toLowerCase()}. Its properties depend on its atomic structure and position in the periodic table.`;
  document.getElementById("atomicMass").textContent = mass + (mass.startsWith("[") ? " u (approx. mass number)" : " u");
  document.getElementById("groupValue").textContent = group >= 1 && group <= 18 ? group : "—";
  document.getElementById("periodValue").textContent = period <= 7 ? period : (number <= 71 ? "6 (f-block)" : "7 (f-block)");
  document.getElementById("blockValue").textContent = block.toUpperCase() + "-block";
  document.getElementById("stateValue").textContent = state;
  document.getElementById("electronConfig").textContent = config;
  document.getElementById("funFact").textContent = fact;
  document.getElementById("visualCore").textContent = symbol;
  document.getElementById("visualCaption").textContent = `${name.toUpperCase()} // ${categories[category][0].toUpperCase()}`;

  visual.classList.remove("blast", "bubbles", "gold", "ordinary");
  void visual.offsetWidth; // Restart the animation each time an element is selected.
  if (symbol === "Na") {
    visual.classList.add("blast");
    createParticles(42, colour);
  } else if (symbol === "O") {
    visual.classList.add("bubbles");
    createParticles(22, colour, true);
  } else if (symbol === "Au") {
    visual.classList.add("gold");
    createParticles(30, colour);
  } else {
    visual.classList.add("ordinary");
    createParticles(14, colour, true);
  }

  const card = document.getElementById("detailCard");
  card.classList.remove("reveal");
  void card.offsetWidth;
  card.classList.add("reveal");
}

function createParticles(amount, colour, bubbles = false) {
  const holder = document.getElementById("particles");
  holder.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.background = colour;
    particle.style.setProperty("--element-color", colour);
    particle.style.left = `${45 + Math.random() * 10}%`;
    particle.style.top = `${43 + Math.random() * 14}%`;
    particle.style.setProperty("--dx", `${(Math.random() - .5) * (bubbles ? 230 : 340)}px`);
    particle.style.setProperty("--dy", `${(Math.random() - .5) * (bubbles ? 260 : 300)}px`);
    if (bubbles) {
      particle.style.border = `1px solid ${colour}`;
      particle.style.background = "transparent";
      particle.style.width = `${5 + Math.random() * 9}px`;
      particle.style.height = particle.style.width;
    }
    particle.style.animationDelay = `${Math.random() * .16}s`;
    holder.appendChild(particle);
  }
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  document.querySelectorAll(".element").forEach(tile => {
    const element = elements.find(item => item[0] === Number(tile.dataset.number));
    const matches = !query || element[1].toLowerCase().includes(query) ||
      element[2].toLowerCase().includes(query) || String(element[0]) === query;
    tile.classList.toggle("dimmed", !matches);
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "/" && document.activeElement !== searchInput) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape") {
    searchInput.value = "";
    searchInput.dispatchEvent(new Event("input"));
    searchInput.blur();
  }
});

drawTable();
drawLegend();
// Start with sodium selected so visitors immediately see the special effect.
showElement(elements.find(element => element[1] === "Na"));
