const canvas=document.getElementById('canvas');
const ctx = canvas.getContext("2d");



var d=document.getElementById('H1');


function message(a,b)
{

    ctx.font="20px Arial";
    ctx.fillStyle="purple";
    ctx.fillText(a+" "+b,400,30);
}

const player2={
    
    x:200,y:570,width:150,height:10,speed:5,dx:0,dy:0,score:0
};    

const circle={
    x:200,y:200,size:30,dx:5,dy:4
};
function NowPos()
{
    player2.x+=player2.dx;
   player2.y+=player2.dy;
   detectWallP();
 
}
function player()
{
  ctx.beginPath();
  ctx.fillRect(player2.x,player2.y,player2.width,player2.height);
  ctx.fillStyle='black';
  ctx.fill();
}
function draw()
{
    ctx.beginPath();
    ctx.arc(circle.x,circle.y,circle.size,0,Math.PI*2);
    ctx.fillStyle='purple';
    ctx.fill();
}
function detectWallP()
{
    if(player2.x<0)
    {
      player2.x=0;
    }
    else if(player2.x+player2.width>canvas.width)
    {
        player2.x=canvas.width-player2.width;

    }

}

function update()
{
    if(player2.score<21)
    {
        var a=0;
    ctx.clearRect(0,0,canvas.width,canvas.height);
  
    player();

    NowPos();

    draw();

message("Your  Point ",player2.score);

  
     circle.x +=circle.dx;
    circle.y +=circle.dy;

    if(circle.x+circle.size>canvas.width || circle.x-circle.size<0)
    {
        circle.dx*=-1;
       

    }
    if(circle.y+circle.size>canvas.height || circle.y-circle.size<0)
    {
        
        circle.dy*=-1;
  
    }
    // 
   else if(circle.y+circle.size==player2.y  || circle.y-circle.size<0)
    {

        console.log(canvas.height);
        console.log(player2.y);
        player2.score++;
        circle.dy*=-1;
    }

    else if(circle.y+circle.size>canvas.height  || circle.y-circle.size<0)
    {
        player2.score--;
        circle.dy*=-1;
    }
    requestAnimationFrame(update);
       
    } 
   else
   {
    d.innerHTML="You Win";
    
   }
}

function moveLeft()
{
    player2.dx=-player2.speed;


}
function moveRight()
{
     player2.dx=player2.speed;
    
}
function KeyDown(e)
{
   if(e.key=='ArrowLeft' || e.key=='Left')
   {
   
    moveLeft();
   }

 else  if(e.key=='ArrowRight' || e.key=='Right')
   {

    moveRight();
   }


}
function KeyRight(e)
{
if(e.key=='ArrowLeft' || e.key=='Left' || e.key=='ArrowRight' || e.key=='Right')
   {
   
   player2.dx=0;
   player2.dy=0;

   }
}


update();


document.addEventListener('keydown',KeyDown);
document.addEventListener('keyup',KeyRight);


// draw();


