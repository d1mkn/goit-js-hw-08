import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIMECODE = 'videoplayer-current-time';

setCurrentTime();

const onPlay = function (data) {
  localStorage.setItem(CURRENT_TIMECODE, JSON.stringify(data.seconds));
};

player.on('timeupdate', throttle(onPlay, 2000));

function setCurrentTime() {
  if (!localStorage.getItem(CURRENT_TIMECODE)) {
    return;
  }
  player.setCurrentTime(localStorage.getItem(CURRENT_TIMECODE));
}