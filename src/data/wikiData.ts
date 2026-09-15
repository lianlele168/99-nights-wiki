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

export const SURVIVAL_CLASSES: SurvivalClass[] = [
  {
    id: 'scavenger',
    name: 'Scavenger',
    tier: 'S',
    cost: 80,
    description: 'Extra backpack space and faster chest opening. The premier class for beginners and solo survivors.',
    perks: ['+4 Inventory Slots', 'Open chests 50% faster', 'Increased rare item drop chance'],
    bestFor: ['Solo', 'Beginners', 'Loot Farming']
  },
  {
    id: 'engineer',
    name: 'Engineer',
    tier: 'S',
    cost: 150,
    description: 'Deploys automated turrets to defend camp while scouting.',
    perks: ['Deploy Automated Turret', 'Rapid Wall Fortification', '50% Faster Repair'],
    bestFor: ['Team Play', 'Night 50+ Defense', 'Base Camps']
  },
  {
    id: 'big-game-hunter',
    name: 'Big Game Hunter',
    tier: 'A',
    cost: 120,
    description: 'Specialized in hunting deer and wolves for maximum meat and pelts.',
    perks: ['Bonus damage to wildlife', '+100% Meat harvest', 'Animal track highlighter'],
    bestFor: ['Food Sustain', 'Solo Survival']
  },
  {
    id: 'cyborg',
    name: 'Cyborg',
    tier: 'A',
    cost: 200,
    description: 'Mechanical cyberware boosting sprint speed and melee output.',
    perks: ['+25% Sprint speed', 'Reduced hunger drain', 'Night-vision visor pulse'],
    bestFor: ['Combat', 'High-Risk Scouting']
  },
  {
    id: 'assassin',
    name: 'Assassin',
    tier: 'A',
    cost: 180,
    description: 'Stealth-oriented class with high backstab crit multipliers.',
    perks: ['3x Backstab crit damage', 'Silent footstep audio', 'Shadow cloak dash'],
    bestFor: ['Cultist Camp Raiding', 'Solo']
  },
  {
    id: 'lumberjack',
    name: 'Lumberjack',
    tier: 'B',
    cost: 60,
    description: 'Chops logs 3x faster to supply endless wood for campfire upkeep.',
    perks: ['Triple wood yield', 'Wood stacking limit +50', 'Axe durability boost'],
    bestFor: ['Campfire Flame Sustain', 'Co-op Resource Anchor']
  },
  {
    id: 'medic',
    name: 'Combat Medic',
    tier: 'B',
    cost: 100,
    description: 'Synthesizes healing bandages and provides aura health regen.',
    perks: ['Team HP regen aura', 'Bandage crafting discount', 'Revive fallen allies 2x faster'],
    bestFor: ['Squad Survival', 'Late-Game Night Raids']
  }
];

export const FOREST_ENTITIES: ForestEntity[] = [
  {
    id: 'the-deer',
    name: 'The Wendigo Deer',
    category: 'Primary Monster',
    threat: 'Extreme',
    immortal: true,
    description: 'The supreme woodland predator. Fast, merciless, and completely immune to all weapons.',
    behavior: 'Stalks players in darkness outside the light perimeter.',
    tips: ['Sprint toward the campfire light', 'Never attempt to fight it', 'Break line of sight behind thick redwoods']
  },
  {
    id: 'the-owl',
    name: 'The Night Owl',
    category: 'Primary Monster',
    threat: 'High',
    immortal: true,
    description: 'Silent aerial stalker diving from tree canopies.',
    behavior: 'Swoops silently upon exposed players in open forest clearings.',
    tips: ['Listen for branch snapping', 'Stick under heavy tree coverage', 'Throw flares to disrupt divebombs']
  },
  {
    id: 'the-ram',
    name: 'The Battering Ram',
    category: 'Primary Monster',
    threat: 'High',
    immortal: true,
    description: 'Massive horned beast charging through fortified camp barricades.',
    behavior: 'Winds up a linear charge dealing devastating knockback.',
    tips: ['Sidestep right before impact', 'Bait into striking stone boulders to stun']
  },
  {
    id: 'the-bat',
    name: 'Giant Cave Bat',
    category: 'Primary Monster',
    threat: 'Medium',
    immortal: true,
    description: 'Echolocating flying terror that swarms when flares extinguish.',
    behavior: 'Circles above before diving.',
    tips: ['Torch light causes disorientation', 'Keep campfire level high']
  },
  {
    id: 'cultist-warrior',
    name: 'Cultist Spearman',
    category: 'Hostile',
    threat: 'Medium',
    immortal: false,
    description: 'Tribal cultist attacking camp structures during midnight wave assaults.',
    behavior: 'Groups in squads of 3-5 and advances toward the flame altar.',
    tips: ['Use bear traps around camp perimeter', 'Deploy Engineer turrets']
  },
  {
    id: 'cultist-archer',
    name: 'Crossbow Cultist',
    category: 'Hostile',
    threat: 'High',
    immortal: false,
    description: 'Ranged attacker firing flaming bolts from tree perches.',
    behavior: 'Maintains distance and targets players actively chopping wood.',
    tips: ['Prioritize eliminating archers first', 'Use wooden shield to deflect']
  },
  {
    id: 'shadow-crawler',
    name: 'Shadow Crawler',
    category: 'Hostile',
    threat: 'Medium',
    immortal: false,
    description: 'Low-profile quadruped ambushing isolated scouts.',
    behavior: 'Scuttles rapidly across grass when torch light dips below 20%.',
    tips: ['Carry extra torch fuel', 'Listen for clicking audio cues']
  }
];

