import { getAsset } from './assets';
import { getCurrentState } from './state';

const Constants = require('../shared/constants');
const { PLAYER_RADIUS, PLAYER_MAX_HP, BULLET_RADIUS, MAP_SIZE } = Constants;

// Get the canvas graphics context
const canvas = document.getElementById('game-canvas');
const context = canvas.getContext('2d');

// Make the canvas fullscreen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function render() {
  const { me, others, bullets } = getCurrentState();
  if (!me) {
    return;
  }

  // Draw background
  renderBackground(me.x, me.y);

  // Draw all bullets
  bullets.forEach(renderBullet.bind(null, me));

  // Draw all players
  renderPlayer(me, me);
  others.forEach(renderPlayer.bind(null, me));
}

// ... Helper functions here excluded

let renderInterval = null;
export function startRendering() {
  renderInterval = setInterval(render, 1000 / 60);
}
export function stopRendering() {
  clearInterval(renderInterval);
}

function renderBullet(me, bullet) {
    const { x, y } = bullet;
    context.drawImage(
      getAsset('bullet.svg'),
      canvas.width / 2 + x - me.x - BULLET_RADIUS,
      canvas.height / 2 + y - me.y - BULLET_RADIUS,
      BULLET_RADIUS * 2,
      BULLET_RADIUS * 2,
    );
  }

import { getCurrentState } from './state';

function render() {
  const { me, others, bullets } = getCurrentState();

  // Do the rendering
  // ...
}