import * as config from "../constants";

export default class Attribute {
    _mainAttribute = "Intelligence";
    armor = 0;
    agillity = 10;
    baseArmor = 3;
    baseHealth = 350;
    experience = config.baseExperience;
    health = 0;
    intelligence = 10;
    level = 1;
    strenght = 10;

    constructor() {
        this.calculateArmor();
        this.calculateHealth();
        this.calculateLevel();
    }

    calculateArmor() {
        this.armor = Math.round(this.mainAttribute() * config.healthModifier + this.baseHealth);
    }

    calculateHealth() {
        this.health = Math.round(this.mainAttribute() * config.healthModifier + this.baseHealth);
    }

    calculateLevel() {
        let level = Math.floor(Math.pow(this.experience, 1 / config.levelModifier) / config.levelDemodifier);

        if (level >= config.maxLevel) {
            level = config.maxLevel;
        } else if (level < 1) {
            level = 1;
        }

        return this.level = level;
    }

    mainAttribute() {
        return this._mainAttribute;
    }

    nextLvlExpRequired() {
        return Math.floor(config.baseExperience * Math.pow(this.level + 1, config.levelModifier) - this.experience) + 1;
    }
}