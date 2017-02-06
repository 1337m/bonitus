import * as config from "../constants";

export default class Attribute {
    _mainAttribute: string = "intelligence";
    armor: number = 0;
    agility: number = 10;
    baseArmor: number = 3;
    baseHealth: number = 350;
    experience: number = config.baseExperience;
    health: number = 0;
    intelligence: number = 10;
    level: number = 1;
    strength: number = 10;

    constructor() {
        this.calculateArmor();
        this.calculateHealth();
        this.calculateLevel();
    }

    calculateArmor(): void {
        this.armor = Math.round(this.mainAttribute() * config.armorModifier + this.baseArmor);
    }

    calculateHealth(): void {
        this.health = Math.round(this.mainAttribute() * config.healthModifier + this.baseHealth);
    }

    calculateLevel(): number {
        let level = Math.floor(Math.pow(this.experience, 1 / config.levelModifier) / config.levelDemodifier);

        if (level >= config.maxLevel) {
            level = config.maxLevel;
        } else if (level < 1) {
            level = 1;
        }

        return this.level = level;
    }

    mainAttribute(): number {
        return (<any>this)[this._mainAttribute];
    }

    nextLvlExpRequired(): number {
        return Math.floor(config.baseExperience * Math.pow(this.level + 1, config.levelModifier) - this.experience) + 1;
    }
}
