export const FOREST_ENTITIES: ForestEntity[] = [
  { id: "the-deer", name: "The Deer", category: "Boss", threat: "Extreme", immortal: true, description: "The main antagonist. 1,150 HP, 27 damage per hit. Cannot be permanently killed - only driven off.", behavior: "Stalks the forest and attacks the camp.", tips: ["Hit its legs twice to stun it for ~3 seconds", "Melee its arms for bonus damage; below 25% HP an arm can be severed", "Lure it onto the rickety bridge at the Sacred Tree to drop it"] },
  { id: "cultist-king", name: "Cultist King", category: "Boss", threat: "High", immortal: false, description: "500 HP. Drops the Cultist King Head, a crafting material.", behavior: "Leads cultist raids on the camp.", tips: ["Group up and focus it down"] },
  { id: "bear", name: "Bear", category: "Hostile", threat: "High", immortal: false, description: "280 HP, 40 damage per hit.", behavior: "Aggressive when close.", tips: ["Keep distance with bow or gun", "Avoid melee trades"] },
  { id: "alien-father", name: "Alien Father", category: "Hostile", threat: "High", immortal: false, description: "1,500 HP. Heavily armored alien entity.", behavior: "Appears during alien events.", tips: ["Bring your strongest weapon"] },
  { id: "alien", name: "Alien", category: "Hostile", threat: "Medium", immortal: false, description: "500 HP armored entity.", behavior: "Accompanies the Alien Father.", tips: ["Strong weapons required"] },
  { id: "alpha-wolf", name: "Alpha Wolf", category: "Hostile", threat: "Medium", immortal: false, description: "150 HP. Pack leader with better drops.", behavior: "Hunts with wolf packs.", tips: ["Focus it first for better loot"] },
  { id: "wolf", name: "Wolf", category: "Hostile", threat: "Low", immortal: false, description: "75 HP. Common forest threat.", behavior: "Basic melee chaser.", tips: ["Any weapon kills it"] },
  { id: "koala", name: "Koala", category: "Hostile", threat: "Medium", immortal: false, description: "500 HP. Steals your pet.", behavior: "Targets tamed animals.", tips: ["Kill it to reclaim your pet"] },
  { id: "squid-dog", name: "Squid Dog", category: "Hostile", threat: "Medium", immortal: false, description: "Sanity-draining entity.", behavior: "Psychological attacks at range.", tips: ["Keep your distance"] }
];

// Verified crafting chain (community wiki): 2x Old Iron -> 1x Refined Iron; 2x Refined Iron -> Sharpened Iron.
export const SURVIVAL_GEAR_DATA: SurvivalGear[] = [
  { id: "refined-iron", name: "Refined Iron", category: "Utility", tier: "Basic", durability: 0, effect: "Smelting product: 2x Old Iron combine into 1x Refined Iron.", craftCost: "2x Old Iron" },
  { id: "sharpened-iron", name: "Sharpened Iron", category: "Weapon", tier: "Advanced", durability: 0, effect: "Weapon upgrade material: 2x Refined Iron combine into Sharpened Iron.", craftCost: "2x Refined Iron" },
  { id: "strong-axe", name: "Strong Axe", category: "Weapon", tier: "Master", durability: 0, effect: "Core craftable weapon on the iron upgrade chain.", craftCost: "See community wiki crafting table" }
];

