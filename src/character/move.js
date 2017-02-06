"use strict";
var config = require("../constants");
var Move = (function () {
    function Move() {
        this.doubleJump = false;
        this.runSpeed = 2.8;
        this.walkSpeed = 1.0;
    }
    Move.prototype.jump = function () {
        if (this.doubleJump) {
            return this.position.y + (2 * config.jump);
        }
        return this.position.y + (1 * config.jump);
    };
    Move.prototype.runLeft = function () {
        return this.position.x - (this.runSpeed * config.step);
    };
    Move.prototype.runRight = function () {
        return this.position.x + (this.runSpeed * config.step);
    };
    Move.prototype.walkLeft = function () {
        return this.position.x - (this.walkSpeed * config.step);
    };
    Move.prototype.walkRight = function () {
        return this.position.x + (this.walkSpeed * config.step);
    };
    return Move;
}());
exports.__esModule = true;
exports["default"] = Move;
