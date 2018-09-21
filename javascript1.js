function fireProjectile() {
	var input_angle = document.getElementById("angle");
	var input_angle = parseInt(input_angle.value);
	var input_speed = parseInt(document.getElementById("speed").value);
	var projectile = new Projectile(input_speed, input_angle);
	if (count <= 5) {
		projectile.findPath();
	} else {
		alert("GAME OVER!!");
	}
}
var count = 0;
var score = 0;
function setScore() {
	score++;
	document.getElementById('score').value = score;
}

function resetScore() {
	count = 0;
	randomBox();
	score = 0;
	document.getElementById('score').value = 0;
}

function randomBox() {
	var randombox = document.getElementById('box');
	randombox.style.backgroundColor = "red";
	randombox.style.left = 985 + 'px';
	randombox.style.top = (Math.floor((Math.random() * 450) + 75)) + 'px';
	defaultArrow();



}

function defaultArrow() {
	var randomarrow = document.getElementById('arrow');
	randomarrow.style.left = 10 + 'px';
	randomarrow.style.top = 540 + 'px';
	randomarrow.style.backgroundImage = "image/fire.GIF";
}

//Position of the Person Image which will throw the Ball
var canvas = document.getElementById('bigCanvas');
var ctx = canvas.getContext("2d");
var img = document.getElementById("person");
ctx.drawImage(img, -15, 425); // Here (image of the person,x-cordinate,y-cordinate)

const GRAVITY = 9.8;

function Projectile(vel, ang) {
	this.velocity = vel;
	this.angle = ang;

	this.showProperties = function () {
		console.log("Velocity:" + this.velocity);
		console.log("Angle:" + this.angle);
	}


	this.findPath = function () {
		var flag = true;
		var tvelocity = this.velocity;
		var tangle = this.angle;
		var xc = 0;
		var yc = 0;
		var t = 0;

		document.getElementById('arrow').style.backgroundImage = 'image/fire.GIF';

		var anim_object = document.getElementById("arrow");
		var box = document.getElementById('box');




		var boxheight = box.offsetHeight;
		var boxwidth = box.offsetWidth;
		var boxX = box.offsetLeft;
		var boxY = box.offsetTop;



		var animId = setInterval(function () {
			xc = Math.floor(tvelocity * Math.cos(tangle * Math.PI / 180) * t);
			yc = Math.floor(tvelocity * Math.sin(tangle * Math.PI / 180) * t - 0.5 * GRAVITY * t * t);
			t += 0.1;
			yc = 530 - yc;
			anim_object.style.top = yc + 'px';
			anim_object.style.left = xc + 'px';

			var arrowheight = anim_object.offsetHeight;
			var arrowwidth = anim_object.offsetWidth;
			var arrowX = anim_object.offsetLeft;
			var arrowY = anim_object.offsetTop;


			// If collision occurs
			if ((arrowX + arrowwidth) > boxX &&
				arrowX < (boxX + boxwidth) &&
				(arrowY + arrowheight) > boxY &&
				arrowY < (boxY + boxheight)) {
				clearInterval(animId);
				setScore();
				// Fire Effect
				// document.getElementById("box").style.backgroundColor="white";
				// document.getElementById("box").style.backgroundImage='image/person.jpg';

				randomBox();

			}
			// If the box gets out of the target
			if (xc > 1010 || yc > 570) {
				// document.getElementById('arrow').style.backgroundColor = 'white';
				defaultArrow();

			}
			if (xc > 1200 || yc > 570) {
				clearInterval(animId);
				count++;
			}
			console.log("(x,y):(" + xc + "," + yc + ")");
		}, 40);
	}
}