// All 48 classes verified against the community wiki (Sept 2026). Tier letters
// below are price-band groupings from documented diamond costs (B=40-80, A=100-250, S=300+),
// NOT a gameplay strength ranking.
export const SURVIVAL_CLASSES: SurvivalClass[] = [
  { id: "lumberjack", name: "Lumberjack", tier: "B", cost: 70, description: "Documented on the community wiki: 70 diamonds. Starts with Health Charm, Log.", perks: ["Lv2 (700xp): axe damage +50%","Lv3 (1200xp): chops wood 1/3 faster"], bestFor: ["Solo","Beginners","Team play"] },
  { id: "cook", name: "Cook", tier: "B", cost: 40, description: "Documented on the community wiki: 40 diamonds, requires 1 badge. Starts with 1x Steak.", perks: ["1 hunger drain","3 hunger restore","Lv2 (500xp): Crockpot cooks 20% faster","Lv3 (1200xp): 25% chance to make Hearty Stew"], bestFor: ["Solo","Beginners","Team play"] },
  { id: "fisher", name: "Fisher", tier: "B", cost: 40, description: "Documented on the community wiki: 40 diamonds, requires 1 badge. Starts with 1x Salmon.", perks: ["Fishing never fails","Lv3 (900xp): 3x chance of double fish"], bestFor: ["Solo","Beginners","Team play"] },
  { id: "medic", name: "Medic", tier: "B", cost: 40, description: "Documented on the community wiki: 40 diamonds, requires 2 badges. Starts with 2x Bandage.", perks: ["Lv2 (700xp): revives teammates 5x faster"], bestFor: ["Solo","Beginners","Team play"] },
  { id: "hunter", name: "Hunter", tier: "B", cost: 45, description: "Documented on the community wiki: 45 diamonds, requires 2 badges. Starts with 1x Good Axe.", perks: ["Lv2 (1000xp): attack damage +15%"], bestFor: ["Solo","Beginners","Team play"] },
  { id: "support", name: "Support", tier: "B", cost: 50, description: "Documented on the community wiki: 50 diamonds, requires 3 badges. Starts with 2x Bandage.", perks: ["Others pick up your placed items 1/3 faster","Lv2 (1000xp): Crockpot crafts 20% faster"], bestFor: ["Solo","Team play"] },
  { id: "scavenger", name: "Scavenger", tier: "B", cost: 60, description: "Documented on the community wiki: 60 diamonds, requires 3 badges. Starts with Map.", perks: ["Lv2 (700xp): 1.5x chest XP"], bestFor: ["Resource farming","Solo"] },
  { id: "farmer", name: "Farmer", tier: "B", cost: 70, description: "Documented on the community wiki: 70 diamonds, requires 2 badges. Starts with 1x Seed Box, 2x Carrot.", perks: ["Lv3 (750xp): 2x chance of bonus harvest"], bestFor: ["Resource farming","Solo"] },
  { id: "camper", name: "Camper", tier: "B", cost: 80, description: "Documented on the community wiki: 80 diamonds, requires 1 badge. Starts with Flashlight, Tent.", perks: ["Lv2 (600xp): hunger drains 25% slower"], bestFor: ["Solo","Team play"] },
  { id: "archer", name: "Archer", tier: "B", cost: 80, description: "Documented on the community wiki: 80 diamonds, requires 1 badge. Starts with Crossbow, 3x Bolt.", perks: ["Crafts bolts faster","Lv2 (1200xp): chance to not consume bolts"], bestFor: ["Solo","Team play"] },
  { id: "detective", name: "Detective", tier: "B", cost: 80, description: "Documented on the community wiki: 80 diamonds, requires 3 badges. Starts with Fedora.", perks: ["Completes missing-child clues faster (front-atrium / temple / cave)"], bestFor: ["Solo","Team play"] },
  { id: "ranger", name: "Ranger", tier: "A", cost: 120, description: "Documented on the community wiki: 120 diamonds, requires 4 badges. Starts with Hunting Rifle, 2x Ammo.", perks: ["Excellent night vision","10% ammo refund on guns","Lv2 (1400xp): extra 5% ammo refund"], bestFor: ["Team play","Advanced players","Late game"] },
  { id: "decorator", name: "Decorator", tier: "A", cost: 120, description: "Documented on the community wiki: 120 diamonds, requires 3 badges. Starts with Sofa.", perks: ["Renovate and decorate your own shelter"], bestFor: ["Solo","Team play"] },
  { id: "gambler", name: "Gambler", tier: "A", cost: 100, description: "Documented on the community wiki: 100 diamonds, requires 4 badges. Starts with 1x Card Pack.", perks: ["1/4 chance at the start of each night to gain a random item"], bestFor: ["Solo","Team play"] },
  { id: "blacksmith", name: "Blacksmith", tier: "A", cost: 150, description: "Documented on the community wiki: 150 diamonds, requires 3 badges. Starts with Refillable Torch.", perks: ["Smelts Old Iron 1.5x more efficiently"], bestFor: ["Resource farming","Solo"] },
  { id: "miner", name: "Miner", tier: "A", cost: 150, description: "Documented on the community wiki: 150 diamonds, requires 3 badges. Starts with Pickaxe.", perks: ["Mines every 3 minutes","15% chance of double drops"], bestFor: ["Resource farming","Solo"] },
  { id: "zombie-undead", name: "Zombie (Undead)", tier: "A", cost: 150, description: "Documented on the community wiki: 150 diamonds, requires 4 badges. Starts with Class ID Card.", perks: ["Lv3 (600xp): +16 walkspeed"], bestFor: ["Solo","Team play"] },
  { id: "fisherman", name: "Fisherman", tier: "A", cost: 150, description: "Documented on the community wiki: 150 diamonds, requires 3 badges. Starts with 1x Fishing Rod.", perks: ["Crafts fishing rods faster","Fishing never fails"], bestFor: ["Solo","Beginners","Team play"] },
  { id: "big-game-hunter", name: "Big Game Hunter", tier: "A", cost: 150, description: "Documented on the community wiki: 150 diamonds, requires 3 badges. Starts with Hunting Rifle.", perks: ["No survival-day cap"], bestFor: ["Solo","Beginners","Team play"] },
  { id: "zookeeper", name: "Zookeeper", tier: "A", cost: 150, description: "Documented on the community wiki: 150 diamonds, requires 4 badges. Starts with 1x Flute.", perks: ["Tame animals"], bestFor: ["Solo","Team play"] },
  { id: "brawler", name: "Brawler", tier: "A", cost: 250, description: "Documented on the community wiki: 250 diamonds, requires 5 badges. Starts with —.", perks: ["Enhanced unarmed melee"], bestFor: ["Solo","Team play"] },
  { id: "vampire", name: "Vampire", tier: "A", cost: 250, description: "Documented on the community wiki: 250 diamonds, requires 5 badges. Starts with —.", perks: ["Lifesteal-style perks"], bestFor: ["Solo","Team play"] },
  { id: "berserker", name: "Berserker", tier: "A", cost: 250, description: "Documented on the community wiki: 250 diamonds, requires 4 badges. Starts with 1x Bandage.", perks: ["Lv3 (900xp): faster attack speed"], bestFor: ["Solo","Team play"] },
  { id: "vagabond", name: "Vagabond", tier: "A", cost: 250, description: "Documented on the community wiki: 250 diamonds, requires 4 badges. Starts with —.", perks: ["Survival-focused kit"], bestFor: ["Solo","Team play"] },
  { id: "firefighter", name: "Firefighter", tier: "A", cost: 250, description: "Documented on the community wiki: 250 diamonds, requires 4 badges. Starts with Refillable Torch.", perks: ["Lv2 (600xp): extinguishes teammates 25% faster"], bestFor: ["Solo","Team play"] },
  { id: "spy", name: "Spy", tier: "A", cost: 200, description: "Documented on the community wiki: 200 diamonds, requires 4 badges. Starts with Matcha.", perks: ["Lv2 (400xp): more likely to be the traitor role"], bestFor: ["Solo","Team play"] },
  { id: "assassin", name: "Assassin", tier: "A", cost: 200, description: "Documented on the community wiki: 200 diamonds, requires 4 badges. Starts with 1x Katana.", perks: ["Melee assassin role"], bestFor: ["Team play","Advanced players","Late game"] },
  { id: "trickster", name: "Trickster", tier: "A", cost: 200, description: "Documented on the community wiki: 200 diamonds, requires 4 badges. Starts with Class ID Card.", perks: ["Lv2 (500xp): less likely to be picked for other roles"], bestFor: ["Solo","Team play"] },
  { id: "footballer", name: "Footballer", tier: "A", cost: 200, description: "Documented on the community wiki: 200 diamonds, requires 3 badges. Starts with —.", perks: ["Movement and stamina perks"], bestFor: ["Solo","Team play"] },
  { id: "gold-digger", name: "Gold Digger", tier: "A", cost: 200, description: "Documented on the community wiki: 200 diamonds, requires 4 badges. Starts with Class ID Card.", perks: ["Treasure-focused perks"], bestFor: ["Resource farming","Solo"] },
  { id: "commando", name: "Commando", tier: "S", cost: 300, description: "Documented on the community wiki: 300 diamonds, requires 4 badges. Starts with —.", perks: ["Gun-focused class"], bestFor: ["Team play","Advanced players","Late game"] },
  { id: "shark", name: "Shark", tier: "S", cost: 300, description: "Documented on the community wiki: 300 diamonds, requires 4 badges. Starts with —.", perks: ["Animal transformation class"], bestFor: ["Solo","Team play"] },
  { id: "werewolf", name: "Werewolf", tier: "S", cost: 300, description: "Documented on the community wiki: 300 diamonds, requires 4 badges. Starts with —.", perks: ["Transformation class"], bestFor: ["Solo","Team play"] },
  { id: "swordsman", name: "Swordsman", tier: "A", cost: 250, description: "Documented on the community wiki: 250 diamonds, requires 4 badges. Starts with —.", perks: ["Sword melee class"], bestFor: ["Solo","Team play"] },
  { id: "jester", name: "Jester", tier: "A", cost: 250, description: "Documented on the community wiki: 250 diamonds, requires 4 badges. Starts with —.", perks: ["Chaos / fun role"], bestFor: ["Solo","Team play"] },
  { id: "gorilla", name: "Gorilla", tier: "A", cost: 250, description: "Documented on the community wiki: 250 diamonds, requires 4 badges. Starts with —.", perks: ["Animal class"], bestFor: ["Solo","Team play"] },
  { id: "koala", name: "Koala", tier: "A", cost: 250, description: "Documented on the community wiki: 250 diamonds, requires 4 badges. Starts with —.", perks: ["Animal class"], bestFor: ["Solo","Team play"] },
  { id: "bat", name: "Bat", tier: "A", cost: 250, description: "Documented on the community wiki: 250 diamonds, requires 4 badges. Starts with —.", perks: ["Animal class"], bestFor: ["Solo","Team play"] },
  { id: "octopus", name: "Octopus", tier: "S", cost: 350, description: "Documented on the community wiki: 350 diamonds, requires 4 badges. Starts with —.", perks: ["Animal class"], bestFor: ["Solo","Team play"] },
  { id: "barbarian", name: "Barbarian", tier: "S", cost: 350, description: "Documented on the community wiki: 350 diamonds, requires 5 badges. Starts with —.", perks: ["Melee berserker"], bestFor: ["Solo","Team play"] },
  { id: "cyborg", name: "Cyborg", tier: "S", cost: 399, description: "Documented on the community wiki: 399 diamonds, requires 4 badges. Starts with Battery.", perks: ["Lv2 (400xp) / Lv3 (1000xp): battery charge mechanic"], bestFor: ["Team play","Advanced players","Late game"] },
  { id: "alien", name: "Alien", tier: "S", cost: 599, description: "Documented on the community wiki: 599 diamonds, requires 5 badges. Starts with —.", perks: ["Premium class"], bestFor: ["Team play","Advanced players","Late game"] },
  { id: "ninja", name: "Ninja", tier: "S", cost: 450, description: "Documented on the community wiki: 450 diamonds, requires 5 badges. Starts with —.", perks: ["Premium class"], bestFor: ["Team play","Advanced players","Late game"] },
  { id: "witch", name: "Witch", tier: "S", cost: 400, description: "Documented on the community wiki: 400 diamonds, requires 5 badges. Starts with —.", perks: ["Premium class"], bestFor: ["Solo","Team play"] },
  { id: "king", name: "King", tier: "S", cost: 500, description: "Documented on the community wiki: 500 diamonds, requires 5 badges. Starts with —.", perks: ["Premium class"], bestFor: ["Solo","Team play"] },
  { id: "necromancer", name: "Necromancer", tier: "S", cost: 500, description: "Documented on the community wiki: 500 diamonds, requires 5 badges. Starts with —.", perks: ["Summon / revival class"], bestFor: ["Team play","Advanced players","Late game"] },
  { id: "it", name: "It", tier: "S", cost: 666, description: "Documented on the community wiki: 666 diamonds, requires 5 badges. Starts with —.", perks: ["Easter-egg priced class"], bestFor: ["Solo","Team play"] },
  { id: "mod", name: "Mod", tier: "A", cost: 99, description: "Documented on the community wiki: 99 diamonds, requires 5 badges. Starts with —.", perks: ["Easter-egg class"], bestFor: ["Solo","Team play"] }
];

export interface SurvivalClass {
  id: string;
  name: string;
  tier: 'S' | 'A' | 'B' | 'C';
  cost: number;
  description: string;
  perks: string[];
  bestFor: string[];
}

export interface ForestEntity {
  id: string;
  name: string;
  category: 'Primary Monster' | 'Hostile' | 'Neutral' | 'Boss';
  threat: 'Extreme' | 'High' | 'Medium' | 'Low';
  immortal: boolean;
  description: string;
  behavior: string;
  tips: string[];
}

export interface SurvivalGear {
  id: string;
  name: string;
  category: 'Weapon' | 'Campfire' | 'Utility' | 'Defense';
  tier: 'Basic' | 'Advanced' | 'Master';
  durability: number;
  effect: string;
  craftCost: string;
}

