var canvas = new fabric.Canvas('myCanvas');
var music= document.getElementById("myAudio");
var background_object = "";

function btn_click()
{	
    document.getElementById("note").style.visibility = "visible";
    document.getElementById("myButton").innerHTML = "Double click";
}

function btn_open()
{	
    document.getElementById("note").style.visibility = "hidden";
    document.getElementById("myButton").style.visibility = "hidden";
    run();
}

function run(){
	document.getElementById("gliter").style.backgroundImage = "url(gliter2.gif)";
    music.play();
    music.loop =true;
    document.getElementById("myCanvas").style.backgroundImage = "url(MyPost.png)";
    canvas_text();
}

function canvas_text(){
    var text1 = new fabric.Text("ROSE ARE RED", {left: 100, top: 40, fill:'#9C6069', fontSize: '30', fontFamily: 'Cinzel serif'});
    var text2 = new fabric.Text("VIOLETS ARE BLUE,", {left: 60, top: 90, fill:'#9C6069', fontSize: '30', fontFamily: 'Cinzel serif'});
    var text3 = new fabric.Text("TURN TO IN TIMES OF NEED", {left: 15, top: 140, fill:'#9C6069', fontSize: '28', fontFamily: 'Cinzel serif'});
    var text4 = new fabric.Text("HAPPY BIRTHDAY", {left: 75, top: 190, fill:'#9C6069', fontSize: '30', fontFamily: 'Cinzel serif'});
    var text5 = new fabric.Text("MOM", {left: 160, top: 240, fill:'#9C6069', fontSize: '30', fontFamily: 'Cinzel serif'});
    canvas.add(text1);
    canvas.add(text2);
    canvas.add(text3);
    canvas.add(text4);
    canvas.add(text5);
}

function open_it(){
    var ctx = canvas.getContext("2d");
    ctx.font="30px Cinzel serif";
    ctx.fillStyle = "red";
    ctx.fillText("OPEN ME", 140, 300);
}