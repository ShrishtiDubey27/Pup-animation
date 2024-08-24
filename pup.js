const canvas= document.getElementById('canvas1');
const  ctx = canvas.getContext('2d');
const canvas_width= canvas.width=600;
const canvas_height= canvas.height=600;

const playerimage = new Image();
playerimage.src = 'shadow_dog.png'; 


const spritwidth=575;
const spritHeight=523;
let frameX= 0;
let frameY=4;
let gameFrame=0;
let staggerFrame=6;

function animate(){
  ctx.clearRect(0,0,canvas_width,canvas_height);
 let position = Math.floor(gameFrame/staggerFrame)%11;
 frameX=  spritwidth *  position;
  ctx.drawImage(playerimage,frameX,8*spritHeight,spritwidth,spritHeight,0,0,spritwidth,spritHeight);

  gameFrame++;
  requestAnimationFrame(animate);
};
animate();