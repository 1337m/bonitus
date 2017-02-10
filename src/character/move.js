import * as config from "../constants";

export class Move {
    doubleJump = false;
    position = {x: 0, y: 0};
    runSpeed = 2.8;
    walkSpeed = 1.0;

    jump(){
        if (this.doubleJump){
            return this.position.y + (2 * config.jump);
        }

        return this.position.y + config.jump;
    }

    runLeft(){
        this.position.x = this.position.x - (this.runSpeed + config.step);

        return this.position;
    }

    runRight(){
        this.position.x = this.position.x + (this.runSpeed + config.step);

        return this.position;
    }

    walkLeft(){
        this.position.x = this.position.x - (this.walkSpeed * config.step);
        
        return this.position;
    }

    walkRight(){
        this.position.x = this.position.x - (this.walkSpeed *config.step);

        return this.position;
    }
}