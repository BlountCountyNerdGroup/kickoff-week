ready = false;

//this is where we define the size of the game
canvasWidth = 100;
canvasHeight = 1000;

heroSpeed = 0.1;

score = 0;

scoreLabel = "Goblins Captured: ";
score = 0;

raiseScore = function () {
	score = score + "1";
};

monsterVelocity = 10;

function movePlayer(direction) {
    if (direction == "up") {
        hero.y = hero.y + 5;
    }
    if (direction == "down") { 
        hero.y = hero.y - 5;
    }
    if (direction == "left") { 
        hero.x = hero.x + 5;
    }
    if (direction == "right") { 
        hero.x = hero.x - 5;
    }
}