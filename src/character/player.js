"use strict";
var attribute_1 = require("./attribute");
var move_1 = require("./move");
var util = require("../util");
var Player = (function () {
    function Player(name) {
        this.name = name;
    }
    return Player;
}());
exports.__esModule = true;
exports["default"] = Player;
util.applyMixins(Player, [attribute_1["default"], move_1["default"]]);
