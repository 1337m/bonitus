"use strict";

var _player = require("./character/player");

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Bonitus = {
    Player: new _player2.default("John")
};