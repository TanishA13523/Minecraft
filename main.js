var canvas= new fabric.Canvas("myCanvas");

blockImageWidth=30;
blockImageheight=30;

player_x=10;
player_y=10;

var playerObject="";
 var blockImageObject="";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
        playerObject=Img;

        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(playerObject);
    });
}

function NewImage(getImage)
{
    fabric.Image.fromURL(getImage, function(Img){
        blockImageObject=Img;

        blockImageObject.scaleToWidth(150);
        blockImageObject.scaleToHeight(140);
        blockImageObject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(blockImageObject);
    });
}

window.addEventListener ("keydown" , Mykeydown); 

function Mykeydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);

if(e.shiftKey== true && keyPressed== "80")
{
    console.log("p & shift pressedTogether");
    blockImageWidth= blockImageWidth + 10;
    blockImageheight= blockImageheight + 10;
    document.getElementById("current_width").innerHTML= blockImageWidth;
    document.getElementById("current_height").innerHTML= blockImageheight;
}

if(e.shiftKey== true && keyPressed== "77")
{
    console.log("m & shift pressedTogether");
    blockImageWidth= blockImageWidth - 10;
    blockImageheight= blockImageheight - 10;
    document.getElementById("current_width").innerHTML= blockImageWidth;
    document.getElementById("current_height").innerHTML= blockImageheight;
}

if (keyPressed =="38") {
Up();
console.log ("up");   
}

if (keyPressed =="40") {
    down();
    console.log ("down");   
    }

if (keyPressed =="37") {
        left();
        console.log ("left");   
        }

 if (keyPressed =="39") {
            right();
        console.log ("right");   
            }

 if (keyPressed =="87") {
        NewImage("wall.jpg");
        console.log ("w");    }

 if (keyPressed =="71") {
        NewImage("ground.png");
        console.log ("g");    }

 if (keyPressed =="76") {
        NewImage("light_green.png");
        console.log ("l");    }

 if (keyPressed =="84") {
        NewImage("trunk.jpg");
        console.log ("t");    }

 if (keyPressed =="82") {
        NewImage("roof.jpg");
        console.log ("r");    }

 if (keyPressed =="89") {
        NewImage("yellow_wall.png");
        console.log ("y");    }

 if (keyPressed =="68") {
        NewImage("dark_green.png");
        console.log ("d");    }

 if (keyPressed =="85") {
        NewImage("unique.png");
        console.log ("u");    }
 if (keyPressed =="67") {
        NewImage("cloud.jpg");
        console.log ("c");    }
}
function up(){
    if(player_y >=0)
    {

    player_y = player_y - block_image_height  ;
    console.log("block image height = " + block_image_height)  ;
    console.log("when Up arrow key is press, X = " +player_x + " , Y = "+player_y);
    canvas.remove(player_object);
    player_update();
   }


}
function down()
{
    if(player_y <=500)
    {
        player_y = player_y + block_image_height  ;
        console.log("block image height = " + block_image_height)  ;
        console.log("when down arrow key is press, X = " +player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();  
    }
}

function left()
{
    if(player_x >0)
    {
        player_x = player_x - block_image_width  ;
        console.log("block image width = " + block_image_width)  ;
        console.log("when left arrow key is press, X = " +player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();  
    }
}

function right()
{
    if(player_x <=850)
    {
        player_x = player_x + block_image_width  ;
        console.log("block image width = " + block_image_width)  ;
        console.log("when right arrow key is press, X = " +player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();  
    }
}