function fireProjectile() {
    var input_angle = document.getElementById("angle");
    var input_angle = parseInt(input_angle.value);
    var input_speed = parseInt(document.getElementById("speed").value);
    var projectile = new Projectile(input_speed, input_angle);
    projectile.findPath();
}

var canvas = document.getElementById("bigcanvas");
var ctx = canvas.getContext("2d");

var canvas1 = document.getElementById("apple");
var ctx1 = canvas1.getContext("2d");
ctx1.fillStyle = "#FF0000";
ctx1.fillRect(40, 40, 15, 15);


function randomBox() {
    document.getElementById('score').value=0;
    score=0;
    ctx1.clearRect(0, 0, 75, 500);
    var y = Math.floor((Math.random() * 450) + 1);
    ctx1.fillStyle = "#FF0000";
    ctx1.fillRect(40, y, 15, 15);
    

}

function draw(event){
    var x=event.offsetX;
    var y=event.offsetY;
    alert("The value 0f x : "+x +" And the value of Y is : "+ y)
    return x;
}

var score=0;

function calculateScore() {

    if( (366== 366)){
        console.log()
        score=score+1;
        document.getElementById('score').value=score;
    
    }
}

const GRAVITY = 9.8;

// projectile function
function Projectile(vel, ang) {
    this.velocity = vel;
    this.angle = ang;

    this.showProperties = function () {
        console.log("Velocity:" + this.velocity);
        console.log("Angle:" + this.angle);
    }

    this.findPath = function () {
        var tvelocity = this.velocity;
        var tangle = this.angle;
        var xc = 0;
        var yc = 0;
        var t = 0;

        var anim_object = document.getElementById("arrow");
        var animId = setInterval(function () {
            xc = Math.floor(tvelocity * Math.cos(tangle * Math.PI / 180) * t);
            yc = Math.floor(tvelocity * Math.sin(tangle * Math.PI / 180) * t - 0.5 * GRAVITY * t * t);
            t += 0.1;

            yc = 500 - yc;
            anim_object.style.top = yc + 'px';
            anim_object.style.left = xc + 'px';
            if (xc > 1000 || yc > 540) {
                clearInterval(animId);
            }
            console.log("(x,y):(" + xc + "," + yc + ")");
        
        }, 30);
    }
}