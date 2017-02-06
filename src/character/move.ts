import * as config from "../constants";

export interface Position {
    x: number;
    y: number;
}

export class Move {
    doubleJump: boolean = false;
    position: Position = {x: 0, y: 0};
    runSpeed: number = 2.8;
    walkSpeed: number = 1.0;

    jump(): number {
        if (this.doubleJump) {
            return this.position.y + (2 * config.jump);
        }

        return this.position.y + config.jump;
    }

    runLeft(): Position {
        this.position.x = this.position.x - (this.runSpeed * config.step);

        return this.position;
    }

    runRight(): Position {
        this.position.x = this.position.x + (this.runSpeed * config.step);

        return this.position;
    }

    walkLeft(): Position {
        this.position.x = this.position.x - (this.walkSpeed * config.step);

        return this.position;
    }

    walkRight(): Position {
        this.position.x = this.position.x + (this.walkSpeed * config.step);

        return this.position;
    }
}
