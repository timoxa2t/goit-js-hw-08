import Player from '@vimeo/player'

const throttle = require('lodash.throttle');

const videoEl = document.querySelector("#vimeo-player")

const player = new Player(videoEl);

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))

player.on('timeupdate', throttle(({duration, percent, seconds}) => {
    localStorage.setItem("videoplayer-current-time", seconds) 
}, 1000));
