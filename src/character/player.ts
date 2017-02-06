import Attribute from "./attribute";
import {Move, Position} from "./move";
import * as util from "../util";

export class Player {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(event: any) {
        switch (event.keyCode) {
            case 65:
                console.log(this.walkLeft());
                break;
            case 68: // D
                console.log(this.walkRight());
                break;
            case 32: // Space
                console.log(this.jump());
                break;
        }
    }

    jump: () => Position;
    walkLeft: () => Position;
    walkRight: () => Position;
}

export function New(name: string) {
    console.debug('Initialising new player: ' + name + '.');

    util.applyMixins(Player, [Attribute, Move]);

    return util.applyAttributes(
        new Player(name),
        [
            new Attribute(),
            new Move()
        ]
    );
}
