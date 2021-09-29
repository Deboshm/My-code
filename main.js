var canvas=document.getElementById("my_canvas");
var ctx=canvas.getContext("2d");

var rover_width=100;
var rover_height=90;
var rover_x=200;
var rover_y=200;
var bg_tag;
var rover_tag;
 function add(){
     bg_tag=new Image();
     bg_tag.onload=upload_bg;
     bg_tag.src="mars.jpg";

     rover_tag=new Image();
     rover_tag.onload=upload_rover;
     rover_tag.src="rover.png";
 }
 function upload_bg(){
     ctx.drawImage(bg_tag,0,0,canvas.width,canvas.height);
 }
 function upload_rover(){
    ctx.drawImage(rover_tag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    var key=e.keyCode;
    console.log(key);
    if (key == '37'){
        console.log("left is pressed");
        Left();
    }
    if (key == '38'){
        console.log("up is pressed");
        up();}
        if (key == '39'){
            console.log("right is pressed");
            Right();}
            if (key == '40'){
                console.log("Down is pressed");
                Down();}
}
function up (){
    if (rover_y > 0){
        rover_y=rover_y-10;
        upload_bg();
        upload_rover();
    }
    
}
function Down(){
    if (rover_y < 500){
        rover_y=rover_y+10;
        upload_bg();
        upload_rover();
    }
    
}
function Left (){
    if (rover_x > 0){
        rover_x=rover_x-10;
        upload_bg();
        upload_rover();
    }
    
}
function Right (){
    if (rover_x < 900){
        rover_x=rover_x+10;
        upload_bg();
        upload_rover();
    }
    
}