"use strict";
var config = require("../constants");
var Attribute = (function () {
    function Attribute() {
        this._mainAttribute = "intelligence";
        this.agility = 10;
        this.baseArmor = 3;
        this.baseHealth = 350;
        this.intelligence = 10;
        this.strength = 10;
    }
    Object.defineProperty(Attribute.prototype, "armor", {
        get: function () {
            return this.mainAttribute * config.armorModifier + this.baseArmor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attribute.prototype, "health", {
        get: function () {
            return this.mainAttribute * config.healthModifier + this.baseHealth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attribute.prototype, "mainAttribute", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    return Attribute;
}());
exports.__esModule = true;
exports["default"] = Attribute;
