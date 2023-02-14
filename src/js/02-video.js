import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIMECODE = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(CURRENT_TIMECODE, JSON.stringify(data.seconds));
};

player.on('timeupdate', throttle(onPlay, 2000));

player.setCurrentTime(localStorage.getItem(CURRENT_TIMECODE));