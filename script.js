const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

console.log(ctx);

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "img/shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;

let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
    {
        name: "idle",
        frames: 7
    },
    {
        name: "jump",
        frames: 7
    },
    {
        name: "jump",
        frames: 7
    },
];

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //   ctx.fillRect(50, 50, 100, 100);
  //   ctx.drawImage(image, sourceX, sourceY, sourceW, sourceH, destinationX, destinationY, destinationW, destinationH);
  let position = Math.floor(gameFrame / staggerFrames) % 6;
  frameX = spriteWidth * position;

  ctx.drawImage(
    playerImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );

  //   if (gameFrame % staggerFrames === 0) {
  //     if (frameX < 6) frameX++;
  //     else frameX = 0;
  //   }

  gameFrame++;

  requestAnimationFrame(animate);
}

animate();
