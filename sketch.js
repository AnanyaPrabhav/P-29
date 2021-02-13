var stand;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){

}

function setup(){
    createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    
    stand = new Ground(400, 750, 800, 20);

    Engine.run(engine);
}

function draw(){
    background("lightblue");
    stand.display();
    
    drawSprites();
}