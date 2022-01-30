const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

function setup() {
    createCanvas(400,400);
    engine=Engine.create();
   world=engine.world;

   var ball_options={
       restitution:0.95,
       frictionAir:0.01,
   }
   var ground_options={
       isStatic:true
   }
   ball=Bodies.circle(100,10,20,ball_options);
   World.add(world,ball);
   ground=Bodies.rectangle(0,370,400,20,ground_options);
   World.add(world,ground);
}

function draw() 
{
  background("blue");
  Engine.update(engine);
  fill("purple");
  ellipse(ball.position.x,ball.position.y,20);
  fill("green");
  rect(ground.position.x,ground.position.y,400,20);
}

