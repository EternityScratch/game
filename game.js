// v0.0.2

// For now, it only renders a menu + button backgrounds

// Next update could feature clickable buttons??


let WIDTH = 700;

let HEIGHT = 500;

let menu = [];



function MenuItem(x_, y_, ySpeed_, yPower_, msg_) {	

	this.x = x_;

	this.y = y_;

	this.ySpeed = ySpeed_;

	this.yPower = yPower_;

	this.msg = msg_;

	

	this.render = () => {
              rect(this.x - this.x + 200, this.y +sin(frameCount * this.ySpeed) * this.yPower - 42, 300, 50)

		push(); // Don't remove this and pop(); might need that later

		textSize(50);
        
        strokeWeight(1);
		text(this.msg, this.x, this.y + sin(frameCount * this.ySpeed) * this.yPower);
        

		pop();

	}

}



setup = () => {

	menu.push(new MenuItem(WIDTH / 2 - 80, 100, 0.05, 10, "GAME"));
   
	menu.push(new MenuItem(WIDTH / 2 - 68, 250, 0.05, 10, "PLAY"));

	menu.push(new MenuItem(WIDTH / 2 - 130, 350, 0.05, 10, "SETTINGS"));

	createCanvas(WIDTH, HEIGHT,);

}



draw = () => {

	background(200);

	

	menu.forEach((item) => { // Render all menu items

		item.render();

	});

}
