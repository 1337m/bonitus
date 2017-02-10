import * as config from "../constants";

export default class Attribute {
    constructor() {
        this._mainAttribute = "Intelligence";
        this.armor = 0;
        this.agillity = 10;
        this.baseArmor = 3;
        this.baseHealth = 350;
        this.experience = config.baseExperience;
        this.health = 0;
        this.intelligence = 10;
        this.level = 1;
        this.strenght = 10;

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