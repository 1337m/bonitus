System.register("constants", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var armorModifier, baseExperience, jump, healthModifier, levelModifier, levelDemodifier, maxLevel, step;
    return {
        setters: [],
        execute: function () {
            // Got a new gear? Cool! Let's modify your total armor!
            exports_1("armorModifier", armorModifier = 0.12);
            exports_1("baseExperience", baseExperience = 50);
            // I say jump, you ask how high...
            exports_1("jump", jump = 150);
            // Got a new gear? Cool! Let's modify your total health!
            exports_1("healthModifier", healthModifier = 2.35);
            exports_1("levelModifier", levelModifier = 2.6);
            exports_1("levelDemodifier", levelDemodifier = 4.502461);
            // You're getting to powerful now! Let's put this potential in the box!
            exports_1("maxLevel", maxLevel = 35);
            // Nice pair of legs you've got there.
            exports_1("step", step = 100);
        }
    };
});
System.register("character/attribute", ["constants"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var config, Attribute;
    return {
        setters: [
            function (config_1) {
                config = config_1;
            }
        ],
        execute: function () {
            Attribute = (function () {
                function Attribute() {
                    this._mainAttribute = "intelligence";
                    this.armor = 0;
                    this.agility = 10;
                    this.baseArmor = 3;
                    this.baseHealth = 350;
                    this.experience = config.baseExperience;
                    this.health = 0;
                    this.intelligence = 10;
                    this.level = 1;
                    this.strength = 10;
                    this.calculateArmor();
                    this.calculateHealth();
                    this.calculateLevel();
                }
                Attribute.prototype.calculateArmor = function () {
                    this.armor = Math.round(this.mainAttribute() * config.armorModifier + this.baseArmor);
                };
                Attribute.prototype.calculateHealth = function () {
                    this.health = Math.round(this.mainAttribute() * config.healthModifier + this.baseHealth);
                };
                Attribute.prototype.calculateLevel = function () {
                    var level = Math.floor(Math.pow(this.experience, 1 / config.levelModifier) / config.levelDemodifier);
                    if (level >= config.maxLevel) {
                        level = config.maxLevel;
                    }
                    else if (level < 1) {
                        level = 1;
                    }
                    return this.level = level;
                };
                Attribute.prototype.mainAttribute = function () {
                    return this[this._mainAttribute];
                };
                Attribute.prototype.nextLvlExpRequired = function () {
                    return Math.floor(config.baseExperience * Math.pow(this.level + 1, config.levelModifier) - this.experience);
                };
                return Attribute;
            }());
            exports_2("default", Attribute);
        }
    };
});
System.register("character/move", ["constants"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var config, Move;
    return {
        setters: [
            function (config_2) {
                config = config_2;
            }
        ],
        execute: function () {
            Move = (function () {
                function Move() {
                    this.doubleJump = false;
                    this.position = { x: 0, y: 0 };
                    this.runSpeed = 2.8;
                    this.walkSpeed = 1.0;
                }
                Move.prototype.jump = function () {
                    if (this.doubleJump) {
                        return this.position.y + (2 * config.jump);
                    }
                    return this.position.y + config.jump;
                };
                Move.prototype.runLeft = function () {
                    this.position.x = this.position.x - (this.runSpeed * config.step);
                    return this.position;
                };
                Move.prototype.runRight = function () {
                    this.position.x = this.position.x + (this.runSpeed * config.step);
                    return this.position;
                };
                Move.prototype.walkLeft = function () {
                    this.position.x = this.position.x - (this.walkSpeed * config.step);
                    return this.position;
                };
                Move.prototype.walkRight = function () {
                    this.position.x = this.position.x + (this.walkSpeed * config.step);
                    return this.position;
                };
                return Move;
            }());
            exports_3("Move", Move);
        }
    };
});
System.register("util", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    function applyMixins(derivedCtor, baseCtors) {
        baseCtors.forEach(function (baseCtor) {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    }
    exports_4("applyMixins", applyMixins);
    function applyAttributes(derivedCtor, baseCtors) {
        baseCtors.forEach(function (baseCtor) {
            Object.getOwnPropertyNames(baseCtor).forEach(function (name) {
                if (derivedCtor[name] === undefined) {
                    derivedCtor[name] = baseCtor[name];
                }
            });
        });
        return derivedCtor;
    }
    exports_4("applyAttributes", applyAttributes);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("character/player", ["character/attribute", "character/move", "util"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    function New(name) {
        console.debug('Initialising new player: ' + name + '.');
        util.applyMixins(Player, [attribute_1.default, move_1.Move]);
        return util.applyAttributes(new Player(name), [
            new attribute_1.default(),
            new move_1.Move()
        ]);
    }
    exports_5("New", New);
    var attribute_1, move_1, util, Player;
    return {
        setters: [
            function (attribute_1_1) {
                attribute_1 = attribute_1_1;
            },
            function (move_1_1) {
                move_1 = move_1_1;
            },
            function (util_1) {
                util = util_1;
            }
        ],
        execute: function () {
            Player = (function () {
                function Player(name) {
                    this.name = name;
                }
                Player.prototype.move = function (event) {
                    switch (event.keyCode) {
                        case 65:
                            console.log(this.walkLeft());
                            break;
                        case 68:
                            console.log(this.walkRight());
                            break;
                        case 32:
                            console.log(this.jump());
                            break;
                    }
                };
                return Player;
            }());
            exports_5("Player", Player);
        }
    };
});
System.register("app", ["character/player"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var player, $window, $;
    return {
        setters: [
            function (player_1) {
                player = player_1;
            }
        ],
        execute: function () {
            $window = window, $ = $window.jQuery;
            $window.Bonitus = {
                Player: player.New("John"),
            };
            $(document)
                .ready(function () {
                $('body')
                    .on('keydown', $window.Bonitus.Player.move);
            });
            // FIXME later
        }
    };
});
