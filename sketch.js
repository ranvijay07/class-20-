var car, wall;

var speed,weigth;


function setup() {
  createCanvas(800,1000);

  speed=random(55,90);
  weigth=random(400,1500);

  car=createSprite(50,100,20,20);
  car.velocityX=speed;
  car.shapeColor="white";
  car.debug=false;

  car2=createSprite(50,400,20,20);
  car2.velocityX=speed;
  car2.shapeColor="white";
  
  
  wall=createSprite(700,200,20,1100);
  wall.shapeColor="grey"
  wall.debug=false;


}

function draw() {
  background("black");
  
  if(wall.x-car.x<(car.width+wall.width)/2 ){
    car.velocityX=0;
   
    var deformation=0.5 * weigth * speed* speed/22509;
    if(deformation>180){
      car.shapeColor="red"
    }
    if(deformation<180 && deformation>100){
      car.shapeColor="yellow"
    }
    if(deformation<100){
      car.shapeColor="lime"
    }
  }
  if(wall.x-car2.x<(car2.width+wall.width)/2 ){
    car2.velocityX=0;
   
    var deformation=0.5 * weigth * speed* speed/22509;
    if(deformation>180){
      car2.shapeColor="red"
    }
    if(deformation<180 && deformation>100){
      car2.shapeColor="yellow"
    }
    if(deformation<100){
      car2.shapeColor="lime"
    }
  }


  drawSprites();
}