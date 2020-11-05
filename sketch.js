//Create variables here
var dog,happyDog,veryhappydog;
var database,foodS,foodStock;
function preload()
{
  //load images here
  dog=loadImage("images/dogImg.png")
  veryhappydog=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  happyDog=createSprite(250,250,20,20);
  happyDog.addImage(dog);
  happyDog.scale=0.09;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock,);
}
function readStock(data){
  foodStock=data.val();
  }
  function writeStock(x){
    if(x<=0){
      x=0;
    }
    else{
      x=x-1;
    }
  database.ref('').update({
    Food:x
  })
  }
  

function draw() {  

  drawSprites();
  //add styles here\
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(veryhappydog);
}
}
