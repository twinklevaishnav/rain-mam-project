const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;

var thunder;
var thunder1;
var thunder2;
var thunder3; 
var thunder4;
var thunderFrame = 0;

var maxDrops = 100;
var drops = [];


function preload(){
   
    thunder1 = loadImage("images/Thunder Bolt/1.png");
    thunder2 = loadImage("images/Thunder Bolt/2.png");
    thunder3 = loadImage("images/Thunder Bolt/3.png");
    thunder4 = loadImage("images/Thunder Bolt/4.png");
    
}

function setup(){
createCanvas(400,650);

engine = Engine.create();
world = engine.world;   

umbrella = new Umbrella(200,450);

if(frameCount % 150 === 0){
for(var i = 0; i<maxDrops; i++){
drops.push(new Drops(random(0,400),random(0,400)))

  }  
 }
}

function draw(){

    Engine.update(engine);
    background(0,0,0);

 var rand = Math.round(random(1,4));

 if(frameCount % 80 === 0){
   thunderFrame = frameCount;
   thunder = createSprite(random(10,370),random(10,30),10,10);

  switch(rand){
 case 1:thunder.addImage(thunder1);
    break;
 case 2:thunder.addImage(thunder2);
    break;
 case 3:thunder.addImage(thunder3);
    break;
 case 4:thunder.addImage(thunder4);
    break;
          default:break;
}

thunder.scale = random(0.3,0.6);

}

if(thunderFrame + 10 === frameCount && thunder){
thunder.destroy();

}

for(var i = 0; i<maxDrops; i++){
drops[i].showDrop();
drops[i].update();
}

umbrella.display();
drawSprites();

}