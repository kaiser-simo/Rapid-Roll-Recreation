let ballX = 300
let ballY = 0
let barrierX = []
let barrierY = []
let killerX = []
let killerY = []
let speed = 0
let lives = 5
let counter = 0
let speedcounter = 0
const grav = 0.3
for (let i = 0; i < 5; i++) {
	barrierX[i] = Math.random() * 600
	barrierY[i] = 500 + i * Math.random() * 600
}
for (let i = 0; i < 1; i++) {
	killerX[i] = Math.random() * 600
	killerY[i] = 500 + i * Math.random() * 600
}
function update() {
	if (speedcounter >= 8) {
		for (let i = 0; i < 5; i++) {
			barrierY[i] -= 1
		}
		for (let i = 0; i < 1; i++) {
			killerY[i] -= 3
		}
	}
	if (speedcounter >= 32) {
		for (let i = 0; i < 5; i++) {
			barrierY[i] -= 4
		}
		for (let i = 0; i < 1; i++) {
			killerY[i] -= 6
		}
	}
	if (speedcounter >= 64) {
		for (let i = 0; i < 5; i++) {
			barrierY[i] -= 5
		}
		for (let i = 0; i < 1; i++) {
			killerY[i] -= 7
		}
	}
	if (speedcounter >= 96) {
		for (let i = 0; i < 5; i++) {
			barrierY[i] -= 7
		}
		for (let i = 0; i < 1; i++) {
			killerY[i] -= 9
		}
	}
	speed += grav
	if (lives <= 0) {
		alert("Game Over")
	}
	if (ballY <= -75) {
		lives -= 1
		ballY = 150
		speed = 0
		console.log("Lives left:", lives)
	}
	if (ballY >= 600) {
		lives -= 1
		ballY = 0
		speed = 0
		console.log("Lives left:", lives)
	}
	for (let i = 0; i < 1; i++) {
		killerY[i] -= 5
		if (killerY[i] < -50) {
			counter = 0
			killerX[i] = Math.random() * 600
			killerY[i] = 700 + i * Math.random() * 600
		}
		if (areColliding(ballX, ballY, 50, 50, killerX[i], killerY[i], 200, 50)) {
			if (counter < 1) {
				speedcounter++
				counter++
				lives -= 1
				console.log("Lives left:", lives)
			}
		}
	}
	for (let i = 0; i < 5; i++) {
		barrierY[i] -= 1
		if (barrierY[i] < -50) {
			barrierX[i] = Math.random() * 600
			barrierY[i] = 700 + i * Math.random() * 600
		}
		if (areColliding(ballX, ballY, 50, 50, barrierX[i], barrierY[i], 200, 50)) {
			if (counter < 1) {
				counter++
				speedcounter++
			}
			ballY = barrierY[i] - 50
			speed = 0
		}
	}
	if (isKeyPressed[68]) {
		ballX += 5
	}
	if (isKeyPressed[65]) {
		ballX -= 5
	}
	ballY += speed
}

function draw() {
	context.font = '50px serif';
	context.fillText("Lives:", 50, 90);
	context.fillText(lives, 180, 90)
	drawImage(ballOrTree, ballX, ballY, 50, 50)
	for (let i = 0; i < 5; i++) {
		drawImage(box, barrierX[i], barrierY[i], 200, 50)
	}
	for (let i = 0; i < 1; i++) {
		drawImage(boxItem, killerX[i], killerY[i], 200, 50)
	}
}

function keydown(key) {
	console.log(key)
}