export const SURVIVAL_GEAR_DATA: SurvivalGear[] = [
  { id: 'hunting-rifle', name: 'Bolt-Action Rifle', category: 'Weapon', tier: 'Master', durability: 100, effect: 'High single-shot damage against cultists and wolves', craftCost: '15 Iron + 10 Wood + 2 Spring' },
  { id: 'reinforced-crossbow', name: 'Reinforced Crossbow', category: 'Weapon', tier: 'Advanced', durability: 120, effect: 'Silent ranged kill with retrievable arrows', craftCost: '8 Wood + 5 Wire + 4 Bone' },
  { id: 'machete-steel', name: 'Forged Steel Machete', category: 'Weapon', tier: 'Advanced', durability: 200, effect: 'Rapid swing rate and dense brush clearing', craftCost: '6 Iron + 4 Scrap + 2 Leather' },
  { id: 'portable-lantern', name: 'Kerosene Lantern', category: 'Utility', tier: 'Basic', durability: 300, effect: '360-degree light radius preventing shadow stalkers', craftCost: '4 Scrap + 2 Glass + 1 Fuel' },
  { id: 'automated-turret', name: 'Engineer Micro-Turret', category: 'Defense', tier: 'Master', durability: 250, effect: 'Auto-targets cultist invaders within 20 studs', craftCost: '12 Iron + 8 Wire + 1 Battery' },
  { id: 'bear-trap-iron', name: 'Heavy Jaw Trap', category: 'Defense', tier: 'Basic', durability: 50, effect: 'Roots hostile invaders for 6 seconds', craftCost: '5 Iron + 2 Spring' },
  { id: 'reinforced-wall', name: 'Log Spike Barricade', category: 'Defense', tier: 'Basic', durability: 400, effect: 'Blocks cultist pathing toward campfire altar', craftCost: '12 Hardwood Logs' },
  { id: 'healing-salve', name: 'Herbal Medical Salve', category: 'Utility', tier: 'Basic', durability: 1, effect: 'Restores 60 HP over 8 seconds', craftCost: '3 Wild Berries + 2 Aloe Leaf' },
  { id: 'flame-accelerant', name: 'Sulfur Fire Charcoal', category: 'Campfire', tier: 'Advanced', durability: 1, effect: 'Instantly increases campfire flame radius by 80%', craftCost: '5 Sulfur + 4 Coal' },
  { id: 'thermal-tent', name: 'Insulated Sleeping Pack', category: 'Utility', tier: 'Advanced', durability: 150, effect: 'Halves hypothermia and stamina depletion during blizzard nights', craftCost: '6 Pelts + 4 Rope + 6 Sticks' },
  { id: 'flare-gun', name: 'Distress Signal Flare Gun', category: 'Utility', tier: 'Master', durability: 10, effect: 'Illuminates entire quad sector and repels the Owl', craftCost: '1 Signal Frame + 3 Magnesium Flares' }
];
