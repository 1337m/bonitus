import Attribute from "./attribute";
import Move from "./move";

export default class Player {
    constructor(name) {
        this.name = name;
    }

    move(event) {
        switch (event.keyCode) {
            case 65:
                console.log(this.walkLeft());
                break;
            case 68: //D
                console.log(this.walkRight());
                break;
            case 32: //Space
                console.log(this.jump());
                break;
        }
    }
}