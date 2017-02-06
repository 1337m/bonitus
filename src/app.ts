import * as player from "./character/player";

let $window = (<any>window),
    $ = $window.jQuery;

$window.Bonitus = {
        Player: player.New("John"),
    };

$(document)
    .ready(() => {
        $('body')
            .on('keydown', $window.Bonitus.Player.move);
    });

// FIXME later

