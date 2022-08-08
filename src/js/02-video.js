import Player from '@vimeo/player'

const throttle = require('lodash.throttle');
const VIDEOPLAYER_CURRENT_TIME = "videoplayer-current-time"

const videoEl = document.querySelector("#vimeo-player")

const player = new Player(videoEl);

const time = localStorage.getItem(VIDEOPLAYER_CURRENT_TIME)

time && player.setCurrentTime(time)

player.on('timeupdate', throttle(({duration, percent, seconds}) => {
    localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, seconds) 
}, 1000));
